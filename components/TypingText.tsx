import { useState, useEffect, FC } from "react";
import { Box } from "@chakra-ui/react";

interface ComponentProps {
  text: string;
  speed?: number;
  textCss?: string;
}

const TypingText: FC<ComponentProps> = ({ text, speed = 100, textCss }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Box
      as="p"
      fontSize="xl"
      fontFamily="monospace"
      whiteSpace="wrap"
      overflow="hidden"
      width="fit-content"
      animation="blink 0.7s step-end infinite"
      _after={{
        content: '"|"',
        animation: "blink 1s step-end infinite",
      }}
      css={{
        "@keyframes blink": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "gray.700" },
        },
      }}
      className={`${textCss}`}
    >
      {displayedText}
    </Box>
  );
};

export default TypingText;
