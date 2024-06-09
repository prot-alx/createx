import React from "react";
import { NavLink } from "react-router-dom";

interface ContactsListItem {
  id: number;
  contact: string;
  text: string;
  link: string;
};

interface ContactsListItemProps {
  title: string;
  items: ContactsListItem[];
};

export const ContactsList: React.FC<ContactsListItemProps> = ({ title, items, }) => {
  return (
    <div>
      <h1 className="text-base font-bold pb-3">{title}</h1>
      <ul>
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.contact} {item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
