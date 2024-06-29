// import * as React from 'react';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import PrimaryNav from "../components/nav/PrimaryNav/PrimaryNav";

function App() {
  return (
    <BrowserRouter>
      <PrimaryNav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
