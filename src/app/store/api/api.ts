import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Category {
  id: number;
  name: string;
}

interface Color {
  id: number;
  name: string;
  colorCode: string;
}

interface Size {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  clothesId: number;
  materialId: number;
  brandId: number;
  isSale: boolean;
  discount: string;
  salePrice: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
  colors: Color[];
  sizes: Size[];
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = api;
