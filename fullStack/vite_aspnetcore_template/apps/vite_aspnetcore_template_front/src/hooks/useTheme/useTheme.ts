import { ThemeProviderContext } from "@/contexts/ThemeContext/ThemeContext";
import * as React from "react";

export default function useTheme() {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}
