// import {
//   Box, Typography, Card, CardMedia, CardContent, IconButton
// } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import FavoriteButton from './FavoriteButton';
// import { useRef, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FinancingAdvertisement from '../FireBase/modelsWithOperations/FinancingAdvertisement';
// import { financingAdsData } from '../FireBase/models/Users/FinAdsData';

// export default function BestFin() {
//   const sliderRef = useRef();
//   const navigate = useNavigate();
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const addUniqueAds = async () => {
//       try {
//         console.log('Fetching existing financing ads...');
//         const existingAds = await FinancingAdvertisement.getAll();
//         console.log('Existing ads:', existingAds);

//         for (const data of financingAdsData) {
//           const alreadyExists = existingAds.some(
//             (ad) => ad.title === data.title && ad.price === data.price
//           );

//           if (!alreadyExists) {
//             console.log('Adding new ad:', data);
//             const ad = new FinancingAdvertisement(data);
//             await ad.save();
//             console.log('Successfully saved ad:', data.title);
//           } else {
//             console.log('Ad already exists, skipping:', data.title);
//           }
//         }
//       } catch (error) {
//         console.error('Failed to add unique financing ads:', error);
//         setLoading(false);
//       }
//     };

//     addUniqueAds();

//     console.log('Subscribing to active financing ads...');
//     const unsubscribe = FinancingAdvertisement.subscribeActiveAds((ads) => {
//       console.log('Received active ads:', ads);
//       // Explicitly filter ads to ensure ads: true
//       const activeAds = ads.filter(ad => ad.ads === true);
//       console.log('Filtered active ads (ads: true):', activeAds);
//       setOffers(activeAds);
//       setLoading(false);
//     });

//     const interval = setInterval(() => {
//       const cardWidth = 344;
//       if (sliderRef.current) {
//         console.log('Auto-scrolling slider...');
//         sliderRef.current.scrollBy({
//           left: -cardWidth,
//           behavior: 'smooth',
//         });
//       }
//     }, 5000);

//     return () => {
//       console.log('Unsubscribing from active ads and clearing interval...');
//       unsubscribe();
//       clearInterval(interval);
//     };
//   }, []);

//   const scroll = (direction) => {
//     const cardWidth = 344;
//     if (sliderRef.current) {
//       console.log(`Scrolling ${direction}...`);
//       sliderRef.current.scrollBy({
//         left: direction === 'left' ? -cardWidth : cardWidth,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <Box sx={{ direction: 'rtl', paddingTop: 8, px: 5 }}>
//       <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
//         أفضل عروض التمويل
//       </Typography>

//       <Box sx={{ position: 'relative' }}>
//         <IconButton
//           onClick={() => scroll('left')}
//           sx={{ position: 'absolute', top: '50%', left: -10, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', boxShadow: 2 }}
//         >
//           <ArrowBackIos sx={{ color: 'grey' }} />
//         </IconButton>

//         <IconButton
//           onClick={() => scroll('right')}
//           sx={{ position: 'absolute', top: '50%', right: -10, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', boxShadow: 2 }}
//         >
//           <ArrowForwardIos sx={{ color: 'grey' }} />
//         </IconButton>

//         <Box
//           ref={sliderRef}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             overflowX: 'auto',
//             gap: 3,
//             scrollSnapType: 'x mandatory',
//             scrollPaddingRight: '60px',
//             pb: 2,
//             pl: 5,
//             '&::-webkit-scrollbar': { display: 'none' }
//           }}
//         >
//           {loading ? (
//             <Typography>...جاري تحميل العروض</Typography>
//           ) : offers.length === 0 ? (
//             <Typography>لا توجد عروض تمويل مفعلة حالياً.</Typography>
//           ) : (
//             offers.map((item, index) => (
//               <Box
//                 key={index}
//                 onClick={() => {
//                   console.log('Navigating to ad details:', item.id);
//                   navigate(`/details/financingAds/${item.id}`);
//                 }}
//                 sx={{ cursor: 'pointer' }}
//               >
//                 <Card sx={{ minWidth: { xs: 260, sm: 300, md: 320 }, scrollSnapAlign: 'start', flexShrink: 0, borderRadius: 3, position: 'relative', height: '100%' }}>
//                   <CardMedia
//                     component="img"
//                     height="160"
//                     image={item.images?.[0] || '/default-placeholder.png'}
//                   />
//                   <FavoriteButton advertisementId={item.id} type="financing" />
//                   <CardContent>
//                     <Typography color="primary" fontWeight="bold">
//                       {item.start_limit?.toLocaleString()} - {item.end_limit?.toLocaleString()} ج.م
//                     </Typography>
//                     <Typography variant="subtitle1">{item.org_name}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {item.financing_model}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Box>
//             ))
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// }



// src/Homeparts/BestFin.jsx
import {
  Box, Typography, Card, CardMedia, CardContent, IconButton
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import FavoriteButton from './FavoriteButton';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import FinancingAdvertisement from '../FireBase/modelsWithOperations/FinancingAdvertisement';
import { financingAdsData } from '../FireBase/models/Users/FinAdsData';
import { getCachedAds, saveAdsToCache, hasAdsChanged } from './adsCacheUtils';

const CACHE_KEY = 'fin_ads_cache';

export default function BestFin() {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const initializeAds = useCallback(async () => {
    try {
      const cachedAds = getCachedAds(CACHE_KEY);
      if (cachedAds) {
        setOffers(cachedAds.filter(ad => ad.ads === true));
        setLoading(false);
      }

      const existingAds = await FinancingAdvertisement.getAll();
      for (const data of financingAdsData) {
        const alreadyExists = existingAds.some(
          (ad) => ad.title === data.title && ad.price === data.price
        );
        if (!alreadyExists) {
          const ad = new FinancingAdvertisement(data);
          await ad.save();
        }
      }

      if (!cachedAds) {
        const freshAds = await FinancingAdvertisement.getActiveAds();
        const activeAds = freshAds.filter(ad => ad.ads === true);
        setOffers(activeAds);
        saveAdsToCache(CACHE_KEY, activeAds);
        setLoading(false);
      }
    } catch (error) {
      console.error('Initialization error:', error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeAds();

    const unsubscribe = FinancingAdvertisement.subscribeActiveAds((newAds) => {
      const activeAds = newAds.filter(ad => ad.ads === true);
      
      setOffers(prevOffers => {
        const currentAds = prevOffers.length > 0 ? prevOffers : getCachedAds(CACHE_KEY);
        if (!currentAds || hasAdsChanged(currentAds, activeAds)) {
          saveAdsToCache(CACHE_KEY, activeAds);
          return activeAds;
        }
        return prevOffers;
      });

      setLoading(false);
    });

    const interval = setInterval(() => {
      const cardWidth = 344;
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: -cardWidth,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => {
      unsubscribe();
      clearInterval(interval);
    };
  }, [initializeAds]);

  const scroll = (direction) => {
    const cardWidth = 344;
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box sx={{ direction: 'rtl', paddingTop: 8, px: 5 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        أفضل عروض التمويل
      </Typography>

      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={() => scroll('left')}
          sx={{ position: 'absolute', top: '50%', left: -10, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', boxShadow: 2 }}
        >
          <ArrowBackIos sx={{ color: 'grey' }} />
        </IconButton>

        <IconButton
          onClick={() => scroll('right')}
          sx={{ position: 'absolute', top: '50%', right: -10, transform: 'translateY(-50%)', zIndex: 1, backgroundColor: 'white', boxShadow: 2 }}
        >
          <ArrowForwardIos sx={{ color: 'grey' }} />
        </IconButton>

        <Box
          ref={sliderRef}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            gap: 3,
            scrollSnapType: 'x mandatory',
            scrollPaddingRight: '60px',
            pb: 2,
            pl: 5,
            '&::-webkit-scrollbar': { display: 'none' }
          }}
        >
          {loading ? (
            <Typography>...جاري تحميل العروض</Typography>
          ) : offers.length === 0 ? (
            <Typography>لا توجد عروض تمويل مفعلة حالياً.</Typography>
          ) : (
            offers.map((item, index) => (
              <Box
                key={index}
                onClick={() => navigate(`/details/financingAds/${item.id}`)}
                sx={{ cursor: 'pointer' }}
              >
                <Card sx={{ minWidth: { xs: 260, sm: 300, md: 320 }, scrollSnapAlign: 'start', flexShrink: 0, borderRadius: 3, position: 'relative', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={item.images?.[0] || '/default-placeholder.png'}
                  />
                  <FavoriteButton advertisementId={item.id} />
                
                  <CardContent>
                    <Typography color="primary" fontWeight="bold">
                      {item.start_limit?.toLocaleString()} - {item.end_limit?.toLocaleString()} ج.م
                    </Typography>
                    <Typography variant="subtitle1">{item.org_name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.financing_model}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}