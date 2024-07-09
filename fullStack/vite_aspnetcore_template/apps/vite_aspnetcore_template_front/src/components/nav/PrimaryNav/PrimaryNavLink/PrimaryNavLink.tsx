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
          "hocus:text-secondary-100 border-b-2 border-transparent-full hocus:border-secondary-300 text-primary-50 flex gap-2 items-center",
          {
            "font-bold border-primary-50 pointer-events-none": isActive,
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
