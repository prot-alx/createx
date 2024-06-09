import React from "react";
import { NavLink } from "react-router-dom";

interface MenuListItem {
  id: number;
  text: string;
  link: string;
};

interface MenuListProps {
  title: string;
  items: MenuListItem[];
};

export const MenuList: React.FC<MenuListProps> = ({ title, items, }) => {
  return (
    <div>
      <h1 className="text-base font-bold pb-3">{title}</h1>
      <ul>
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
