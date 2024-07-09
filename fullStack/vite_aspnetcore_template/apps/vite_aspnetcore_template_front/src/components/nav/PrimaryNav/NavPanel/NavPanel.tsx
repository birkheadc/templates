import * as React from "react";
import { MenuIcon, XIcon } from "lucide-react";
import FocusTrap from "focus-trap-react";
import { cn } from "@/utils";

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
        if (event.key === "Escape") {
          toggleShow();
        }
      };

      const clickOutsideListener = (event: PointerEvent) => {
        const elements = document.elementsFromPoint(
          event.clientX,
          event.clientY
        );
        if (
          !elements.some((element) => element.id === `${title}-menu`) &&
          !elements.some(
            (element) => element.ariaLabel === `toggle ${title} menu`
          )
        ) {
          toggleShow();
        }
      };

      if (show) {
        window.addEventListener("keydown", escapeKeyListener);
        window.addEventListener("pointerdown", clickOutsideListener);
      }

      return () => {
        window.removeEventListener("keydown", escapeKeyListener);
        window.removeEventListener("pointerdown", clickOutsideListener);
      };
    },
    [show, title, toggleShow]
  );

  return (
    <FocusTrap
      active={show}
      focusTrapOptions={{ clickOutsideDeactivates: true }}
    >
      <div role="navigation">
        <button
          aria-expanded={show}
          aria-controls={`${title}-menu`}
          aria-label={`toggle ${title} menu`}
          className="lg:hidden hocus:text-secondary-200 text-neutral-50"
          onClick={toggleShow}
        >
          {show ? <XIcon aria-hidden /> : <MenuIcon aria-hidden />}
        </button>
        <div
          id={`${title}-menu`}
          className={cn(
            "px-16 py-4 lg:py-0 flex lg:flex flex-col lg:flex-row fixed lg:border-0 h-svh-nav lg:h-fit border-primary-700 bottom-0 bg-primary-800 lg:bg-transparent-full lg:relative gap-4 lg:translate-x-0",
            side === "left"
              ? { "-translate-x-full": !show }
              : { "translate-x-full": !show },
            side === "left" ? "left-0" : "right-0",
            { hidden: !show }
          )}
        >
          <h2
            className="text-lg font-bold text-center lg:hidden text-neutral-50"
            tabIndex={-1}
          >
            {title}
          </h2>
          {children}
        </div>
      </div>
    </FocusTrap>
  );
}

export default NavPanel;
