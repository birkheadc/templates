import useKeyedTranslation from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import PrimaryNavLink from "../PrimaryNavLink/PrimaryNavLink";
import { CircleUserIcon, LogInIcon } from "lucide-react";

function SessionLinks(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.nav.PrimaryNav.SessionLinks");

  return (
    <>
      <PrimaryNavLink to={"/login"}>
        <LogInIcon size={"1rem"} />
        {t("login")}
      </PrimaryNavLink>
      <PrimaryNavLink to={"/register"}>
        <CircleUserIcon size={"1rem"} />
        {t("register")}
      </PrimaryNavLink>
    </>
  );
}

export default SessionLinks;
