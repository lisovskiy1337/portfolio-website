import React, { useEffect, useState, useContext, memo } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Menu from "../Menu/Menu";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { HiMenuAlt1 } from "react-icons/hi";
import { useMediaQuery } from "usehooks-ts";
import { ScrollContext } from "../../context/ScrollObserver";

interface IHeader {
  heroHeight: number;
}
const Header: React.FC<IHeader> = ({ heroHeight }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const matches = useMediaQuery("(max-width: 678px)");
  const scrollDirection = useScrollDirection();
  const { scrollY } = useContext(ScrollContext);
  useEffect(() => {
    if (!matches) setMenuOpen(false);
    if (matches && scrollDirection === "down") setMenuOpen(false);
  }, [matches, scrollDirection]);

  return (
    <header
      className={`py-6 px-[5%] sm:px-12 ${
        scrollY > heroHeight
          ? "bg-[color:var(--bkg-color)]"
          : "backdrop-blur-md bg-[rgba(100,100,100,0.2)]"
      }   w-full fixed left-0 z-20 ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } flex justify-between items-center shadow-[0_0_6px_0_rgba(0,0,0,0.15)] transition-all duration-700`}
    >
      <h3 className="text-2xl font-semibold">Dev.</h3>
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        heroHeight={heroHeight}
      />
      <div className="flex items-center gap-8">
        <DarkModeToggle />
        <button
          className="burger w border-[1px] rounded-[50%] border-[color:var(--text-color)] w-10 h-10 flex justify-center items-center mobmenu:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <HiMenuAlt1 size={24} />
        </button>
      </div>
    </header>
  );
};

export default memo(Header);
