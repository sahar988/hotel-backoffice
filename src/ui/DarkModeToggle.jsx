import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? "light" : "dark"}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
