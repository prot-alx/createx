import { FC}  from 'react';
import { ProductItem } from '@/entities';
import {product} from '@/shared/shop/model';

const ShopPage: FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-[1fr_3fr] gap-[60px]">
      <section className="border border-gray-600">
        filters
      </section>
      <section className="flex-col items-center justify-center border border-gray-600">
        <ProductItem items={product.items} />
      </section>
    </div>
  );
};

export { ShopPage };
