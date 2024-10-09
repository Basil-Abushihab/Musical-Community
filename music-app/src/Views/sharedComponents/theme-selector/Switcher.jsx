import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";
import { context } from "../Context-provider/context-provider";
import { useContext } from "react";
export default function Switcher() {
  const [colorTheme, setTheme] = useContext(context).theme;
  const [darkSide, setDarkSide] = useContext(context).darkSide;

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </>
  );
}
