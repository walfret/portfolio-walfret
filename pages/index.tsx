import Navbar from "@/components/Navbar";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
    console.log(`Changed language to: ${lang}`);
  };

  return (
    <div>
      <Navbar />
      <h1>{t("welcome")}</h1>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("es")}>Español</button>
    </div>
  );
}
