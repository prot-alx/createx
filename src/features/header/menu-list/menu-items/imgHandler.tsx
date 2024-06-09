import React from "react";

interface SocialListItem {
  id: number;
  icon: string;
  text: string;
};

interface SocialListProps {
  items: SocialListItem[];
};

export const ImgHandler: React.FC<SocialListProps> = ({ items }) => {
  return (
    <div>
      <ul className="flex justify-between gap-3">
        {items.map(item => (
          <li className="text-gray-500" key={item.id}>
            {item.text}{item.icon}
          </li>
        ))}
      </ul>
    </div>
  );
};
