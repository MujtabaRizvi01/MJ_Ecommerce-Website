import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ROLE from "../common/role";

const AdminPanel = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="bg-blue-100 min-h-[calc(100vh-120px)] md:flex hidden ">
      <aside className="bg-white min-h-full  w-full  max-w-60 customShadow">
        <div className="h-32  flex justify-center items-center flex-col">
          <div className="text-5xl cursor-pointer relative flex justify-center">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-20 h-20 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <p className="capitalize text-lg font-semibold">{user?.username}</p>
          <p className="text-sm">{user?.role}</p>
        </div>

        <div>
          <nav className="grid p-4 hover:text-blue">
            {/* <Link
              to={"all-users"}
              className="hover:text-blue-600 px-2 py-1 hover:bg-slate-100"
            >
              All Users
            </Link> */}

            {/* <Link
                to={"all-products"}
                className="hover:text-blue-600 px-2 py-1 hover:bg-slate-100"
              >
                All product
              </Link> */}
            <Link
              to={"all-users"}
              className="relative inline-block px-4 py-3 mb-1 min-w-[120px] border-0 rounded-lg bg-gradient-to-b from-[#4C6EF5] to-[#0A3D8C] text-white opacity-66 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group"
            >
              All Users
              <span className="absolute bottom-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-100"></span>
            </Link>
            <Link
              to={"all-products"}
              class="relative inline-block px-4 py-3 min-w-[120px] border-0 rounded-lg bg-gradient-to-b from-[#4C6EF5] to-[#0A3D8C] text-white opacity-66 cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group"
            >
              All Products
              <span className="absolute bottom-0 left-[15%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transition-all duration-1000 ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-100"></span>
            </Link>
          </nav>
        </div>
      </aside>

      <main className=" w-full h-full p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPanel;
