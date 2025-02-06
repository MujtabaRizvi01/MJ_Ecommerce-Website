// import { useState } from 'react'
import "./App.css";
import { Outlet } from "react-router-dom";
import SummaryApi from "./common/index";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice.js";

function App() {

  const dispatch=useDispatch()

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.currentUser.url, {
      method: SummaryApi.currentUser.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();
    console.log("User Details: ", dataApi);
    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  };

  useEffect(() => {
    fetchUserDetails();
  });

  return (
    <>
      <Context.Provider value={{
          fetchUserDetails
      
      }}>
        <ToastContainer position="top-center" />
        <Header/>
        <main>
          <Outlet />
        </main>
        {/* <Footer/> */}
      </Context.Provider>
    </>
  );
}

export default App;
