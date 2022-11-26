import React from "react";
import UseTitle from "../../Hooks/UseTitle";
import Category from "../Category/Category";
import Banner from "./Banner/Banner";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <div className="m-auto w-1/2 ">
        <Category></Category>
      </div>
    </div>
  );
};

export default Home;
