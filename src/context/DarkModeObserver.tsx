import React, { createContext, useEffect, useMemo } from "react";
import { useDarkMode } from "usehooks-ts";

interface IProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggle: () => {},
  enable: () => {},
  disable: () => {},
});

const DarkModeObserver: React.FC<IProps> = ({ children }) => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();
  const value = useMemo(
    () => ({ isDarkMode, toggle, enable, disable }),
    [isDarkMode]
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeObserver;
