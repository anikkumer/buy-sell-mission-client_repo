import React from "react";
import UseTitle from "../../Hooks/UseTitle";
import Banner from "./Banner/Banner";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
