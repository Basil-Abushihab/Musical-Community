import React from "react";
import { useState } from "react";
import useDarkSide from "../theme-selector/useDarkSide";
export const context = React.createContext();

export const AppProvider = ({ children }) => {
  
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  return (
    <context.Provider value={{ theme: [colorTheme, setTheme] ,darkSide:[darkSide,setDarkSide]}}>
      {children}
    </context.Provider>
  );
};
