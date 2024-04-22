import Link from "next/link";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["about-us", "common"];

const AboutUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <main className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="font-bold">{t("common:about_us")}</h1>
        <p className="font-bold">{t("our_address")}</p>
        <p
          className="
        mt-5"
        >
          123 Example Street
        </p>
        <p>City, State, 12345</p>
        <Link href="/">{t("back")}</Link>
      </main>
    </TranslationsProvider>
  );
};

export default AboutUs;
