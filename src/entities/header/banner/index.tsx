import { FC } from 'react';
import { NavLink } from "react-router-dom";
import logo from "@/shared/logo/logo.png";

export const Banner: FC = () => {
  return (
    <div className="my-auto">
      <NavLink to="/">
        <img decoding="async" src={logo} alt="" className="" />
      </NavLink>
    </div>
  );
};
