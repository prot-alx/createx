import { FC, useState, useRef, useEffect } from "react";

interface SocialListItem {
  id: number;
  icon: string;
  text: string;
}

interface SocialListProps {
  items: SocialListItem[];
}

export const CurrencySelector: FC<SocialListProps> = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const showCurrencyRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      showCurrencyRef.current &&
      !showCurrencyRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [currency, setCurrency] = useState(items[0]);

  return (
    <div className="w-20">
      <div className="flex gap-3 items-center" onClick={() => setOpen(!isOpen)}>
        <img className="w-5 h-3" src={currency.icon} alt="icon" />
        {currency.text}
      </div>
      <ul
        onMouseLeave={() => setOpen(false)}
        className={`flex-col absolute bg-gray-900 justify-between gap-6 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {items.map((currency) => (
          <li
            key={currency.id}
            onClick={() => {
              setOpen(false);
              setCurrency(currency);
            }}
            className="flex gap-1 items-center p-1 hover:bg-gray-800 transition cursor-pointer min-w-20"
          >
            <img
              className="w-5 h-3"
              decoding="async"
              src={currency.icon}
              alt="flag"
            />{" "}
            {currency.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
