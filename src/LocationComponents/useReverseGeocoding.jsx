import { useEffect, useState } from 'react';

export default function useReverseGeocoding(location) {
  const [address, setAddress] = useState({
    city: '',
    governorate: '',
    road: '',
    full: '',
    toString() { return this.full; }
  });

  useEffect(() => {
    if (!location || !location.lat || !location.lng) {
      console.log('[DEBUG] لا توجد إحداثيات صالحة:', location);
      setAddress({
        city: '',
        governorate: '',
        road: '',
        full: '',
        toString() { return this.full; }
      });
      return;
    }

    const { lat, lng } = location;
    console.log('[DEBUG] جلب العنوان للإحداثيات:', { lat, lng });

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`, {
      headers: {
        'User-Agent': 'YourAppName/1.0 (your.email@example.com)', // استبدلي بإيميلك
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('[DEBUG] استجابة Nominatim:', data);
        const addr = data.address || {};
        const city = addr.city || addr.town || addr.village || addr.hamlet || '';
        const governorate = addr.state || addr.county || addr.region || '';
        const road = addr.road || addr.neighbourhood || addr.suburb || '';
        const full = city || governorate || road ? `المحافظة: ${governorate || ''} - المدينة: ${city || ''} - الشارع: ${road || ''}`.trim() : '';

        const addressObj = {
          city,
          governorate,
          road,
          full,
          toString() { return this.full; }
        };
        console.log('[DEBUG] addressObj:', addressObj);
        setAddress(addressObj);
      })
      .catch((err) => {
        console.error('[DEBUG] فشل جلب العنوان:', err);
        setAddress({
          city: '',
          governorate: '',
          road: '',
          full: 'فشل تحديد العنوان',
          toString() { return this.full; }
        });
      });
  }, [location]);

  return address;
}