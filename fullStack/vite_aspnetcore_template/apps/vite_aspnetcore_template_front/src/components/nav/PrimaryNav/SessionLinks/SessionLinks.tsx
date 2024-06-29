import { useTranslation } from "react-i18next";
import PrimaryNavLink from "../PrimaryNavLink/PrimaryNavLink";

function SessionLinks(): JSX.Element | null {
  const { t } = useTranslation("components.nav.PrimaryNav.SessionLinks");

  return (
    <>
      <PrimaryNavLink to={"/login"}>{t("login")}</PrimaryNavLink>
      <PrimaryNavLink to={"/register"}>{t("register")}</PrimaryNavLink>
    </>
  );
}

export default SessionLinks;
