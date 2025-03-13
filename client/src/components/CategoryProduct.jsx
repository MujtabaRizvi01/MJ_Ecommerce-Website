import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
    const params =useParams()
    console.log("category: ",params.categoryName)
  return (

    <div>Cate</div>
  )
}

export default CategoryProduct