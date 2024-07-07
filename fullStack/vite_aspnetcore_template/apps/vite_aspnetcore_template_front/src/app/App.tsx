// import * as React from 'react';

import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import PrimaryNav from "../components/nav/PrimaryNav/PrimaryNav";
import PageContainer from "../components/common/PageContainer/PageContainer";
import { ContextProviders } from "@/contexts/ContextProviders/ContextProviiders";

function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <PrimaryNav />
        <PageContainer>
          <AppRoutes />
        </PageContainer>
      </BrowserRouter>
    </ContextProviders>
  );
}

export default App;
