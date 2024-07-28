import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export interface Product {
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

export const apiProduct = createApi({
  reducerPath: "apiProduct",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "products",
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiProduct;

export const sortedProductsApi = createApi({
  reducerPath: "sortedProductsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    fetchSortedAndFilteredProducts: builder.query<
      { count: number; rows: Product[]; totalPages: number },
      {
        sortField: string;
        sortOrder: string;
        minPrice: number;
        maxPrice: number;
        isSale: boolean;
        page: number;
        pageSize: number;
      }
    >({
      query: ({
        sortField,
        sortOrder,
        minPrice,
        maxPrice,
        isSale,
        page,
        pageSize,
      }) => ({
        url: "products/sorted-and-filtered",
        params: {
          sortField,
          sortOrder,
          minPrice,
          maxPrice,
          isSale,
          page,
          pageSize,
        },
      }),
    }),
  }),
});

export const { useFetchSortedAndFilteredProductsQuery } = sortedProductsApi;
