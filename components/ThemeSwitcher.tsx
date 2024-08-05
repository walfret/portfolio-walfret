import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { IconButton } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { HiSun } from "react-icons/hi";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      colorScheme={theme == "light" ? "teal" : "yellow"}
      variant="ghost"
      icon={
        theme == "light" ? (
          <IoMoon size={30} className="w-full text-theme-dark" />
        ) : (
          <HiSun size={30} className="w-full" />
        )
      }
      onClick={toggleTheme}
      aria-label={theme == "light" ? "Theme light" : "Theme dark"}
    />
  );
}

export default ThemeSwitcher;
