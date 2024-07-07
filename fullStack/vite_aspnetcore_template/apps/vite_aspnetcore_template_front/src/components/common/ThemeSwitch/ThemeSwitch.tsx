import { Switch } from "@/components/ui/switch";
import useTheme from "@/hooks/useTheme/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeSwitch(): JSX.Element | null {
  const { theme, changeTheme } = useTheme();

  const handleCheckedChange = (checked: boolean) => {
    changeTheme(checked ? "dark" : "light");
  };

  return (
    <div>
      <Switch checked={theme === "dark"} onCheckedChange={handleCheckedChange}>
        {theme === "dark" ? (
          <MoonIcon className="p-0.5" size="100%" />
        ) : (
          <SunIcon className="p-0.5" size="100%" />
        )}
      </Switch>
    </div>
  );
}

export default ThemeSwitch;
