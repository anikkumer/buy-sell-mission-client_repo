import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseTitle from "../../Hooks/UseTitle";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });
  UseTitle("Category");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10">
      {categories.map((cate) => (
        <div className="card card-compact bg-base-100 shadow-xl" key={cate._id}>
          <Link to={`/category/${cate._id}`}>
            <div className="card-body">
              <h2 className="text-center m-auto">{cate.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
