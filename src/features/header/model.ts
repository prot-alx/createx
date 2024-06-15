import chinaflag from "@/shared/img/flag/flag-china.png";
import euflag from '@/shared/img/flag/flag-eu.svg';
import usaflag from '@/shared/img/flag/flag-usa.svg';

export const help = {
  items: [
    { id: 0, text: 'Delivery & returns', link: '/delivery' },
    { id: 1, text: 'Track order', link: '/track' },
    { id: 2, text: 'Blog', link: '/blog' },
    { id: 3, text: 'Contacts', link: '/contacts' },    
  ],
};

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

