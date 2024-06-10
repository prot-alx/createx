import React from "react";
import { NavLink } from "react-router-dom";
import heart from '@/shared/img/Heart_outline.svg';

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
      <h1 className="text-base font-bold pb-6">{title}</h1>
      <ul className="flex gap-5">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}><img src={item.img} alt={item.link} /></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

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

export const LowerFooter: React.FC = () => {
  return (
    <div className="flex justify-between pb-8 pt-7 text-gray-500">
      <div className="flex">
        <span>© All rights reserved. Made with by </span>
        <div className="px-1"><img src={heart} alt="" /></div>
        <span> Createx Studio</span>
      </div>
      <div>Go to top</div>
    </div>
  );
};

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
      <ul className="flex gap-3 pt-6">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}><img src={item.img} alt={item.link} /></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
