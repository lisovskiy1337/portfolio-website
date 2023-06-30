import React, { Dispatch, SetStateAction } from "react";

interface ILi {
  id: number;
  title: string;
  setTabIndex: Dispatch<SetStateAction<number>>;
}

const MenuLi: React.FC<ILi> = ({ id, title, setTabIndex }) => {
  return (
    <li
      onMouseEnter={() => setTabIndex(id)}
      onMouseLeave={() => setTabIndex(0)}
    >
      <a
        href={`#${title.toLowerCase()}`}
        className="p-2 text-xl mobmenu:text-lg"
      >
        {title}
      </a>
    </li>
  );
};

export default MenuLi;
