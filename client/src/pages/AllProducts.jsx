import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import summaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    // const response = await fetch(SummaryApi.allProduct.url)
    // const dataResponse = await response.json()
    const fetchData = await fetch(summaryApi.allProducts.url, {
      method: summaryApi.allUsers.method
    });
    const dataResponse = await fetchData.json();
    console.log("Product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  fetchAllProduct()
  // useEffect(()=>{
  // },[])
  
  return (
    <div>
        <div className='bg-white  py-2 px-4 flex justify-between items-center'>
            <h2 className='font-bold text-lg'>All Product</h2>
            <button  className='border-2  bg-blue-600 text-black hover:bg-black hover:text-blue-600 transition-all py-1 px-3 rounded-full ' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
        </div>

        {/* *all product */}
        {/* h-[calc(100vh-190px)] is part of below div*/}
        <div className=' flex items-center flex-wrap gap-3 py-4  overflow-y-scroll'>
          {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
        </div>
        

        {/**upload prouct component */}
        {
          openUploadProduct && (
            <UploadProduct 
            onClose={()=>setOpenUploadProduct(false)} 
            fetchData={fetchAllProduct}
            />
          )
        }
      

    </div>
  )
}

export default AllProducts