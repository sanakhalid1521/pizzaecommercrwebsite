import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  bgColor: string;
  image: StaticImageData;
}

export interface CartItem extends Product {
  quantity: number;
}
