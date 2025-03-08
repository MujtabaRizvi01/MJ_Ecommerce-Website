import React, { useState } from 'react'
import { MdModeEditOutline } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import displayPKRCurrency from '../helpers/displayCurrency';
const AdminProductCard = ({
  data,
  fetchdata
}) => {
  const [editProduct,setEditProduct] = useState(false)
  
  return (
    <div className='bg-white p-4  rounded '>
       <div className='w-40'>
            <div className='w-32 h-32 flex justify-center items-center mb-3'>
              <img src={data?.productImage[0]}  className='mx-auto object-fill h-full'/>   
            </div> 
            <h1 className='text-ellipsis line-clamp-2'>{data.productName}</h1>

            <div>

                <p className='font-semibold'>
                  {
                    displayPKRCurrency(data.sellingPrice)
                  }
        
                </p>

                <div className='w-fit ml-auto p-2 bg-blue-600 hover:bg-black rounded-full hover:text-blue-600 cursor-pointer' onClick={()=>setEditProduct(true)}>
                    <MdModeEditOutline/>
                </div>

            </div>

          
       </div>
        
        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }
    
    </div>
  )
}

export default AdminProductCard
