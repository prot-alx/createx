import React from "react";
import { shop, help, contacts, social, applinks, lowerfooter } from './menu-list/model/model';
import { MenuList } from "./menu-list/menu-items/menuList";
import { ContactsList } from "./menu-list/menu-items/contactList";
import { SocialList } from "./menu-list/menu-items/socialList";
import { AppList } from "./menu-list/menu-items/appList";
import { LowerFooter } from "./menu-list/menu-items/lowerFooter";

export const Footer: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col justify-between">
      <div className="container mx-auto pt-[60px] pb-[39.5px] flex justify-between">
        <div><MenuList title={help.title} items={help.items} /></div>
        <div><MenuList title={shop.title} items={shop.items} /></div>
        <div>
          <div><ContactsList title={contacts.title} items={contacts.items} /></div>
          <div><SocialList items={social.items} /></div>
        </div>
        <div><AppList title={applinks.title} items={applinks.items} /></div>
      </div>
      <div className="border-t-[1px] border-gray-600">
      <div className="container mx-auto ">
        <LowerFooter items={lowerfooter.items}/>
      </div>
      </div>
    </div>
  );
};
