import React from "react";
import { NavLink } from "react-router-dom";

interface AppListItem {
  id: number;
  img: string;
  link: string;
};

interface AppListProps {
  title: string;
  items: AppListItem[];
};

export const AppList: React.FC<AppListProps> = ({ title, items, }) => {
  return (
    <div>
      <h1 className="text-base font-bold pb-3">{title}</h1>
      <ul className="flex">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.img}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
