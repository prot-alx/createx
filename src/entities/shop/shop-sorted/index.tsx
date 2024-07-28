import { useEffect } from "react";
import { useFetchSortedAndFilteredProductsQuery } from "@/app/store/api/apiProduct";
import { SerializedError } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

interface SortedProductListProps {
  sortField: string;
  sortOrder: string;
  minPrice: number;
  maxPrice: number;
  isSale: boolean;
  page: number;
  pageSize: number;
  setPage: (value: number) => void;
  setPageSize: (value: number) => void;
}

export const SortedProductList: React.FC<SortedProductListProps> = ({
  sortField,
  sortOrder,
  minPrice,
  maxPrice,
  isSale,
  page,
  pageSize,
  setPage,
  //setPageSize,
}) => {
  const { data, error, isLoading } = useFetchSortedAndFilteredProductsQuery({
    sortField,
    sortOrder,
    minPrice,
    maxPrice,
    isSale,
    page,
    pageSize,
  });

  useEffect(() => {
    if (data) {
      const totalPages = data.totalPages;
      if (page > totalPages) {
        setPage(totalPages);
      }
    }
  }, [data, page, pageSize, setPage]);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    let errorMessage: string;

    if ("status" in error) {
      errorMessage =
        "error" in error ? error.error : JSON.stringify(error.data);
    } else {
      errorMessage = (error as SerializedError).message || "Unknown error";
    }

    return <p>Error: {errorMessage}</p>;
  }

  if (!data || !Array.isArray(data.rows)) {
    return <p>Error: Invalid data format</p>;
  }

  const products = data.rows;

  return (
    <div>
      <div>
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
          Previous
        </button>
        <button onClick={() => setPage(page < data.totalPages ? page + 1 : page)}>
          Next
        </button>
      </div>
      <p>Page {page} of {data.totalPages}</p>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="my-3 bg-gray-500 w-96">
            <Link to={`/shop/product/${product.id}`}>
              <h2>{product.name}</h2>
              <p>Price: {product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Sales: {product.isSale ? "Yes" : "No"}</p>
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
