import { TOptions, i18n } from "i18next";
import { useTranslation } from "react-i18next";

function useKeyedTranslation(base: string): {
  t: (key: string, options?: TOptions) => string;
  i18n: i18n;
} {
  const { t: _t, i18n } = useTranslation();
  const t = (key: string, options?: TOptions) => _t(`${base}.${key}`, options);
  return { t, i18n };
}

export default useKeyedTranslation;
