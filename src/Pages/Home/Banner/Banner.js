import React from "react";
import cover from "../../../assets/img/cover.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src={cover} alt="" />
            <h1 className="text-5xl font-bold">Buy & Sell</h1>
            <p className="py-6">
              Buying and selling are the heartbeat of an investor's life, and
              timing both these actions correctly is a constant preoccupation.
              Whether in investment guides or the financial media, talk of
              buying and selling opportunities is incessant.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
