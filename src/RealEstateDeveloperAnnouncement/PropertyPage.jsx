//scr/RealEstateDeveloperAnnouncement/PropertyPage.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import PropertySidebar from "./PropertySidebar";
import PropertyForm from "./PropertyForm";
import RealEstateDeveloperData from "../FireBase/models/Advertisements/RealEstateDeveloperData";
import RealEstateDeveloperAdvertisement from "../FireBase/modelsWithOperations/RealEstateDeveloperAdvertisement";
import { auth } from "../FireBase/firebaseConfig";

const PropertyPage = () => {
  const [selectedItem, setSelectedItem] = useState("شقق للبيع");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // التحقق من وجود بيانات التعديل
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [loadingEditData, setLoadingEditData] = useState(false);

  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const editModeParam = urlParams.get('editMode');
  const adIdParam = urlParams.get('adId');

  // طباعة بيانات التعديل للتأكد
  console.log('Edit mode param:', editModeParam);
  console.log('Ad ID param:', adIdParam);

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  useEffect(() => {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log('No user logged in, redirecting to login');
      navigate('/login');
    } else {
      console.log('User logged in:', currentUser.uid);
    }
  }, [navigate]);

  // Fetch ad data for editing
  useEffect(() => {
    const fetchEditData = async () => {
      if (editModeParam === 'true' && adIdParam) {
        setLoadingEditData(true);
        setIsEditMode(true);
        
        try {
          console.log('Fetching ad data for ID:', adIdParam);
          const adData = await RealEstateDeveloperAdvertisement.getById(adIdParam);
          
          if (adData) {
            console.log('Fetched ad data:', adData);
            setEditData(adData);
            
            // Set property type from data
            const propertyType = adData.project_types?.[0] || "شقق للبيع";
            setSelectedItem(propertyType);
          } else {
            console.error('Ad not found');
            setError('الإعلان غير موجود');
          }
        } catch (error) {
          console.error('Error fetching ad data:', error);
          setError('حدث خطأ أثناء تحميل بيانات الإعلان');
        } finally {
          setLoadingEditData(false);
        }
      }
    };

    fetchEditData();
  }, [editModeParam, adIdParam]);

  const handleSubmit = async (formData) => {
    // التحقق من حالة تسجيل الدخول قبل الإرسال
    const currentUser = auth.currentUser;
    if (!currentUser) {
      setError("يجب تسجيل الدخول أولاً قبل إضافة عقار");
      navigate('/login');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      if (isEditMode && editData) {
        // وضع التعديل
        console.log('Updating advertisement with data:', formData);
        console.log('Edit data:', editData);
        const { images, ...otherData } = formData;
        // الصور القديمة (روابط)
        const oldImages = editData.images || [];
        // الصور الجديدة (ملفات فقط)
        const newImagesFiles = Array.isArray(images) ? images.filter(img => typeof img !== 'string') : [];
        // جميع الصور النهائية (روابط الصور القديمة + روابط الصور الجديدة إذا كانت موجودة)
        const allImageUrls = Array.isArray(images) ? images.filter(img => typeof img === 'string') : [];
        const updatedData = {
          ...editData,
          ...otherData,
          project_types: [selectedItem],
          images: allImageUrls.length > 0 ? allImageUrls : oldImages,
          id: editData.id, // تأكيد تمرير الـ ID الأصلي
          userId: editData.userId || currentUser.uid, // تأكيد userId
          adPackage: formData.adPackage, // استخدم القيمة الجديدة من الفورم
          receiptImage: editData.receiptImage || null, // تأكيد receiptImage
        };
        console.log('Updated data with ID:', updatedData.id);
        const advertisement = new RealEstateDeveloperAdvertisement(updatedData);
        await advertisement.update({ ...updatedData }, newImagesFiles);
        
        // Update status to pending for admin review
        try {
          await advertisement.returnToPending();
          console.log('Status updated to pending successfully');
        } catch (statusError) {
          console.error('Error updating status to pending:', statusError);
          // Don't fail the entire operation if status update fails
        }
        
        setSuccess(true);
        setTimeout(() => {
          navigate(`/detailsForDevelopment/${editData.id}`);
        }, 2000);
      } else {
        // وضع الإضافة الجديدة
        const { images, ...otherData } = formData;
        const realEstateData = new RealEstateDeveloperData({
          ...otherData,
          project_types: [selectedItem],
          userId: currentUser.uid,
          type_of_user: "developer",
          images: images || [], // إضافة الصور كروابط
          adPackage: formData.adPackage, // أضف هذا السطر
        });
        const advertisement = new RealEstateDeveloperAdvertisement(realEstateData);

        // حفظ الإعلان مع الصور والإيصال والحصول على ID
        console.log('About to save advertisement with receiptImage:', formData.receiptImage);
        const adId = await advertisement.save(images, formData.receiptImage);
        setSuccess(true);

        // الانتقال التلقائي لصفحة الديتيلز بعد ثانيتين
        setTimeout(() => {
          navigate(`/detailsForDevelopment/${adId}`);
        }, 2000);
      }
    } catch (err) {
      setError(err.message || "حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        // backgroundColor: "#f9f9f9",
        flexDirection: isMobile ? "column" : "row-reverse",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : 280,
          bgcolor: "background.paper",
          borderLeft: isMobile ? "none" : "1px solid #e0e0e0",
          borderBottom: isMobile ? "1px solid #e0e0e0" : "none",
        }}
      >
        <PropertySidebar
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          isMobile={isMobile}
        />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          maxWidth: isMobile ? "100%" : "calc(100% - 280px)",
        }}
      >
        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={handleCloseSnackbar}>
            {error}
            {error.includes("تسجيل الدخول") && (
              <Box sx={{ mt: 1 }}>
                <Typography variant="body2" color="inherit">
                  سيتم توجيهك لصفحة تسجيل الدخول...
                </Typography>
              </Box>
            )}
          </Alert>
        )}

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            severity="success"
            sx={{ width: "100%", mt: 3 }}
            onClose={handleCloseSnackbar}
          >
            {isEditMode ?
              "تم تحديث العقار بنجاح! سيتم إعادة مراجعته من قبل الإدارة. سيتم الانتقال لصفحة التفاصيل خلال ثانيتين..." :
              "تم حفظ العقار بنجاح! سيتم الانتقال لصفحة التفاصيل خلال ثانيتين..."
            }
          </Alert>
        </Snackbar>

        {(loading || loadingEditData) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
              my: 4,
            }}
          >
            <CircularProgress color="secondary" />
            <Typography sx={{ ml: 2, mt: 1 }}>
              {loadingEditData ? "جاري تحميل بيانات الإعلان..." : "جاري حفظ البيانات..."}
            </Typography>
          </Box>
        )}

        <PropertyForm
          onSubmit={handleSubmit}
          loading={loading}
          initialData={editData}
          isEditMode={isEditMode}
          loadingEditData={loadingEditData}
        />

        {isEditMode && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => navigate(`/detailsForDevelopment/${editData.id}`)}
              sx={{
                borderColor: '#6E00FE',
                color: '#6E00FE',
                '&:hover': {
                  borderColor: '#200D3A',
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              العودة لصفحة التفاصيل
            </Button>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              يمكنك العودة لصفحة التفاصيل في أي وقت
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PropertyPage;