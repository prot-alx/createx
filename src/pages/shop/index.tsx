import { FC}  from 'react';

const ShopPage: FC = () => {
  return (
    <div className="container mx-auto grid grid-cols-[1fr_3fr] gap-[60px]">
      <section className="border border-gray-600">
        filters
      </section>
      <section className="border border-gray-600">
        products
      </section>
    </div>
  );
};

export { ShopPage };
