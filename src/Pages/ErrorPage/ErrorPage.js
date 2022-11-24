import React from "react";
import errorPage from "../../assets/img/404_page_cover.jpg";

const ErrorPage = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Opps!Something is missing</h1>
      <img className="px-48 py-4" src={errorPage} alt="" />
    </div>
  );
};

export default ErrorPage;
