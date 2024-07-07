import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext";

type ContextProvidersProps = {
  children?: React.ReactNode;
};

export function ContextProviders({
  children,
}: ContextProvidersProps): JSX.Element | null {
  return <ThemeProvider>{children}</ThemeProvider>;
}
