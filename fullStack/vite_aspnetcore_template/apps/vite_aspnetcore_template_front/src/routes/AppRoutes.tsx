import { Routes } from "react-router-dom";
import CommonRoutes from "./CommonRoutes/CommonRoutes";
import FallbackRoute from "./FallbackRoute/FallbackRoute";

function AppRoutes(): JSX.Element | null {
  return (
    <Routes>
      {CommonRoutes}
      {FallbackRoute}
    </Routes>
  );
}

export default AppRoutes;
