import { help, shop, news, currency } from "./model";
import {
  HeaderAdList,
  Banner,
  Cart,
  Contacts,
  CurrencySelector,
  Login,
  SalesMenu,
  SearchField,
  TopHeaderMenu,
  Wishlist,
} from "@/entities";
import divider from "@/shared/img/divider.png";

export const Header = () => {
  return (
    <div className="flex-col text-small">
      <div className="flex justify-center h-11 bg-gray-900 text-gray-500 ">
        <div className="flex container w-full justify-between items-center">
          <Contacts />
          <TopHeaderMenu items={help.items}></TopHeaderMenu>
          <CurrencySelector items={currency.items}></CurrencySelector>
          <Login />
        </div>
      </div>
      <div className="flex justify-center text-base h-[84px]">
        <div className="flex container gap-4 justify-between items-center">
          <Banner />
          <SalesMenu items={shop.items}></SalesMenu>
          <SearchField />
          <div className="flex gap-4">
            <Wishlist />
            <img decoding="async" src={divider} alt="" />
            <Cart />
          </div>
        </div>
      </div>
      <div className="flex justify-center h-9 bg-primary text-white">
        <div className="container flex justify-center items-center text-extrasmall">
          <HeaderAdList items={news.items}></HeaderAdList>
        </div>
      </div>
    </div>
  );
};
