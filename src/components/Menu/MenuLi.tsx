import React, { Dispatch, SetStateAction } from "react";

interface ILi {
  id: number;
  title: string;
  setTabIndex: Dispatch<SetStateAction<number>>;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MenuLi: React.FC<ILi> = ({ id, title, setTabIndex, setMenuOpen }) => {
  return (
    <li
      onMouseEnter={() => setTabIndex(id)}
      onMouseLeave={() => setTabIndex(0)}
    >
      <a
        href={`#${title.toLowerCase()}`}
        className="p-2 text-xl mobmenu:text-lg"
        onClick={() => setMenuOpen(false)}
      >
        {title}
      </a>
    </li>
  );
};

export default MenuLi;
