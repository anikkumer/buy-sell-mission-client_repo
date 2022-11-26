import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const [modelList, setmodelList] = useState([]);
  const { name } = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/models?brand=${name}`)
      .then((res) => res.json())
      .then((data) => setmodelList(data));
  }, [name]);

  console.log(modelList);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <div>
        <h1 className="text-3xl text-blue-500 font-bold text-center">
          {name} Brand Cars
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 my-10">
        {modelList.map((mod) => (
          <div
            className="card card-compact bg-blue-500 shadow-xl text-slate-800 p-2.5"
            key={mod._id}
          >
            {name ? (
              <>
                <figure className="w-5/12 m-auto">
                  <img
                    className="rounded-lg shadow-xl"
                    src={mod.img}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-white">{mod.title}</h2>
                  <p>Seller's Name: {mod.user}</p>
                  <p>Location: {mod.location}</p>
                  <p>Resale Price: {mod.price1}</p>
                  <p>Original Price: {mod.price2}</p>
                  <p>Years of use: {mod.year}</p>
                  <div className="card-actions justify-end items-center">
                    <p className="text-xs text-base-100 font-bold">
                      {mod.time}
                    </p>
                    <button className="btn bg-blue-500 shadow-xl border-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h1 className="text-3xl font-bold my-10 text-center">
                    No Review Yet
                  </h1>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
