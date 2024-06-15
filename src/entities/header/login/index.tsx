import { FC } from "react";
import { NavLink } from "react-router-dom";
import profile from "@/shared/img/Profile.svg";

const login = { id: 0, text: "Log in", link: "/login" };

const register = { id: 1, text: "Register", link: "/register" };

export const Login: FC = () => {
  return (
    <div className="my-auto flex justify-between gap-3">
      <NavLink className="my-auto" to="/profile">
        <img src={profile} alt="profile" />
      </NavLink>
      <NavLink to={login.link}>
        <span>{login.text}</span>
      </NavLink>
      /
      <NavLink to={register.link}>
        <span>{register.text}</span>
      </NavLink>
    </div>
  );
};
