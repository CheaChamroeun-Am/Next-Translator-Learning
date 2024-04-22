"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  const username = "Am Cheachamroeun";

  return <h3>{t("subheader", {username})}</h3>;
}
