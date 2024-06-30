import { Route } from "react-router-dom";
import HomePage from "../../components/pages/HomePage/HomePage";
import ContactPage from "../../components/pages/ContactPage/ContactPage";
import AboutPage from "../../components/pages/AboutPage/AboutPage";
import LoginPage from "../../components/pages/LoginPage/LoginPage";
import RegisterPage from "../../components/pages/RegisterPage/RegisterPage";

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
