import { useGetProductsQuery } from "@/app/store/api/api";
import { SerializedError } from "@reduxjs/toolkit";
import React from "react";

const ProductList: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    let errorMessage: string;

    if ('status' in error) {
      // FetchBaseQueryError
      errorMessage = 'error' in error ? error.error : JSON.stringify(error.data);
    } else {
      // SerializedError
      errorMessage = (error as SerializedError).message || 'Unknown error';
    }

    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div>
      <h1>Product list</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id} className="my-3 bg-gray-500 w-96">
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
