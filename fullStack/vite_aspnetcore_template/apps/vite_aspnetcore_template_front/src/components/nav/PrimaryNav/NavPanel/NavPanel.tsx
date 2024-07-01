import * as React from "react";
import mergeClass from "../../../../utils/mergeClass";
import { MenuIcon, XIcon } from "lucide-react";
import FocusTrap from "focus-trap-react";

type NavPanelProps = {
  children?: React.ReactNode;
  side: "left" | "right";
  show: boolean;
  toggleShow: () => void;
  title?: string;
};

function NavPanel({
  children,
  side,
  show,
  toggleShow,
  title,
}: NavPanelProps): JSX.Element | null {
  React.useEffect(
    function manageEventListeners() {
      const escapeKeyListener = (event: KeyboardEvent) => {
        console.log("escapeKeyListener");
        if (event.key === "escape") {
          toggleShow();
        }
      };

      const clickOutsideListener = (event: PointerEvent) => {
        console.log("click!");
        console.log(event);
      };

      if (show) {
        window.addEventListener("keypress", escapeKeyListener);
        window.addEventListener("pointerdown", clickOutsideListener);
      }

      return () => {
        window.removeEventListener("keypress", escapeKeyListener);
        window.removeEventListener("pointerdown", clickOutsideListener);
      };
    },
    [show, toggleShow],
  );

  return (
    <FocusTrap active={show}>
      <div>
        <button
          aria-expanded={show}
          aria-controls={`${title}-menu`}
          aria-label={`open ${title} menu`}
          className="lg:hidden hocus:text-secondary-700 text-primary-700"
          onClick={toggleShow}
        >
          {show ? <XIcon aria-hidden /> : <MenuIcon aria-hidden />}
        </button>
        <div
          id={`${title}-menu`}
          className={mergeClass(
            "px-16 py-4 lg:p-4 flex flex-col lg:flex-row fixed lg:border-0 h-svh-nav lg:h-fit border-primary-700 transition-transform bottom-0 bg-primary-200 lg:bg-primary-300 lg:relative gap-4",
            {
              "-translate-x-full lg:translate-x-0": !show && side === "left",
            },
            {
              "translate-x-full lg:translate-x-0": !show && side === "right",
            },
            { "left-0": side === "left" },
            { "right-0": side === "right" },
            { "hidden lg:flex": !show },
          )}
        >
          <h2 className="text-center lg:hidden" tabIndex={-1}>
            {title}
          </h2>
          {children}
        </div>
      </div>
    </FocusTrap>
  );
}

export default NavPanel;
