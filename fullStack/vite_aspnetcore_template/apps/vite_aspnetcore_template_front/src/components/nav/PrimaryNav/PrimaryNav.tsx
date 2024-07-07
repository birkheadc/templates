import * as React from "react";

import { useLocation } from "react-router-dom";
import ThemeSwitch from "@/components/common/ThemeSwitch/ThemeSwitch";
import useKeyedTranslation from "@/hooks/useKeyedTranslation/useKeyedTranslation";
import CoreLinks from "@/components/nav/PrimaryNav/CoreLinks/CoreLinks";
import NavPanel from "@/components/nav/PrimaryNav/NavPanel/NavPanel";
import SessionLinks from "@/components/nav/PrimaryNav/SessionLinks/SessionLinks";

function PrimaryNav(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.nav.PrimaryNav");

  const [showLeftPanel, setShowLeftPanel] = React.useState<boolean>(false);
  const [showRightPanel, setShowRightPanel] = React.useState<boolean>(false);

  const location = useLocation();

  React.useEffect(
    function closePanelsAndBlurOnNavigate() {
      setShowLeftPanel(false);
      setShowRightPanel(false);

      (document.activeElement as HTMLElement).blur();
    },
    [location]
  );

  const toggleShowLeft = () => {
    setShowRightPanel(false);
    setShowLeftPanel((s) => !s);
  };

  const toggleShowRight = () => {
    setShowLeftPanel(false);
    setShowRightPanel((s) => !s);
  };

  return (
    <nav className="sticky top-0 w-full border-b-2 h-nav bg-primary-300 border-primary-600 dark:bg-primary-900 dark:border-primary-900">
      <div className="sticky flex flex-row items-center justify-between h-full px-4 m-auto max-w-7xl">
        <NavPanel
          side="left"
          show={showLeftPanel}
          toggleShow={toggleShowLeft}
          title={t("leftPanelTitle")}
        >
          <CoreLinks />
        </NavPanel>
        <NavPanel
          side="right"
          show={showRightPanel}
          toggleShow={toggleShowRight}
          title={t("rightPanelTitle")}
        >
          <SessionLinks />
          <ThemeSwitch />
        </NavPanel>
      </div>
    </nav>
  );
}

export default PrimaryNav;
