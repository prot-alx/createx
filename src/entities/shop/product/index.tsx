import { FC } from "react";
//import FileUpload from "../file-upload";
import ProductList from "../product-list-test";

interface ListItem {
  id: number,
  title: string,
  cost: number,
  rating: number,
  buyed: number,
  img: string,
  link: string,
}

interface ListItemProps {
  items: ListItem[];
}

export const ProductItem: FC<ListItemProps> = () => {

  return (
    <div>
      <ProductList />
      {/* <FileUpload ></FileUpload> */}
    </div>
  );
};
