import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { userwishlist, usercart, contacts, login, register } from "@/features/header/menu-list/model";
import LeftArrow from '@/shared/ui/Left-chevron.png';
import RightArrow from '@/shared/ui/Right-chevron.png';
import divider from "@/shared/img/divider.png";
import logo from "@/shared/logo/logo.png";
import profile from "@/shared/img/Profile.svg";

interface ListItem {
  id: number;
  text: string;
  link: string;
};

interface ListItemProps {
  items: ListItem[];
};

interface SocialListItem {
  id: number;
  icon: string;
  text: string;
};

interface SocialListProps {
  items: SocialListItem[];
};


export const TopHeaderMenu: React.FC<ListItemProps> = ({ items }) => {
  return (
    <div className="my-auto">
      <ul className="flex justify-between gap-3">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TopHeaderContacts: React.FC = () => {
  return (
    <div className="my-auto text-small">
      <NavLink to={contacts.link}><div className="flex gap-2">{contacts.text}<b>{contacts.number}</b></div></NavLink>
    </div>
  );
};

export const TopHeaderLogin: React.FC = () => {
  return (
    <div className="my-auto flex justify-between gap-3">
      <NavLink className="my-auto" to="/profile"><img src={profile} alt="profile" /></NavLink>
      <NavLink to={login.link}><span>{login.text}</span></NavLink>/
      <NavLink to={register.link}><span>{register.text}</span></NavLink>
    </div>
  );
};

export const HeaderSalesMenu: React.FC<ListItemProps> = ({ items }) => {
  return (
    <div className="my-auto">
      <ul className="flex justify-between gap-3">
        {items.map(item => (
          <li className="text-gray-700 last:text-danger" key={item.id}>
            <NavLink to={item.link}><b>{item.text}</b></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const HeaderAdList: React.FC<ListItemProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-auto flex justify-center">
      <button onClick={handlePrevClick} className="bg-primary text-white p-2">
        <img src={LeftArrow} alt="LeftArrow"/>
      </button>
      <ul className="flex justify-center w-96 my-auto">
        {items.map((item, index) => (
          <li onClick={handleNextClick}
              className={`text-white ${
              index === currentIndex ? 'block' : 'hidden'
              }`} key={item.id}>
              <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
      <button onClick={handleNextClick} className="bg-primary text-white p-2">
        <img src={RightArrow} alt="RightArrow"/>
      </button>
    </div>
  );
};

export const TopHeaderCurrencySelector: React.FC<SocialListProps> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  
  const showCurrencyRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (showCurrencyRef.current && !showCurrencyRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav ref={showCurrencyRef} className={`flex absolute bg-gray-900 justify-between gap-4 my-auto ${isOpen ? "visible" : "invisible"}`}>
        <ul>
          {items.map(item => (
            <li onClick={() => setOpen(!isOpen)} className="flex gap-1 first:visible" key={item.id}>
              <img className="w-5 h-3 my-auto" decoding='async' src={item.icon} alt="flag" /> {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const Banner: React.FC = () => {
  return (
    <div className='my-auto'>
      <NavLink to="/"><img decoding='async' src={logo} alt="" className='' /></NavLink>
    </div>
  );
};

export const UserCartAndWishlist: React.FC = () => {
  return (
    <div className="flex gap-4 my-auto">
      <NavLink to={userwishlist.link}><div className="flex gap-2"><img decoding='async' src={userwishlist.icon} alt={userwishlist.link} />{userwishlist.count}</div></NavLink>
      <img decoding='async' src={divider} alt="" />
      <NavLink to={usercart.link}><div className="flex gap-2"><img decoding='async' src={usercart.icon} alt={usercart.link} /><div className="w-7 h-7 mx-auto text-center bg-success rounded-md text-white">{usercart.count}</div></div></NavLink>
    </div>
  );
};

export const SearchField: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const ClearInput = () => {
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className='my-auto'>
      <input
        ref={inputRef}
        onClick={ClearInput}
        type="text"
        name="Search"
        id="HeaderSearchInput"
        defaultValue="Search for products..."
        className='px-3 w-[23rem] h-[3rem] border-2 border-gray-400 rounded-md text-gray-400'
      />
    </div>
  );
};
