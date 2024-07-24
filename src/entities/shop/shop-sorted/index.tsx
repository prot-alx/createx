import React, { useState } from 'react';
import { useFetchSortedAndFilteredProductsQuery } from '@/app/store/api/apiProduct'; // исправьте импорт, если он неправильный
import { SerializedError } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

export const SortedProductList: React.FC = () => {
  const [sortField, setSortField] = useState('price');
  const [sortOrder, setSortOrder] = useState('ASC');
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);
  const [isSale, setIsSale] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, error, isLoading } = useFetchSortedAndFilteredProductsQuery({
    sortField,
    sortOrder,
    minPrice,
    maxPrice,
    isSale,
    page,
    pageSize,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    let errorMessage: string;

    if ('status' in error) {
      errorMessage = 'error' in error ? error.error : JSON.stringify(error.data);
    } else {
      errorMessage = (error as SerializedError).message || 'Unknown error';
    }

    return <p>Error: {errorMessage}</p>;
  }

  // Проверка, является ли data объектом и содержит ли поле rows
  if (!data || !Array.isArray(data.rows)) {
    return <p>Error: Invalid data format</p>;
  }

  const products = data.rows;
  console.log(data)
  return (
    <div>
      <h1>Sorted and Filtered Product List</h1>
      <div>
        <label>
          Sort Field:
          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <label>
          Sort Order:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
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
            onChange={(e) => setPage(Number(e.target.value))}
          />
        </label>
        <label>
          Page Size:
          <input
            type="number"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          />
        </label>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="my-3 bg-gray-500 w-96">
            <Link to={`/shop/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
              <img src={product.image} alt={product.name} width="100" />
              <h3>Colors:</h3>
              <ul>
                {product.colors.map((color) => (
                  <li key={color.id} style={{ color: color.colorCode }}>
                    {color.name} ({color.colorCode})
                  </li>
                ))}
              </ul>
              <h3>Sizes:</h3>
              <ul>
                {product.sizes.map((size) => (
                  <li key={size.id}>{size.name}</li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
