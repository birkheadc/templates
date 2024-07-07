import * as React from "react";

export default function useTheme(): {
  theme: string;
  changeTheme: (theme: string) => void;
} {
  const [theme, setTheme] = React.useState<string>(VALID_THEMES[0]);

  React.useEffect(function retrieveLocalSettings() {
    let theme = localStorage.getItem(THEME_KEY);
    if (theme == null || VALID_THEMES.includes(theme) === false) {
      theme = VALID_THEMES[0];
    }
    changeTheme(theme);
  }, []);

  const changeTheme = (theme: string) => {
    if (VALID_THEMES.includes(theme) === false) return;

    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    window.dispatchEvent(new Event("onchangetheme"));
    localStorage.setItem(THEME_KEY, theme);
    setTheme(theme);
  };

  return { theme, changeTheme };
}

const THEME_KEY = "vite-aspnetcore-template-theme";

const VALID_THEMES = ["dark", "light"];
