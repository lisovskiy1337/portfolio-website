import React, {
  useRef,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  memo,
} from "react";
import { ScrollContext } from "../../context/ScrollObserver";
import useSlider from "../../hooks/useSlider";
import useClickOutside from "../../hooks/useOnClickOutside";
import { MenuData } from "../../data";
import MenuLi from "./MenuLi";

interface IProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  heroHeight: number;
}

const Menu: React.FC<IProps> = ({ menuOpen, setMenuOpen, heroHeight }) => {
  const { scrollY } = useContext(ScrollContext);
  const ulRef = useRef<HTMLUListElement>(null);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const sliderInfo = useSlider({
    ref: ulRef,
    tabIndex,
  });

  useClickOutside(ulRef, () => setMenuOpen(false));
  return (
    <nav
      className={`${menuOpen ? "translate-x-0" : "translate-x-[200%]"}
      ${
        scrollY + 200 > heroHeight
          ? "bg-[color:var(--bkg-color)]"
          : "backdrop-blur-md"
      }
      mobmenu:bg-transparent mobmenu:backdrop-blur-0 transition-all duration-300 mobmenu:block mobmenu:translate-x-0`}
    >
      <ul className={`flex gap-10 `} ref={ulRef}>
        {MenuData.map((li) => (
          <MenuLi key={li.id} {...li} setTabIndex={setTabIndex} setMenuOpen={setMenuOpen}/>
        ))}
      </ul>
      <div
        className="absolute mt-2 h-1 bg-[color:var(--text-color)] rounded-lg transition-all duration-700 hidden mobmenu:flex"
        style={{
          transform: `translateX(${sliderInfo.left}px)`,
          width: `${sliderInfo.width}px`,
        }}
      ></div>
    </nav>
  );
};

export default memo(Menu);
