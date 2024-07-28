import { FC, useState } from 'react';
import FilterComponent from '@/entities/shop/filter';
import { SortedProductList } from '@/entities/shop/shop-sorted';

const ShopPage: FC = () => {
  const [sortField, setSortField] = useState('price');
  const [sortOrder, setSortOrder] = useState('ASC');
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);
  const [isSale, setIsSale] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className="container mx-auto grid grid-cols-[1fr_3fr] gap-[60px]">
      <section className="border border-gray-600">
        <FilterComponent
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          isSale={isSale}
          setIsSale={setIsSale}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </section>
      <section className="flex-col items-center justify-center border border-gray-600">
        <SortedProductList
          sortField={sortField}
          sortOrder={sortOrder}
          minPrice={minPrice}
          maxPrice={maxPrice}
          isSale={isSale}
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          setPageSize={setPageSize}
        />
      </section>
    </div>
  );
};

export { ShopPage };
