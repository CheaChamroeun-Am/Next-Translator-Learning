import ExampleClinetComponent from "@/components/ExampleClinetComponent";
import Image from "next/image";
import Link from "next/link";

import initTranslations from "../i18n";
import { Translation } from "react-i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import LanguageChanger from "@/components/LanguageChanger";

interface HomeProps {
  readonly params: {
    readonly locale: string;
  };
}

const i18nNamespeaces = ["home", "common"];

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespeaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespeaces}
      resources={resources}
    >
      <main className="h-[100vh] flex flex-col justify-center items-center">
        <h1>{t("header")}</h1>
        <ExampleClinetComponent />
        <Link href="/about-us">{t("common:about_us")}</Link>
        <LanguageChanger />
      </main>
    </TranslationsProvider>
  );
}
