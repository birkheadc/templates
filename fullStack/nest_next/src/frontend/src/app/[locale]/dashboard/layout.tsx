import React from "react";
import DashboardNav from "./nav/DashboardNav";
import DashboardBody from "./body/DashboardBody";
import RedirectWrapper from "../../../components/redirectWrapper/RedirectWrapper";
import { SessionStatus } from "../../../types/session/session";
import Section from "../sections/Section";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <RedirectWrapper mode='includes' statuses={[ SessionStatus.LOGGED_IN ]} redirect="/login">
      <DashboardNav />
      { children }
    </RedirectWrapper>
  )
} 