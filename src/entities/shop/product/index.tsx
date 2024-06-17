import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

interface ListItem {
  id: number,
  title: string,
  cost: number,
  rating: number,
  buyed: number,
  img: string,
  link: string,
}

interface ListItemProps {
  items: ListItem[];
}

type SortOption = {
  key: "cost" | "rating" | "buyed";
  order: "asc" | "desc";
  label: string;
};

const sortOptions: SortOption[] = [
  { key: "cost", order: "asc", label: "Cost: Low to High" },
  { key: "cost", order: "desc", label: "Cost: High to Low" },
  { key: "rating", order: "asc", label: "Rating: Low to High" },
  { key: "rating", order: "desc", label: "Rating: High to Low" },
  { key: "buyed", order: "asc", label: "Bought: Low to High" },
  { key: "buyed", order: "desc", label: "Bought: High to Low" },
];

export const ProductItem: FC<ListItemProps> = ({ items }) => {
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);

  const sortedItems = [...items].sort((a, b) => {
    if (sortOption.order === "asc") {
      return a[sortOption.key] - b[sortOption.key];
    } else {
      return b[sortOption.key] - a[sortOption.key];
    }
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = sortOptions.find(option => option.label === event.target.value);
    if (selectedOption) {
      setSortOption(selectedOption);
    }
  };

  return (
    <div>
      <div className="my-4">
        <select value={sortOption.label} onChange={handleSortChange} className="px-4 py-2 bg-gray-300 text-black rounded">
          {sortOptions.map((option) => (
            <option key={`${option.key}-${option.order}`} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <ul className="grid items-center grid-cols-3 gap-8">
        {sortedItems.map((item) => (
          <li className="flex-col justify-center items-center" key={item.id}>
            <NavLink className="flex-col" to={item.link}>
              <img src={item.img} alt={item.title} />
              <div className="pl-3">
                <div className="text-gray-800">{item.title}</div>
                <div className="text-gray-900"><b>${item.cost}</b></div>
                <div className="text-gray-600">Rating: {item.rating}</div>
                <div className="text-gray-600">Bought: {item.buyed}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
