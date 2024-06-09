import React from "react";
import { NavLink } from "react-router-dom";

interface LowerFooterItem {
  id: number;
  text: string;
  link: string;
};

interface LowerFooterProps {
  items: LowerFooterItem[];
};

export const LowerFooter: React.FC<LowerFooterProps> = ({ items }) => {
  return (
    <div>
      <ul className="flex justify-between pt-7 pb-8">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
