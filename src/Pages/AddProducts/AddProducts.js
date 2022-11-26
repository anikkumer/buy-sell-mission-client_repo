import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import UserContext, { AuthContext } from "../../Contexts/UserContext";
import swal from "sweetalert";
import moment from "moment";

const AddProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://buy-sell-mission-server.vercel.app/categories").then(
        (res) => res.json()
      ),
  });
  const handleCollection = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = user?.displayName || "unregistered";
    const email = user?.email || "unregistered";
    const brand = form.cateBrand.value;
    const title = form.cateName.value;
    const location = form.cateLocation.value;
    const newPrice = form.newPrice.value;
    const price = form.price.value;
    const phone = form.catePhone.value;
    const img = form.cateImg.value;
    const year = form.cateYear.value;
    const used = form.cateYearUse.value;
    const about = form.about.value;

    const products = {
      title,
      userName,
      brand,
      location,
      newPrice,
      price,
      phone,
      img,
      year,
      used,
      time: moment().format("lll"),
      email,
      about,
    };

    fetch("https://buy-sell-mission-server.vercel.app/models", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          swal({
            title: "Product Added Successfully",
            button: "OK",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="my-10">
        <div className="w-1/2 m-auto">
          <h1 className="text-3xl text-white font-bold text-center">
            Add Your Car Brands
          </h1>
        </div>
        <form onSubmit={handleCollection}>
          <div className="card-body w-4/5 lg:w-1/2 bg-blue-500 shadow-2xl rounded-lg m-auto my-10">
            <div className="form-control">
              <input
                name="cateName"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            <select className="select select-bordered w-full" name="cateBrand">
              {categories.map((cate) => (
                <option key={cate._id}>{cate.name}</option>
              ))}
            </select>

            <div className="form-control">
              <input
                name="cateUser"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full bg-white"
                disabled
              />
            </div>

            <div className="form-control">
              <input
                name="cateLocation"
                type="text"
                placeholder="Location"
                className="input input-bordered w-full  bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="newPrice"
                type="number"
                placeholder="Resale Price"
                className="input input-bordered w-full  bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="price"
                type="number"
                placeholder="Original Price"
                className="input input-bordered w-full  bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="catePhone"
                type="number"
                placeholder="Phone Number"
                className="input input-bordered w-full  bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="cateYearUse"
                type="number"
                placeholder="Year of use"
                className="input input-bordered w-full bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="cateYear"
                type="number"
                placeholder="Year of Buy"
                className="input input-bordered w-full  bg-white"
                required
              />
            </div>

            <div className="form-control">
              <input
                name="cateImg"
                type="url"
                placeholder="Photo URL"
                className="input input-bordered w-full backdrop-blur-sm bg-white"
                required
              />
            </div>

            <div className="form-control">
              <textarea
                name="about"
                className="textarea textarea-bordered  bg-white"
                placeholder="Details Please"
                required
              ></textarea>
            </div>
            <button className="btn btn-info" type="submit">
              Add Car Model
            </button>
          </div>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default AddProducts;
