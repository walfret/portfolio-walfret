import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box } from "@chakra-ui/react";

import Navbar from "@/components/Navbar";
import Ticker from "@/components/Ticker";
import HomeSection from "@/sections/Home/Home";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "menu"])),
    },
  };
}

export default function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Navbar translate={t} changeLanguage={changeLanguage} />
      <div className="px-14 w-full h-auto">
        <HomeSection translate={t} />

        <Box className="p-6">
          <Ticker text="Este es un texto que se desplaza continuamente en el ticker." />
        </Box>
      </div>
    </div>
  );
}
