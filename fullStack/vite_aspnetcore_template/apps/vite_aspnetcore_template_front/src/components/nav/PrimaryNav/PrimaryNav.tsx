import * as React from "react";

import CoreLinks from "./CoreLinks/CoreLinks";
import SessionLinks from "./SessionLinks/SessionLinks";
import NavPanel from "./NavPanel/NavPanel";
import { useLocation } from "react-router-dom";
import useKeyedTranslation from "../../../hooks/useKeyedTranslation/useKeyedTranslation";

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
    [location],
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
    <nav className="w-full border-b-2 h-nav bg-primary-300 border-primary-600">
      <div className="flex flex-row items-center justify-between h-full px-4 m-auto max-w-7xl">
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
        </NavPanel>
      </div>
    </nav>
  );
}

export default PrimaryNav;
