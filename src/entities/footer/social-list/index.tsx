import { FC } from "react";
import { NavLink } from "react-router-dom";

interface SocialListItem {
  id: number;
  img: string;
  link: string;
}

interface SocialListProps {
  items: SocialListItem[];
}

export const SocialList: FC<SocialListProps> = ({ items }) => {
  return (
    <div>
      <ul className="flex gap-3 pt-6">
        {items.map((item) => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>
              <img decoding="async" src={item.img} alt={item.link} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
