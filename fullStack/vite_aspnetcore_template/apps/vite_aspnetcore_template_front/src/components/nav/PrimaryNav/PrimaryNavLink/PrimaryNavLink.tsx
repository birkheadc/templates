import React from "react";
import { NavLink } from "react-router-dom";
import mergeClass from "../../../../utils/mergeClass";

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
        mergeClass(
          "hocus:text-secondary-700 hocus:underline text-primary-700 flex gap-2 items-center",
          {
            "text-secondary-50 pointer-events-none": isActive,
            "background-primary-100": isPending,
          },
        )
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default PrimaryNavLink;
