import { FC } from "react";
import { NavLink } from "react-router-dom";

interface ListItem {
  id: number;
  text: string;
  link: string;
}

interface ListItemProps {
  items: ListItem[];
}

export const TopHeaderMenu: FC<ListItemProps> = ({ items }) => {
  return (
    <div className="my-auto">
      <ul className="flex justify-between gap-3">
        {items.map((item) => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
