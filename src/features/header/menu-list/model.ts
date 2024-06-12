import chinaflag from "@/shared/img/flag/flag-china.png";
import euflag from '@/shared/img/flag/flag-eu.svg';
import usaflag from '@/shared/img/flag/flag-usa.svg';
import cart from '@/shared/img/Cart.svg';
import wishlistHeart from '@/shared/img/wishlist_heart.svg';

export const contacts = { id: 0, text: 'Aviable 24/7 at', number: '(405)555-0128', link: 'tel:+4055550128'};

export const help = {
  items: [
    { id: 0, text: 'Delivery & returns', link: '/delivery' },
    { id: 1, text: 'Track order', link: '/track' },
    { id: 2, text: 'Blog', link: '/blog' },
    { id: 3, text: 'Contacts', link: '/contacts' },    
  ],
};

export const login = { id: 0, text: 'Log in', link: '/login', };

export const register = { id: 1, text: 'Register', link: '/register', };


export const shop = {
  items: [
    {  id: 0, text: 'Women', link: '/' },
    {  id: 1, text: 'Men', link: '/' },
    {  id: 2, text: 'Girls', link: '/' },
    {  id: 3, text: 'Boys', link: '/' },
    {  id: 4, text: 'Sales', link: '/sales' },
  ],
};

export const news = {
  items: [
    { id: 0, text: 'Up to 70% Off. Shop our latest sale styles', link: '/sales', },
    { id: 1, text: 'Lorem, ipsum dolor sit 22222.', link: '/', },
    { id: 2, text: 'Fugiat non saepe consequatur maiores! 33333', link: '/', },
    { id: 3, text: 'Corrupti molestias eveniet exercitationem, 4444', link: '/', },
  ],
};

export const currency = {
  items: [
    { id: 0, icon: usaflag, text: 'Eng / $' },
    { id: 1, icon: euflag, text: 'Eur / €' },
    { id: 2, icon: chinaflag, text: 'Cn  / ¥' },
  ],
};

export const userwishlist = { id: 0, count: 2, icon: wishlistHeart, link: '/wishlist', };

export const usercart = { id: 0, count: 4, icon: cart, link: '/cart', };
