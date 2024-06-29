import { Route } from "react-router-dom";
import HomePage from "../../components/pages/HomePage/HomePage";
import ContactPage from "../../components/pages/ContactPage/ContactPage";
import AboutPage from "../../components/pages/AboutPage/AboutPage";

const CommonRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </>
);

export default CommonRoutes;
