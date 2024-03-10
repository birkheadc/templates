import React from "react";
import DashboardNav from "./nav/DashboardNav";
import DashboardBody from "./body/DashboardBody";
import RedirectWrapper from "../../../components/redirectWrapper/RedirectWrapper";
import { SessionStatus } from "../../../types/session/session";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RedirectWrapper mode='includes' statuses={[ SessionStatus.LOGGED_IN ]}>
      <div className="flex flex-row">
        <DashboardNav />
        <DashboardBody>
          { children }
        </DashboardBody>
      </div>
    </RedirectWrapper>
  )
} 