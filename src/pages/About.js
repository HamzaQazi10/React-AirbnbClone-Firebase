import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import {
  AppProvider,
  AppContext,
  useProductContext,
} from "../context/productcontext";
import FeaturedProduct from "../components/FeaturedProduct";
const About = () => {
  const data = {
    name: "PackageX",
  };
  const { myName } = useProductContext();
  return (
    <>
      <HeroSection myData={data} variant="reverse1" />
      <FeaturedProduct />
      <Services />
    </>
  );
};

export default About;
