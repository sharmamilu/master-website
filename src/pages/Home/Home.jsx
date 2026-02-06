import React from "react";
import Hero from "../../components/HomeComponents/Hero";
import Advantages from "../../components/HomeComponents/Advantages";
import Work from "../../components/HomeComponents/Work";
import WhyChoose from "../../components/HomeComponents/WhyChoose";
import Connect from "../../components/HomeComponents/Connect";

const Home = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <WhyChoose />
      <Work />
      <Connect />
    </div>
  );
};

export default Home;
