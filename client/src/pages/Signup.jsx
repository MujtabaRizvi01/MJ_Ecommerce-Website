import React, { useState } from "react";
import summaryApi from "../common";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Signupp = () => {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password === data.confirmpassword) {
      const dataResponse = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/login");
      }

      if (dataApi.error) {
        toast.error(dataApi.message);
      }
    }else{
      toast.error("Please check password and confirm password")
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12 text-4xl"><strong>Register</strong></div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
              <strong>Username</strong>
              </label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                type="text"
                name="username"
                placeholder="Enter Username"
                value={data.username}
                required
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
              <strong>Email</strong>
              </label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                type="email"
                value={data.email}
                placeholder="Enter Email"
                name="email"
                required
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
              <strong>Password</strong>
              </label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                type="password"
                value={data.password}
                placeholder="Enter Password"
                name="password"
                required
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">
              <strong>Confirm Password</strong>
              </label>
              <input
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                type="password"
                value={data.confirmpassword}
                placeholder=" Confirm Password"
                name="confirmpassword"
                required
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="!mt-12">
            <button className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signupp;
