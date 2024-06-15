import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import LeftArrow from "@/shared/ui/Left-chevron.png";
import RightArrow from "@/shared/ui/Right-chevron.png";

interface ListItem {
  id: number;
  text: string;
  link: string;
}

interface ListItemProps {
  items: ListItem[];
}

export const HeaderAdList: FC<ListItemProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-auto flex justify-center">
      <button onClick={handlePrevClick} className="bg-primary text-white p-2">
        <img src={LeftArrow} alt="LeftArrow" />
      </button>
      <ul className="flex justify-center w-96 my-auto">
        {items.map((item, index) => (
          <li
            onClick={handleNextClick}
            className={`text-white ${
              index === currentIndex ? "block" : "hidden"
            }`}
            key={item.id}
          >
            <NavLink to={item.link}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
      <button onClick={handleNextClick} className="bg-primary text-white p-2">
        <img src={RightArrow} alt="RightArrow" />
      </button>
    </div>
  );
};
