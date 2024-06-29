import { useTranslation } from "react-i18next";
import PrimaryNavLink from "../PrimaryNavLink/PrimaryNavLink";

function CoreLinks(): JSX.Element | null {
  const { t } = useTranslation("components.nav.PrimaryNav.CoreLinks");

  return (
    <>
      <PrimaryNavLink to={"/"}>{t("home")}</PrimaryNavLink>
      <PrimaryNavLink to={"/about"}>{t("about")}</PrimaryNavLink>
      <PrimaryNavLink to={"/contact"}>{t("contact")}</PrimaryNavLink>
    </>
  );
}

export default CoreLinks;
