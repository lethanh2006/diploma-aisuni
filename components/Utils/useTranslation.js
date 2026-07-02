import { useRouter } from "next/router";
import _ from "lodash";
import localesData from "../../locales/index";

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || "vi-VN";

  const t = (key, defaultValue = "") => {
    const dict = localesData[locale];
    if (!dict) return defaultValue || key;

    const value = _.get(dict, key);
    if (value === undefined) {
      return defaultValue || key;
    }
    return value;
  };

  const changeLocale = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return { t, locale, changeLocale };
}
