import { Product } from "@/types";

// Import images
import margherita from "../../public/product/margherita.webp";
import pepperoni from "../../public/product/Pepperoni.jpg";
import italian from "../../public/product/italian.jpg";
import veggie from "../../public/item/Veggie.jpg";
import fajita from "../../public/item/fajita.webp";
import behari from "../../public/item/behari.jpg";
import arabian from "../../public/images/arabian.png";
import crunchy from "../../public/images/crunchypizza.png";
import delicious from "../../public/images/delicious.jpg";
import kababish from "../../public/images/kababish.jpg";

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Margherita',
    category: 'Specialty',
    price: 799,
    bgColor: 'bg-red-500',
    image: margherita,
  },
  {
    id: 2,
    title: 'Pepperoni',
    category: 'Specialty',
    price: 899,
    bgColor: 'bg-orange-500',
    image: pepperoni,
  },
  {
    id: 3,
    title: 'Italian Pizza',
    category: 'Classic',
    price: 999,
    bgColor: 'bg-green-500',
    image: italian,
  },
  {
    id: 4,
    title: 'Veggie Delight',
    category: 'Vegetarian',
    price: 749,
    bgColor: 'bg-yellow-500',
    image: veggie,
  },
  {
    id: 5,
    title: 'Chicken Fajita',
    category: 'Tropical',
    price: 899,
    bgColor: 'bg-pink-500',
    image: fajita,
  },
  {
    id: 6,
    title: 'Barbecue Chicken',
    category: 'Specialty',
    price: 999,
    bgColor: 'bg-purple-500',
    image: behari,
  },
  {
    id: 7,
    title: 'Arabian Special',
    category: 'Specialty',
    price: 1099,
    bgColor: 'bg-blue-600',
    image: arabian,
  },
  {
    id: 8,
    title: 'Crunchy Supreme',
    category: 'Specialty',
    price: 999,
    bgColor: 'bg-amber-500',
    image: crunchy,
  },
  {
    id: 9,
    title: 'Delicious Deluxe',
    category: 'Classic',
    price: 899,
    bgColor: 'bg-teal-500',
    image: delicious,
  },
  {
    id: 10,
    title: 'Kababish Feast',
    category: 'Tropical',
    price: 1099,
    bgColor: 'bg-indigo-500',
    image: kababish,
  },
];
