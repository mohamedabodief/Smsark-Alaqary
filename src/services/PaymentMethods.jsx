import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import instapayLogo from "../assets/instapay.png"; 

const PaymentIcons = {
  visa: (
    // SVG ICON
   <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="Et0R~umK8VADpitl6wcz1a_pFNd0FTuBU2Q_gr1"
        x1="20.375"
        x2="28.748"
        y1="1365.061"
        y2="1394.946"
        gradientTransform="translate(0 -1354)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00b3ee"></stop>
        <stop offset="1" stopColor="#0082d8"></stop>
      </linearGradient>
      <path
        fill="url(#Et0R~umK8VADpitl6wcz1a_pFNd0FTuBU2Q_gr1)"
        d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"
      ></path>
      <path
        d="M25.733,31c-1.376-0.014-2.847-0.291-3.752-0.708l-0.658-0.303l-0.178,0.83h-5.048l1.844-8.621	l-3.612,8.621H9.717l-2.59-10.013c-0.061-0.239-0.09-0.304-0.103-0.32c-0.006-0.006-0.034-0.024-0.119-0.071	c-0.574-0.312-1.607-0.652-2.698-0.89l-0.971-0.211l0.444-2.103h5.92c1.18,0,2.131,0.8,2.365,1.989l0.626,3.326l2.104-5.315h9.36	L23.674,19c1.055-1.245,2.845-2,5.037-2c1.072,0,2.073,0.183,3.151,0.576l0.818,0.299l-0.971,4.53l-1.135-0.521	c-0.82-0.378-1.555-0.457-2.026-0.457c-0.165,0-0.297,0.011-0.386,0.022c-0.065,0.008-0.123,0.019-0.173,0.031	c0.228,0.14,0.531,0.301,0.713,0.396c1.074,0.563,2.598,1.362,3.098,2.989l2.592-6.188c0.379-0.903,1.222-1.465,2.2-1.465h3.376	l2.842,13.607h-4.82l-0.363-1.733h-2.338l-0.627,1.733h-5.356l0.322-0.769C28.598,30.659,27.271,31,25.738,31H25.733z M23.366,25.935c0.704,0.33,1.367,0.641,2.543,0.641l0.104-0.001c0.312-0.005,0.594-0.077,0.738-0.147	c-0.117-0.094-0.373-0.265-0.924-0.533c-1.614-0.785-2.621-1.758-3.009-2.902l-0.522,2.444L23.366,25.935z"
        opacity=".05"
      ></path>
      <path
        d="M25.733,30.5c-1.306-0.013-2.696-0.272-3.543-0.662l-0.363-0.167l0.759-3.549l0.569,0.266	c0.717,0.336,1.467,0.688,2.754,0.688l0.109-0.001c0.521-0.008,1.3-0.186,1.306-0.642c0.002-0.188-0.152-0.44-1.277-0.988	c-0.727-0.354-2.937-1.432-2.908-3.615c0.019-2.548,2.311-4.329,5.572-4.329c1.013,0,1.96,0.174,2.98,0.546l0.409,0.149	l-0.749,3.495l-0.567-0.261c-0.903-0.416-1.714-0.503-2.235-0.503c-0.193,0-0.348,0.013-0.451,0.026	c-0.609,0.079-0.836,0.335-0.84,0.487c-0.005,0.238,0.672,0.594,1.216,0.88c1.267,0.664,3.001,1.575,2.992,3.711	c-0.012,2.673-2.313,4.469-5.728,4.469H25.733z M38.396,30.319l-0.363-1.733h-3.095l-0.627,1.733h-4.254l4.796-11.449	c0.3-0.715,0.967-1.158,1.739-1.158h2.97l2.633,12.607H38.396z M37.327,25.206l-0.424-2.033l-0.738,2.033H37.327z M16.716,30.319	l2.697-12.607h4.024l-2.696,12.607H16.716z M10.104,30.319l-2.492-9.638c-0.124-0.486-0.184-0.552-0.468-0.706	c-0.612-0.333-1.696-0.692-2.83-0.938l-0.485-0.105l0.258-1.22h5.515c0.934,0,1.688,0.637,1.875,1.586l0.945,5.021l2.614-6.607	h4.245l-5.284,12.607H10.104z"
        opacity=".07"
      ></path>
      <path
        fill="#fff"
        d="M23.638,21.836c-0.021,1.672,1.49,2.604,2.628,3.159c1.169,0.569,1.562,0.934,1.558,1.443	c-0.009,0.779-0.933,1.123-1.798,1.136c-1.509,0.023-2.386-0.407-3.083-0.733L22.4,29.384c0.7,0.322,1.995,0.604,3.339,0.616	c3.153,0,5.217-1.557,5.228-3.97c0.012-3.063-4.237-3.233-4.208-4.602c0.01-0.415,0.406-0.858,1.274-0.971	c0.43-0.057,1.616-0.1,2.96,0.519l0.528-2.46C30.798,18.252,29.868,18,28.711,18C25.743,18,23.655,19.578,23.638,21.836 M36.592,18.212c-0.576,0-1.061,0.336-1.278,0.851L30.81,29.819h3.151l0.627-1.733h3.851l0.364,1.733h2.777l-2.424-11.607H36.592 M37.033,21.348l0.909,4.359h-2.491L37.033,21.348 M19.818,18.212l-2.484,11.607h3.003l2.483-11.607H19.818 M15.375,18.212	l-3.126,7.9l-1.264-6.717c-0.148-0.75-0.734-1.183-1.385-1.183h-5.11L4.42,18.549c1.049,0.228,2.241,0.595,2.963,0.988	c0.442,0.24,0.568,0.45,0.713,1.02l2.395,9.263h3.174l4.865-11.607L15.375,18.212"
      ></path>
    </svg>
  ),
  vodafone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="50"
      height="50"
      viewBox="0 0 48 48"
    >
      <path
        fill="#d50000"
        d="M16.65,5.397c5.015-1.999,10.857-1.861,15.738,0.461l0.066,0.085l0.098-0.034	c3.704,1.776,6.852,4.706,8.857,8.303c1.718,3.062,2.614,6.591,2.526,10.105c-0.017,4.545-1.716,9.045-4.628,12.52	c-2.754,3.314-6.605,5.698-10.803,6.653c-4.209,0.971-8.738,0.552-12.677-1.237c-3.855-1.722-7.12-4.714-9.197-8.395	c-1.728-3.059-2.642-6.586-2.566-10.105c0.008-4.384,1.565-8.735,4.283-12.164C10.518,8.852,13.399,6.675,16.65,5.397z"
      ></path>
      <path
        fill="#fff"
        d="M28.205,6.039c1.377-0.233,2.792-0.392,4.183-0.181l0.2,0.034l-0.134,0.051	c-1.294,0.371-2.545,0.951-3.554,1.86c-1.816,1.58-2.961,3.981-2.828,6.411c2.464,0.618,4.926,1.703,6.61,3.674	c1.764,2.013,2.402,4.806,2.206,7.431c-0.311,4.005-3.029,7.754-6.812,9.142c-2.521,0.94-5.409,0.952-7.898-0.102	c-2.583-1.064-4.727-3.127-5.944-5.642c-1.182-2.397-1.505-5.159-1.156-7.792c0.527-3.716,2.393-7.19,5.057-9.808	C20.912,8.505,24.466,6.745,28.205,6.039z"
      ></path>
    </svg>
  ),
  instapay: (
    <img src={instapayLogo} alt="Instapay" style={{ width: 150, height: 150 }} />
  ),
};

const accountDetails = {
  VISA: {
    bankAccount: "1234 5678 9012 3456",
    phone: "غير متاح",
    paymentAddress: "غير متاح",
  },
  "فودافون كاش": {
    phone: "0109 876 5432",
    bankAccount: "غير متاح",
    paymentAddress: "غير متاح",
  },
  "انستا باي": {
    bankAccount: "9876 5432 1098 7654",
    phone: "0112 345 6789",
    paymentAddress: "smsark-alakary@instapay",
  },
};

const PaymentMethods = () => {
  const [open, setOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleOpen = (methodName) => {
    setSelectedMethod(methodName);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMethod(null);
  };

  const methods = [
    { name: "VISA", icon: PaymentIcons.visa },
    { name: "فودافون كاش", icon: PaymentIcons.vodafone },
    { name: "انستا باي", icon: PaymentIcons.instapay },
  ];

  const renderDialogContent = () => {
    if (!selectedMethod) return null;

    switch (selectedMethod) {
      case "VISA":
        return (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>رقم الحساب البنكي:</strong> {accountDetails["VISA"].bankAccount}
            </Typography>
            {/* <Typography variant="body1">
              <strong>رقم التليفون:</strong> {accountDetails["VISA"].phone}
            </Typography> */}
          </>
        );

      case "فودافون كاش":
        return (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>رقم التليفون:</strong> {accountDetails["فودافون كاش"].phone}
            </Typography>
            {/* <Typography variant="body1">
              <strong>عنوان الدفع:</strong> {accountDetails["فودافون كاش"].paymentAddress}
            </Typography> */}
          </>
        );

      case "انستا باي":
        return (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>رقم الحساب البنكي:</strong> {accountDetails["انستا باي"].bankAccount}
            </Typography>
            <Typography variant="body1">
              <strong>رقم التليفون:</strong> {accountDetails["انستا باي"].phone}
            </Typography>
            <Typography variant="body1">
              <strong>عنوان الدفع:</strong> {accountDetails["انستا باي"].paymentAddress}
            </Typography>
          </>
        );

      default:
        return <Typography>لا توجد تفاصيل متاحة.</Typography>;
    }
  };

  return (
    <>
      <Grid container sx={{ width: "100%",display:"flex",justifyContent:"center", py: 4, px: 2, borderRadius: 2, mt: 4, mb: 2 }}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ color: "#6E00FE", mb: 5,display:"flex",justifyContent:"center", fontWeight: "bold", fontSize: "1.5rem" }}>
            وسائل الدفع المتاحة
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {methods.map((method, index) => (
              <Box
                key={index}
                onClick={() => handleOpen(method.name)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 2,
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "rgba(253, 252, 255, 0.05)",
                  },
                  transition: "all 0.3s ease",
                  minWidth: 120,
                }}
              >
                <Box sx={{ width: 80, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {method.icon}
                </Box>
                <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: "bold", color: "#333" }}>
                  {method.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} dir="rtl">
        <DialogTitle>
          تفاصيل الدفع - {selectedMethod}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: -2, top: -5 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{renderDialogContent()}</DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentMethods;
