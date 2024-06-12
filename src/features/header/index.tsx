import { help, shop, news, currency, } from './menu-list/model';
import { TopHeaderMenu, TopHeaderContacts, TopHeaderCurrencySelector, 
         TopHeaderLogin, SearchField, Banner, 
         HeaderSalesMenu, HeaderAdList, UserCartAndWishlist } from './menu-list/menuListComponents';

export const Header = () => {
    return (
        <div className="flex-col text-small">
            <div className="flex justify-center h-11 bg-gray-900 text-gray-500 ">
                <div className="flex container w-full justify-between mx-auto my-auto">
                    <TopHeaderContacts></TopHeaderContacts>
                    <TopHeaderMenu items={help.items}></TopHeaderMenu>
                    <TopHeaderCurrencySelector items={currency.items}></TopHeaderCurrencySelector>
                    <TopHeaderLogin></TopHeaderLogin>
                </div>
            </div>
            <div className="flex justify-center text-base h-32">
                <div className="flex container mx-auto my-auto gap-4 justify-between">
                    <Banner />
                    <HeaderSalesMenu items={shop.items}></HeaderSalesMenu>
                    <SearchField />
                    <UserCartAndWishlist></UserCartAndWishlist>
                </div>
            </div>
            <div className="flex justify-center h-9 bg-primary text-white">
                <div className="container mx-auto my-auto text-extrasmall">
                    <HeaderAdList items={news.items}></HeaderAdList>
                </div>
            </div>
        </div>
    );
};
