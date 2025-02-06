import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const user=useSelector(state=>state?.user?.user)
  console.log("Header: ",user)
  return (
    <>
    header
    </>
  )
}

export default Header
