import { FC } from "react";

interface ComponentProps {
  text: string;
  textCss?: string;
}

const Ticker: FC<ComponentProps> = ({ text, textCss }) => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap">
      <div className="absolute inset-0 flex">
        <div className="flex-shrink-0 animate-marquee whitespace-nowrap">
          <p className={`${textCss}`}>
            {text} &nbsp;&nbsp; {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
