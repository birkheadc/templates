// import * as React from 'react';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import PrimaryNav from "../components/nav/PrimaryNav/PrimaryNav";
import PageContainer from "../components/common/PageContainer/PageContainer";

function App() {
  return (
    <BrowserRouter>
      <PrimaryNav />
      <PageContainer>
        <AppRoutes />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;
