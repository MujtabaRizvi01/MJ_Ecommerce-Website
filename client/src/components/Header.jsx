import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import SummaryApi from "../common";
import { setUserDetails } from "../store/userSlice";
import Context from "../context";
import ROLE from "../common/role";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const context = useContext(Context);

  const user = useSelector(state => state?.user?.user)
  const [menuDisplay,setMenuDisplay]=useState(false)
  // const searchInput = useLocation()
  // const URLSearch = new URLSearchParams(searchInput?.search)
  // const searchQuery = URLSearch.getAll("q")
  // const [search,setSearch] = useState(searchQuery)

  // const handleSearch = (e)=>{
  //   const { value } = e.target
  //   setSearch(value)

  //   if(value){
  //     navigate(`/search?q=${value}`)
  //   }else{
  //     navigate("/search")
  //   }
  // }

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.userLogout.url, {
      method: SummaryApi.userLogout.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/login");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <>
      <header className="h-16 shadow-md bg-white fixed w-full z-40">
        <div className=" h-full container mx-auto flex items-center px-4 justify-between">
          <div className="">
            <Link to={"/"}>MJ</Link>
          </div>

          <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2">
            <input
              type="text"
              placeholder="search product here..."
              className="w-full outline-none"
            />
            <button className="text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white hover:bg-black">
              <GrSearch />
            </button>
          </div>

          <div className="flex items-center gap-7">
            
            <div className="relative flex justify-center">
              
              <div className="text-3xl cursor-pointer relative flex justify-center " onClick={()=>setMenuDisplay(preve => !preve)}>
                {user?._id &&
                  (user.profilePic ? (
                    <img
                      src={user.profilePic}
                      className="w-10 h-10 rounded-full"
                      alt={user.name}
                    />
                  ) : (
                    <FaRegCircleUser />
                  ))}
              </div>
              {
                    menuDisplay && (
                      <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                        <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                          }
                         
                        </nav>
                      </div>

                    )
                  }

            </div>

            {user?._id && (
              <Link to={"/cart"} className="text-2xl relative">
                <span>
                  <FaShoppingCart />
                </span>

                <div className="bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">{context?.cartProductCount}</p>
                </div>
              </Link>
            )}

            <div>
              {user?._id ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-full transition-all hover:text-blue-600 bg-blue-600 hover:bg-black"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-black"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
