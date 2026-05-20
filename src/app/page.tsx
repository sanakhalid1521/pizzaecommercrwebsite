import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PizzaCarousel from "./components/PizzaCarousel";
import Flavorful from "./components/Flavorful";
import ProductList from "./components/ProductList";
import PizzaItem from "./components/PizzaItem";
import PizzaFlavorDeal from "./components/PizzaFlavorDeal";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import DualDelight from "./components/DualDelight";
import ReserveYourSpot from "./components/ReserveYourSpot";
import Testimonials from "./components/Testimonials";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-400 min-h-screen">
      <Navbar /> 
      <PizzaCarousel />
      <Flavorful /> 
      <ProductList />
      <Banner />
      <Pizza />
      <PizzaItem />
      <PizzaFlavorDeal />
      <DualDelight />
      <Testimonials />
      <ReserveYourSpot />
      <Footer />
      <Chat />
    </div>
  );
}
