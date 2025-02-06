import React, { useContext, useState } from "react";
import summaryApi from "../common";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {fetchUserDetails}= useContext(Context)


  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(summaryApi.login.url, {
      method: summaryApi.login.method,
      credentials:"include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails()
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12 text-4xl">
          <strong>Login</strong>
        </div>

        <form onSubmit={handleSubmit}>
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
            <label className="text-gray-800 text-sm mb-2 block pt-3">
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

          <div className="!mt-12">
            <button className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Login
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">
            {"Don't have an account?"}{" "}
            <Link
              to={"/signup"}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
