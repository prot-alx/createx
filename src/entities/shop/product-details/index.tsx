import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '@/app/store/api/apiProduct';
import { SerializedError } from '@reduxjs/toolkit';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error, isLoading } = useGetProductQuery(Number(id));

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

  if (!product) return <p>Product not found</p>;

  return (
    <div className="my-3 bg-gray-500 w-96">
      <h1>{product.name}</h1>
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
    </div>
  );
};

export default ProductDetails;
