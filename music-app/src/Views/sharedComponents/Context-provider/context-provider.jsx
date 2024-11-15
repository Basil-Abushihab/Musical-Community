import React from "react";
import { useState } from "react";
import useDarkSide from "../theme-selector/useDarkSide";
export const context = React.createContext();

export const AppProvider = ({ children }) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  return (
    <context.Provider
      value={{
        theme: [colorTheme, setTheme],
        darkSide: [darkSide, setDarkSide],
        activeStep: [activeStep, setActiveStep],
        isLastStep: [isLastStep, setIsLastStep],
        isFirstStep: [isFirstStep, setIsFirstStep],
      }}
    >
      {children}
    </context.Provider>
  );
};
