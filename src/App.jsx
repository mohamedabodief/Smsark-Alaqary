import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DetailsForClient from "./pages/Details/detailsForClient";
import DetailsForFinincingAds from "./pages/Details/detailsForFinaccingAds";
import SearchPage from "./pages/SearchPage";
import AddMultipleAdsOnce from "./pages/addads";
import AddAdvertisement from "./pages/addClientAds";
import DetailsForDevelopment from "./pages/Details/detailsForDevelopment";
import Layout from "./Layout/Layout";
import Home from "./componenents/Home";
import Footer from "./componenents/Footer";
import Sell from "./services/sell";
import Rent from "./services/Rent";
import Buy from "./services/Buy";
import Finance from "./services/Finance";
import Favorite from "./componenents/Favorite";
import FinancingAdvExample from "./Homeparts/FinancingAdvExample";
import RealEstateDevAdvExample from "./Homeparts/RealEstateDevAdvExample";
import AddFinancingAdForm from "./services/AddFinancingAdForm";
import FinancingRequestForm from "./services/FinancingRequestForm";
import { onMessage } from "./FireBase/firebaseConfig";
import { messaging } from "./FireBase/firebaseConfig";
import { requestPermissionAndSaveToken } from "./FireBase/MessageAndNotification/fcmHelper";
import LoginRegister from "./LoginAndRegister/modulesLR/LoginRegister";
import AdminDashboard from "./Dashboard/adminDashboard";
import ClientDashboard from "./Dashboard/clientDashboard";
import OrganizationDashboard from "./Dashboard/organization/organizationDashboard";
import PrivateRoute from "./PrivateRoute";
import AuthSync from "./AuthSync";

function App() {
  useEffect(() => {
    // ✅ طلب الإذن وحفظ التوكن
    requestPermissionAndSaveToken();

    // ✅ استقبال إشعار في foreground
    onMessage(messaging, (payload) => {
      console.log("📩 إشعار مستلم:", payload);

      const { title, body } = payload.notification || {};
      if (title && body && "Notification" in window) {
        new Notification(title, { body });
      }
    });
  }, []);

  return (
    <>
      <AuthSync />
      {/* https://nominatim.openstreetmap.org/ui/search.html */}
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Navigate to="login" replace />} />
          {/* <Route path="/auth"> */}
          <Route path="login" element={<LoginRegister />} />
          <Route path="register" element={<LoginRegister />} />

          {/* <Route path="/services/sell" element={<Sell />} /> */}
          {/* <Route path="/services/rent" element={<Rent />} /> */}
          {/* <Route path="/services/buy" element={<Buy />} /> */}
          {/* <Route path="/services/finance" element={<Finance />} /> */}
          {/* <Route path="/favorite" element={<Favorite />} /> */}
          {/* <Route
            path="/insert-finance-data"
            element={<FinancingAdvExample />}
          />
          <Route
            path="/insert-dev-data"
            element={<RealEstateDevAdvExample />}
          />
          <Route path="/add-financing-ad" element={<AddFinancingAdForm />} />
          <Route
            path="/services/finance/financing-request"
            element={<FinancingRequestForm />}
          />

          <Route path="details">
            <Route
              path="financingAds/:id"
              element={<DetailsForFinincingAds />}
            />
            <Route path="clientAds/:id" element={<DetailsForClient />} />
            <Route
              path="developmentAds/:id"
              element={<DetailsForDevelopment />}
            />
          </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="AddAdvertisement" element={<AddAdvertisement />}></Route> */}

          {/* Protected Routes - Only accessible if logged in */}
          <Route element={<PrivateRoute />}>
            {/* Admin Dashboard */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            {/* Client Dashboard */}
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            {/* Organization Dashboard */}
            <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
          </Route>
        </Routes>
      </Layout>
      {/* <Footer /> */}
      {/* <AddMultipleAdsOnce/> */}
    </>
  );
}

export default App;
