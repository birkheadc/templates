import AboutPage from "@/components/pages/AboutPage/AboutPage";
import ContactPage from "@/components/pages/ContactPage/ContactPage";
import HomePage from "@/components/pages/HomePage/HomePage";
import LoginPage from "@/components/pages/LoginPage/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage/RegisterPage";
import { Route } from "react-router-dom";

const CommonRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </>
);

export default CommonRoutes;
