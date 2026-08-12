import Image from "next/image";
import lightSvg from "../assets/images/brightness.svg";
import moon from "../assets/images/moon-stars.svg";
import { useTheme } from "@/components/ThemeLayout";

const ModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`dark-mode-btn ${isDarkMode ? "active" : ""}`}
      onClick={() => toggleTheme(!isDarkMode)}
    >
      {isDarkMode ? (
        <Image src={moon} alt="dark" className="moon" priority />
      ) : (
        <Image src={lightSvg} alt="light" className="moon" priority />
      )}
    </div>
  );
};

export default ModeSwitch;
