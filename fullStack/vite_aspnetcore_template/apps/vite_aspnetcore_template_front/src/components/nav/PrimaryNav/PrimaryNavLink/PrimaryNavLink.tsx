import { cn } from "@/utils";
import React from "react";
import { NavLink } from "react-router-dom";

type PrimaryNavLinkProps = {
  to: string;
  children?: React.ReactNode;
};

function PrimaryNavLink({
  to,
  children,
}: PrimaryNavLinkProps): JSX.Element | null {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        cn(
          "hocus:text-secondary-600 hocus:dark:text-secondary-300 border-b-2 border-transparent-full hocus:border-secondary-600 dark:hocus:border-secondary-300 text-primary-900 flex gap-2 items-center dark:text-primary-50",
          {
            "font-bold text-primary-700 dark:text-primary-300 border-primary-700 dark:border-primary-300 pointer-events-none":
              isActive,
            "background-primary-100": isPending,
          }
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default PrimaryNavLink;
