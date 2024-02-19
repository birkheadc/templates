import { createSharedPathnamesNavigation } from "next-intl/navigation";
import _locales from '../intl/locales.json';

export const locales = _locales;
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales, localePrefix });