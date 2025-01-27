// import { useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";
import SummaryApi from "./common/index"
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  
  const fetchUserDetails=async()=>{
    const dataResponse=await fetch(SummaryApi.currentUser.url,{
      method:SummaryApi.currentUser.method,
      credentials:'include'
    })

    const dataApi= await dataResponse.json()
    console.log("User Details: ",dataApi)

  }

  useEffect(()=>{
    fetchUserDetails()
  },[])
  
  return (
    <>


      <ToastContainer position="top-center" />
      {/* <Header/> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
