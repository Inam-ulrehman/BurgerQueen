import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsSharedLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ProductsSharedLayout
