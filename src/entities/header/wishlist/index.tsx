import { FC } from "react";
import { NavLink } from "react-router-dom";
import wishlistHeart from "@/shared/img/wishlist_heart.svg";

const userwishlist = {
  id: 0,
  count: 2,
  icon: wishlistHeart,
  link: "/wishlist",
};

export const Wishlist: FC = () => {
  return (
    <div className="flex gap-4 my-auto">
      <NavLink to={userwishlist.link}>
        <div className="flex gap-2">
          <img
            decoding="async"
            src={userwishlist.icon}
            alt={userwishlist.link}
          />
          {userwishlist.count}
        </div>
      </NavLink>
    </div>
  );
};
