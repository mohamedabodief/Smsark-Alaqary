// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Stack,
//   Typography,
//   Box,
//   Tooltip,
//   IconButton,
//   Avatar,
//   Button,
//   Popover,
//   Badge
// } from '@mui/material';
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import EmailIcon from '@mui/icons-material/Email';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { useUnreadMessages } from '../context/unreadMessageContext';
// import NotificationList from '../pages/notificationList';
// import Notification from '../FireBase/MessageAndNotification/Notification';
// import { auth } from '../FireBase/firebaseConfig';
// import SearchIcon from '@mui/icons-material/Search';
// export default function Nav({ toggleMode }) {
//   const [unreadCount, setUnreadCount] = useState(0);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const navigate = useNavigate();
//   const currentId = auth.currentUser?.uid;
//   const { totalUnreadCount } = useUnreadMessages();

//   const location = useLocation();
//   const userType = useSelector((state) => state.auth.type_of_user);

//   useEffect(() => {
//     if (currentId) {
//       const unsubscribe = Notification.subscribeUnreadCount(currentId, (count) => {
//         setUnreadCount(count);
//       });
//       return () => unsubscribe();
//     }
//   }, [currentId]);

//   // ⛳ دي كانت جوا دالة تانية وده غلط
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleMessagesClick = () => {
//     handleClose();
//     navigate("/inbox");
//   };

//   const handleProfileClick = () => {
//     if (userType === 'client') {
//       if (location.pathname !== '/client-dashboard') {
//         navigate('/client-dashboard');
//       }
//       // else: already on dashboard, do nothing or show a message
//     } else if (userType === 'organization') {
//       if (location.pathname !== '/organization-dashboard') {
//         navigate('/organization-dashboard');
//       }
//     } else if (userType === 'admin') {
//       navigate('/admin-dashboard');
//     } else {
//       navigate('/profile');
//     }
//   };
// const toSerachpage=()=>{
//   navigate('/search')
// }
//   // const handleClick = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };

//   // const handleClose = () => {
//   //   setAnchorEl(null);
//   // };

//   const open = Boolean(anchorEl);

//   return (
//     <AppBar
//       sx={{
//         bgcolor: "#6E00FE",
//         boxShadow: "none",
//         color: "#fff",
//       }}
//     >
//       <Toolbar sx={{ justifyContent: "space-between" }}>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             maxHeight: "64px",
//             overflow: "hidden",
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="Logo"
//             style={{ height: "200px", width: "200px" }}
//           />
//         </Box>

//         <Stack direction="row" spacing={4} sx={{ direction: "rtl" }}>
//           <Typography variant="button" sx={{ cursor: "pointer", px: 4 }} onClick={() => navigate('/home')}>
//             الصفحة الرئيسية
//           </Typography>
//           <Typography variant="button" sx={{ cursor: "pointer" }} onClick={() => navigate('/about')}>
//             عن الموقع
//           </Typography>

//           <Typography variant="button" sx={{ cursor: "pointer" }} onClick={() => navigate('/profile')}>
//             الصفحة الشخصية
//           </Typography>
//             <Typography variant="button" sx={{ cursor: "pointer" }} onClick={() => navigate('/search')}>
//             ابحث عن عقارك
//           </Typography>
//           <Typography variant="button" sx={{ cursor: "pointer" }} onClick={() => navigate('/contact')}>
//             تواصل معنا
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={1} alignItems="center">
//                <Tooltip title="الإشعارات">
//             <IconButton
//               size="small"
//               sx={{ color: "white" }}
//               onClick={handleClick}
//             >
//               <Badge
//                 badgeContent={unreadCount}
//                 color="error"
//                 sx={{
//                   "& .MuiBadge-badge": {
//                     top: "0px",
//                     right: "0px",
//                     backgroundColor: "#d1d1d1ff",
//                     color: "black",
//                     fontWeight: "bold",
//                     minWidth: "20px",
//                     height: "20px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "14px",
//                     zIndex: "10000",
//                   },
//                 }}
//               >
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="الرسائل">
//             <IconButton
//               size="small"
//               sx={{ color: "white" }}
//               onClick={handleMessagesClick}
//             >
//               <Badge
//                 badgeContent={totalUnreadCount}
//                 color="error"
//                 sx={{
//                   "& .MuiBadge-badge": {
//                     top: "0px",
//                     right: "0px",
//                     backgroundColor: "#d1d1d1ff",
//                     color: "black",
//                     fontWeight: "bold",
//                     minWidth: "20px",
//                     height: "20px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "14px",
//                     zIndex: "10000",
//                   },
//                 }}
//               >
//                 <EmailIcon />
//               </Badge>
//             </IconButton>
//           </Tooltip>
//             <Tooltip title="قائمة المفضل">
//             <Button onClick={() => navigate('/favorite')} sx={{ color: '#fff' }}>
//               <FavoriteIcon />
//             </Button>
//           </Tooltip>
//           <Tooltip title="تبديل الثيم">
//             <IconButton size="small" onClick={toggleMode}>
//               <Brightness4Icon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="ملفك الشخصي" placement='left'>
//             <IconButton size="small" onClick={handleProfileClick}>
//               <AccountCircleIcon />
//             </IconButton>
//           </Tooltip>
//           <Popover
//             open={open}
//             anchorEl={anchorEl}
//             onClose={handleClose}
//             anchorOrigin={{
//               vertical: 'bottom',
//               horizontal: 'left',
//             }}
//             transformOrigin={{
//               vertical: 'top',
//               horizontal: 'right',
//             }}
//           >
//             <NotificationList userId={currentId} />
//           </Popover>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Button,
  Popover,
  Badge,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useUnreadMessages } from "../context/unreadMessageContext";
import NotificationList from "../pages/notificationList";
import Notification from "../FireBase/MessageAndNotification/Notification";
 import SearchIcon from '@mui/icons-material/Search';

import { auth } from "../FireBase/firebaseConfig";

export default function Nav({ toggleMode }) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginPromptAnchorEl, setLoginPromptAnchorEl] = useState(null);
  const navigate = useNavigate();
  const currentId = auth.currentUser?.uid;
  const { totalUnreadCount } = useUnreadMessages();

  const location = useLocation();
  const userType = useSelector((state) => state.auth.type_of_user);

  useEffect(() => {
    if (currentId) {
      const unsubscribe = Notification.subscribeUnreadCount(
        currentId,
        (count) => {
          setUnreadCount(count);
        }
      );
      return () => unsubscribe();
    }
  }, [currentId]);

  useEffect(() => {
    if (loginPromptAnchorEl) {
      const timer = setTimeout(() => {
        setLoginPromptAnchorEl(null);
        navigate("/login");
      }, 1500); // إغلاق الـ Popover والانتقال بعد 1.5 ثانية
      return () => clearTimeout(timer); // تنظيف الـ timer
    }
  }, [loginPromptAnchorEl, navigate]);

  const handleClick = () => {
    if (!currentId) {
      setLoginPromptAnchorEl(document.body);
    } else {
      setAnchorEl(document.body);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMessagesClick = () => {
    if (!currentId) {
      setLoginPromptAnchorEl(document.body);
    } else {
      handleClose();
      navigate("/inbox");
    }
  };

  const handleProfileClick = () => {
    if (!currentId) {
      setLoginPromptAnchorEl(document.body);
    } else if (userType === "client") {
      if (location.pathname !== "/client-dashboard") {
        navigate("/client-dashboard");
      }
    } else if (userType === "organization") {
      if (location.pathname !== "/organization-dashboard") {
        navigate("/organization-dashboard");
      }
    } else if (userType === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/profile");
    }
  };
const toSerachpage=()=>{
   navigate('/search')
}
  const handleFavoriteClick = () => {
    if (!currentId) {
      setLoginPromptAnchorEl(document.body);
    } else {
      navigate("/favorite");
    }
  };

  // const handleProfilePageClick = () => {
  //   if (!currentId) {
  //     setLoginPromptAnchorEl(document.body);
  //   } else {
  //     navigate("/profile");
  //   }
  // };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const open = Boolean(anchorEl);
  const loginPromptOpen = Boolean(loginPromptAnchorEl);

  return (
    <AppBar
      sx={{
        bgcolor: "#6E00FE",
        boxShadow: "none",
        color: "#fff",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxHeight: "64px",
            overflow: "hidden",
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: "200px", width: "200px" }}
          />
        </Box>

        <Stack
          direction="row"
          spacing={4}
          sx={{
            direction: "rtl",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="button"
            sx={{ cursor: "pointer", pl: 4 }}
            onClick={() => navigate("/home")}
          >
            الصفحة الرئيسية
          </Typography>
          <Typography
            variant="button"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/about")}
          >
            عن الموقع
          </Typography>
         <Typography variant="button" sx={{ cursor: "pointer" }} onClick={() => navigate('/search')}>
            ابحث عن عقارك
          </Typography>

          <Typography
            variant="button"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          >
            تواصل معنا
          </Typography>
          {!currentId && (
            <Button
              variant="outlined"
              sx={{
                bgcolor: "transparent",
                color: "#fff",
                borderColor: "#fff",
                borderRadius: "25px",
                padding: "6px 20px",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#fff",
                  color: "#6E00FE",
                  borderColor: "#fff",
                },
              }}
              onClick={handleLoginClick}
            >
              سجّل الدخول أو انضم إلينا{" "}
            </Button>
          )}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          {currentId && (
            <>
              <Tooltip title="الإشعارات">
                <IconButton
                  size="small"
                  sx={{ color: "white" }}
                  onClick={handleClick}
                >
                  <Badge
                    badgeContent={unreadCount}
                    color="error"
                    sx={{
                      "& .MuiBadge-badge": {
                        top: "0px",
                        right: "0px",
                        backgroundColor: "#d1d1d1ff",
                        color: "black",
                        fontWeight: "bold",
                        minWidth: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        zIndex: "10000",
                      },
                    }}
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="الرسائل">
                <IconButton
                  size="small"
                  sx={{ color: "white" }}
                  onClick={handleMessagesClick}
                >
                  <Badge
                    badgeContent={totalUnreadCount}
                    color="error"
                    sx={{
                      "& .MuiBadge-badge": {
                        top: "0px",
                        right: "0px",
                        backgroundColor: "#d1d1d1ff",
                        color: "black",
                        fontWeight: "bold",
                        minWidth: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        zIndex: "10000",
                      },
                    }}
                  >
                    <EmailIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Tooltip title="قائمة المفضل">
                <Button onClick={handleFavoriteClick} sx={{ color: "#fff" }}>
                  <FavoriteIcon />
                </Button>
              </Tooltip>
            </>
          )}
          <Tooltip title="تبديل الثيم">
            <IconButton size="small" onClick={toggleMode}>
              <Brightness4Icon />
            </IconButton>
          </Tooltip>
          <Tooltip title="ملفك الشخصي" placement="left">
            <IconButton size="small" onClick={handleProfileClick}>
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationList userId={currentId} />
          </Popover>
          <Popover
            open={loginPromptOpen}
            anchorEl={loginPromptAnchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{
              mt: "64px", // إزاحة لأسفل بمقدار ارتفاع الناف بار
            }}
            disableRestoreFocus // منع إعادة التركيز
          >
            <Box sx={{ p: 2, bgcolor: "#fff", borderRadius: "8px" }}>
              <Typography>يرجى تسجيل الدخول أولاً</Typography>
            </Box>
          </Popover>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
