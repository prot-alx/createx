import { FC } from "react";
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
  
  export const AppList: FC<AppListProps> = ({ title, items, }) => {
    return (
      <div>
        <h1 className="text-base font-bold pb-6">{title}</h1>
        <ul className="flex gap-5">
          {items.map(item => (
            <li className="text-gray-500" key={item.id}>
              <NavLink to={item.link}><img decoding="async" src={item.img} alt={item.link} /></NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };