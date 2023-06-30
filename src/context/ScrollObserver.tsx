import React, { ReactNode, useCallback, useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

interface IProps {
  children: ReactNode;
}

interface ScrollContextProps {
  scrollY: number;
}

export const ScrollContext = createContext<ScrollContextProps>({
  scrollY: 0,
});

const ScrollObserver = ({ children }: IProps) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
