import * as React from "react";

import { I18nextProvider } from "react-i18next";
import i18n from "../src/localization/i18n";

const withI18next = (Story: any) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};

export default withI18next;
