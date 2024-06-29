import { Navigate, Route } from "react-router-dom";

const FallbackRoute = (
  <Route path="*" element={<Navigate replace={true} to="/" />} />
);

export default FallbackRoute;
