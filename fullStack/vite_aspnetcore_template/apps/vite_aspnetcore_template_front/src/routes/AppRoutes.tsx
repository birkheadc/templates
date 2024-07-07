import CommonRoutes from "@/routes/CommonRoutes/CommonRoutes";
import FallbackRoute from "@/routes/FallbackRoute/FallbackRoute";
import { Routes } from "react-router-dom";

function AppRoutes(): JSX.Element | null {
  return (
    <Routes>
      {CommonRoutes}
      {FallbackRoute}
    </Routes>
  );
}

export default AppRoutes;
