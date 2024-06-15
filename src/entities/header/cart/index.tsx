import { FC } from 'react';
import { NavLink } from "react-router-dom";
import cart from "@/shared/img/Cart.svg";

const usercart = { id: 0, count: 4, icon: cart, link: "/cart" };

export const Cart: FC = () => {
  return (
    <div className="flex gap-4 my-auto">
      <NavLink to={usercart.link}>
        <div className="flex gap-2">
          <img decoding="async" src={usercart.icon} alt={usercart.link} />
          <div className="w-7 h-7 mx-auto text-center bg-success rounded-md text-white">
            {usercart.count}
          </div>
        </div>
      </NavLink>
    </div>
  );
};
