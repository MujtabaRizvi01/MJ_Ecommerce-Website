import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify'
import SummaryApi from '../common';

const Header = () => {

  const navigate = useNavigate()


  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.userLogout.url,{
      method : SummaryApi.userLogout.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }

  const user = useSelector((state) => state?.user?.user);
  console.log("Header: ", user);
  return (
    <>
  <header className='h-16 shadow-md bg-white fixed w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
                <Link to={"/"}>
                  MJ
                </Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none' />
                <div className='text-lg min-w-[50px] h-8 bg-blue-600 flex items-center justify-center rounded-r-full text-white'>
                  <GrSearch />
                </div>
            </div>


            <div className='flex items-center gap-7'>
                
                <div className='relative flex justify-center'>

                  {
                    user?._id && (
                      <div className='text-3xl cursor-pointer relative flex justify-center' >
                        {
                          user?.profilePic ? (
                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                          ) : (
                            <FaRegCircleUser/>
                          )
                        }
                      </div>
                    )
                  }
                  
{/*                   
                  
            
                      <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                        <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                          }
                         
                        </nav>
                      </div>
                    
                  
                  */}
                </div>

                  {
                     user?._id && (
                      <Link to={""} className='text-2xl relative'>
                          <span><FaShoppingCart/></span>
      
                          <div className='bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'></p>
                          </div>
                      </Link>
                      )
                  }
              


                <div>
                  {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-black'>Logout</button>
                    )
                    : (
                    <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-blue-600 hover:bg-black'>Login</Link>
                    )
                  }
                    
                </div>

            </div>

      </div>
    </header>
</>

  );
};

export default Header;
