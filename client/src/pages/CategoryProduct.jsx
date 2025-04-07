import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
    const { categoryName } = useParams()

    return (
        <div className="p-4 text-xl font-semibold capitalize">
            Category: {categoryName}
        </div>
    )
}

export default CategoryProduct
