import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Box, ScaleFade, Slide } from "@chakra-ui/react";
import { TiHtml5 } from "react-icons/ti";
import {
  SiCss3,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import TypingText from "@/components/TypingText";
import Carousel from "@/components/Carousel";
import useScroll from "@/hooks/useScroll";

interface HomeSectionProps {
  translate: any;
}

const tecnologiesIcons = [
  <div key="1">
    <TiHtml5 size={55} className="text-[#dc4a25]" />
  </div>,
  <div key="2">
    <SiCss3 size={40} className="text-[#146eb0]" />
  </div>,
  <div key="3">
    <SiJavascript size={40} className="text-[#efd81b]"/>
  </div>,
  <div key="4">
    <SiTypescript size={40} className="text-[#1772cb]" />
  </div>,
  <div key="5">
    <TbBrandReactNative size={40} className="text-[#5fd3f3]" />
  </div>,
  <div key="6">
    <SiNextdotjs size={40} />
  </div>,
  <div key="7">
    <SiNestjs size={40} className="text-[#da214c]" />
  </div>,
  <div key="8">
    <SiNodedotjs size={40} className="text-[#519942]"/>
  </div>,
];

const HomeSection: FC<HomeSectionProps> = ({ translate }) => {
  const scrollY = useScroll();
  const [handlerActivate, setHandleActivate] = useState({
    showImage: true,
    showInitialText: true,
  });

  useEffect(() => {
    if (scrollY == 0) {
      const timer = setTimeout(() => {
        setHandleActivate({
          showImage: true,
          showInitialText: true,
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [handlerActivate.showImage]);

  useEffect(() => {
    if (scrollY > 10) {
      setHandleActivate({
        showImage: false,
        showInitialText: false,
      });
    } else {
      setHandleActivate({
        showImage: true,
        showInitialText: true,
      });
    }
  }, [scrollY]);

  return (
    <div id="home">
      <div className="flex items-center flex-wrap">
        <Slide
          direction="bottom"
          in={handlerActivate.showImage}
          style={{ zIndex: 10 }}
        >
          <Image
            onClick={() =>
              setHandleActivate({
                ...handlerActivate,
                showImage: !handlerActivate.showImage,
              })
            }
            width={200}
            height={300}
            src={"/images/avatar.webp"}
            alt="Avatar"
          />
        </Slide>
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold my-4">
            {translate("welcome")}
          </h1>
          <ScaleFade initialScale={0.9} in={handlerActivate.showInitialText}>
            <p className="md:max-w-[700px] text-3xl md:text-5xl font-semibold text-colorTextSecondary dark:text-colorTextSecondary-dark md:text-justify">
              {translate("initialText")}
            </p>
          </ScaleFade>
        </div>
        <div className="w-full md:w-min flex md:block justify-center">
          <Box className="w-[80px] m-4 md:ml-16 md:mt-10">
            <Carousel fragments={tecnologiesIcons} speed={2000} />
          </Box>
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-[100px]">
        <div className="md:ml-auto md:max-w-[80%]">
          <TypingText
            text={`${translate("about.resume")}`}
            speed={30}
            textCss="text-justify"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
