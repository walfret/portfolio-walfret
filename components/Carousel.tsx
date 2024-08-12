import { useState, useEffect, FC } from "react";

interface ComponentProps {
  fragments: any;
  speed?: number;
}

const Carousel: FC<ComponentProps> = ({ fragments, speed = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % fragments.length);
    }, speed);

    return () => clearInterval(interval);
  }, [fragments.length, speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex items-center transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {fragments.map((fragment: any, index: number) => (
          <div key={index} className="flex-shrink-0 w-full">
            {fragment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
