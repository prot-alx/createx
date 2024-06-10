import { contacts, help, login, shop, news, currency } from './menu-list/model';
import { TextHandler, ImgHandler } from './menu-list/menuListComponents';

export const Header = () => {
    return (
        <div className="flex-col text-small">
            <div className="flex justify-center h-11 bg-gray-900 text-white ">
                <div className="flex container w-full justify-between mx-auto my-auto">
                    <TextHandler items={contacts.items}></TextHandler>
                    <TextHandler items={help.items}></TextHandler>
                    <ImgHandler items={currency.items}></ImgHandler>
                    <TextHandler items={login.items}></TextHandler>
                </div>
            </div>
            <div className="flex justify-center text-base h-32">
                <div className="flex container mx-auto my-auto gap-4 justify-between">
                    <div className='my-auto'><img src="" alt="" className='' /></div>
                    <TextHandler items={shop.items}></TextHandler>
                    <div className='my-auto'>
                        <input type="text" name="Search" id="" defaultValue="Search for products" className='px-3 w-[23rem] h-[3rem] border-2 border-gray-400 rounded-md' />
                    </div>
                    <TextHandler items={login.items}></TextHandler>
                </div>
            </div>
            <div className="flex justify-center h-9 bg-primary text-white">
                <div className="container mx-auto my-auto text-extrasmall">
                    <TextHandler items={news.items}></TextHandler>
                </div>
            </div>
        </div>
    )
}