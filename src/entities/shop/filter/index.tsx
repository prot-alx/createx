import React from "react";
import FileUpload from "../file-upload";

interface FilterComponentProps {
  sortField: string;
  setSortField: (value: string) => void;
  sortOrder: string;
  setSortOrder: (value: string) => void;
  minPrice: number;
  setMinPrice: (value: number) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
  isSale: boolean;
  setIsSale: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  pageSize: number;
  setPageSize: (value: number) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  isSale,
  setIsSale,
  page,
  setPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <label>
        Sort Field:
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <label>
        Sort Order:
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </label>
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Sale:
        <input
          type="checkbox"
          checked={isSale}
          onChange={(e) => setIsSale(e.target.checked)}
        />
      </label>
      <label>
        Page:
        <input
          type="number"
          value={page}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value >= 1) {
              setPage(value);
            } else {
              setPage(1); // Если значение меньше 1, устанавливаем 1
            }
          }}
        />
      </label>
      <label>
        Page Size:
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          {/* Можно еще добавить вручную сколько элементов на странице требуется */}
        </select>
      </label>
      <FileUpload />
    </div>
  );
};

export default FilterComponent;
