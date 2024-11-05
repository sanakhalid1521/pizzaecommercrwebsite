import React from "react";
import Navbar from "./componenets/navbar";
import Banner from "./componenets/banner";
import PizzaCarousal from "./componenets/pizzacarousal";
import Flavorful from "./componenets/flavorful";
import ProductList from "./componenets/poduclist";
import PizzaItem from "./componenets/pizzaitem";
import FlavorDeal from "./componenets/pizzflavordeal";
import Pizza from "./componenets/pizza";
import Footer from "./componenets/footer";
import DualDeal from "./componenets/daualdelight";
import ReservYourSpot from "./componenets/reserveyourspot";




export default function Home() {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-400 min-h-screen">
    <Navbar /> 
    <PizzaCarousal/>
    <Flavorful/> 
    <ProductList/>
    <Banner/>
    <Pizza/>
    <PizzaItem />
    <FlavorDeal />
    <DualDeal/>
    <ReservYourSpot/>
    <Footer/>
    
    

    </div>
  );
}