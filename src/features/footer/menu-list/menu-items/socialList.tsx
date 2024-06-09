import React from "react";
import { NavLink } from "react-router-dom";

interface SocialListItem {
  id: number;
  img: string;
  link: string;
};

interface SocialListProps {
  items: SocialListItem[];
};

export const SocialList: React.FC<SocialListProps> = ({ items }) => {
  return (
    <div>
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
