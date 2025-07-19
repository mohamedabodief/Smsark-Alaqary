import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  keyframes,
  CircularProgress,
  Breadcrumbs,
  Button,
  Avatar
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  FavoriteBorder as FavoriteBorderIcon,
  BookmarkBorder as BookmarkBorderIcon,
  OutlinedFlag as OutlinedFlagIcon,
  ShareOutlined as ShareOutlinedIcon
} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { useParams, Link } from 'react-router-dom';
import MapPicker from '../../LocationComponents/MapPicker';
import FinancingAdvertisement from '../../FireBase/modelsWithOperations/FinancingAdvertisement';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';
function DetailsForFinincingAds() {
  const { id } = useParams();
  const [clientAds, setClientAds] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [city, setCity] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [road, setRoad] = useState('');
  const [showFull, setShowFull] = useState(false);
  const navigate = useNavigate();
  const toggleShow = () => setShowFull((prev) => !prev);

  useEffect(() => {
    const fetchAd = async () => {
      const ad = await FinancingAdvertisement.getById(id);
      if (ad) {
        setClientAds(ad);
        if (Array.isArray(ad.images) && ad.images.length > 0) {
          setMainImage(ad.images[0]);
        }
      }
    };
    if (id) fetchAd();
  }, [id]);

  const pulse = keyframes`
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
    70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  `;

  if (!clientAds) {
    return (
      <Box sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <CircularProgress sx={{ color: '#6E00FE' }} size={80} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      <Box
        sx={{
          position: 'fixed',
          top: 10,
          left: 10,
          backgroundColor: '#1976d2',
          color: 'white',
          px: 2,
          py: 0.5,
          borderRadius: '8px',
          fontWeight: 'bold',
          zIndex: 10,
        }}
      >
        💰 تمويل عقاري {clientAds.financing_model}
      </Box>
      {/* واتساب*/}
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#25D366',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: '50%',
          zIndex: 999,
          cursor: 'pointer',
          animation: `${pulse} 2s infinite`,
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.2)' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
          width: 50,
          height: 50,
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 30 }} />
      </Box>

      {/* أزرار التفاعل + اسم الناشر */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ mb: 5, display: 'flex', gap: 4 }}>
          <Box sx={{ display: 'flex', gap: 1, color: '#807AA6' }}><Typography fontWeight="bold">مفضلة</Typography><FavoriteBorderIcon /></Box>
          <Box sx={{ display: 'flex', gap: 1 }}><Typography fontWeight="bold">حفظ</Typography><BookmarkBorderIcon /></Box>
          <Box sx={{ display: 'flex', gap: 1 }}><Typography fontWeight="bold">إبلاغ</Typography><OutlinedFlagIcon /></Box>
          <Box sx={{ display: 'flex', gap: 1 }}><Typography fontWeight="bold">مشاركة</Typography><ShareOutlinedIcon /></Box>
        </Box>

      </Box>

      {/* الصور الرئيسية والصغيرة */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'column', lg: 'row' },
        gap: 2,
      }}>
        <Box sx={{ flex: 3, height: '500px' }}>
          <img
            src={mainImage || 'https://via.placeholder.com/800x500'}
            alt="Main"
            style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
          />
        </Box>

        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: { xs: 'row', md: 'row', lg: 'column' },
          gap: 1,
          mt: { xs: 2, md: 2, lg: 0 },
          height: { lg: '100%' },
        }}>
          {clientAds?.images?.map((src, index) => (
            <Box
              key={index}
              onClick={() => setMainImage(src)}
              sx={{
                height: { xs: 90, md: 100, lg: 120 },
                cursor: 'pointer',
                border: mainImage === src ? '2px solid #1976d2' : 'none',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={src}
                alt={`img-${index}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', }}>
          <Box width={'30%'} sx={{ marginRight: 'auto', textAlign: 'center', marginTop: '40px' }}>
            <Box sx={{ border: '1px solid #E7E5F4', borderRadius: '20px', }}>



              <Box sx={{ backgroundColor: '#F7F7F7', marginTop: '40px', marginBottom: '20px' }} width={'100%'} dir='rtl'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3 5.5C3 4.67157 3.67157 4 4.5 4H19.5C20.3284 4 21 4.67157 21 5.5V14.5C21 15.3284 20.3284 16 19.5 16H4.5C3.67157 16 3 15.3284 3 14.5V5.5ZM4.5 5C4.22386 5 4 5.22386 4 5.5V14.5C4 14.7761 4.22386 15 4.5 15H19.5C19.7761 15 20 14.7761 20 14.5V5.5C20 5.22386 19.7761 5 19.5 5H4.5ZM6 7H6.5H8V8H7V9H6V7.5V7ZM17 8H16V7H17.5H18V7.5V9H17V8ZM9.5 10C9.5 8.61929 10.6193 7.5 12 7.5C13.3807 7.5 14.5 8.61929 14.5 10C14.5 11.3807 13.3807 12.5 12 12.5C10.6193 12.5 9.5 11.3807 9.5 10ZM12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1716 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5ZM6 12.5V11H7V12H8V13H6.5H6V12.5ZM18 11V12.5V13H17.5H16V12H17V11H18ZM3 17.5C3 17.2239 3.22386 17 3.5 17H20.5C20.7761 17 21 17.2239 21 17.5C21 17.7761 20.7761 18 20.5 18H3.5C3.22386 18 3 17.7761 3 17.5ZM3.5 19C3.22386 19 3 19.2239 3 19.5C3 19.7761 3.22386 20 3.5 20H20.5C20.7761 20 21 19.7761 21 19.5C21 19.2239 20.7761 19 20.5 19H3.5Z" fill="currentColor"></path></svg>
                <Typography>طريقة الدفع</Typography>
                <Typography>نقدا أو تقسيط</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '8px', marginBottom: '20px' }} padding={"10px 10px"}>
                <Button sx={{ backgroundColor: '#DF3631', width: '50%' }}>
                  <Typography sx={{ color: 'white', mx: '5px', fontSize: '18px', fontWeight: 'bold' }}>اتصل</Typography>
                  <PhoneIcon sx={{ color: 'white' }} />
                </Button>
                <Button sx={{ backgroundColor: '#4DBD43', width: '50%' }}>
                  <Typography sx={{ color: 'white', mx: '5px', fontSize: '18px', fontWeight: 'bold' }}>واتساب</Typography>
                  <WhatsAppIcon sx={{ color: 'white' }} />
                </Button>
              </Box>
            </Box>
          </Box>

          {/* بيانات الإعلان */}
          <Box dir="rtl" sx={{ mt: 6, width: '50%', textAlign: 'right', marginLeft: 'auto', boxShadow: '1px 1px 20px #c7c5c5', padding: '20px', borderRadius: '20px' }}>
            <Typography variant="h4" fontWeight="bold">{clientAds.title}</Typography>

            <Typography sx={{
              mt: 3,
              fontSize: '17px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: showFull ? 'none' : 3,
              WebkitBoxOrient: 'vertical',
            }}>
              {clientAds.description || 'لا يوجد وصف'}
            </Typography>

            {clientAds.description?.length > 100 && (
              <button
                className='details-button'
                onClick={toggleShow}
                style={{
                  marginTop: '10px',
                  border: '1px solid #8C84CC',
                  color: '#8C84CC',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {showFull ? 'إخفاء التفاصيل' : 'عرض المزيد'}
              </button>
            )}
            <Typography variant="subtitle1" fontWeight="bold" mt={2}>
              الجهة: {clientAds.org_name}
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              السعر من: {clientAds.start_limit} ج.م إلى: {clientAds.end_limit} ج.م
            </Typography>
            <Typography variant="subtitle1" mt={2}>
              الهاتف للتواصل: {clientAds.phone}
            </Typography>

            {/* نسب الفائدة */}
            <Box mt={2}>
              <Typography fontWeight="bold">نسب الفائدة حسب مدة السداد:</Typography>
              <ul style={{ paddingInlineStart: '20px' }}>
                <li>حتى 5 سنوات: {clientAds.interest_rate_upto_5}%</li>
                <li>حتى 10 سنوات: {clientAds.interest_rate_upto_10}%</li>
                <li>أكثر من 10 سنوات: {clientAds.interest_rate_above_10}%</li>
              </ul>
            </Box>

          </Box>

        </Box>


      </Box>
      <Box sx={{ width: '50%', display: 'flex', marginTop: '30px', marginLeft: 'auto' }} dir='rtl'>
        <Box sx={{ backgroundColor: '#F7F7FC', display: 'flex', gap: '30px', height: '20%', width: '100%', padding: '20px', borderRadius: '10px' }}>
          <Avatar alt={`${clientAds.org_name}`} src="/static/images/avatar/1.jpg" />
          <Typography sx={{ fontSize: '20px', }}>نشر بواسطة: {clientAds.org_name}</Typography>
        </Box>

      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate('/add-financing-ad')}
      >
        اضف اعلانك الان
      </Button>
    </Container>
  );
}

export default DetailsForFinincingAds;