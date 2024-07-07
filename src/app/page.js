'use client'
import { useContext } from "react";
import { BackgroundProvider , BackgroundContext } from "./commponents/context/BackgroundContext";
import Header from "./commponents/header";
import Slider from "./commponents/slider";
import Product from "./commponents/product";
import Info from "./commponents/info";
import Footer from "./commponents/footer"



export default function Home() {


  return (
    <BackgroundProvider>
      <main className="flex text-whtie flex-col justify-center items-center">

          <Header />

          <Slider />

          <Product />

          <Info />

          <Footer />

      </main>
    </BackgroundProvider>
  );
}
