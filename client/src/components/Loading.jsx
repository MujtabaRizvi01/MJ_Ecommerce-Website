import React from 'react'

const Loading = () => {
  return (
    <div className=" fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200">
    <div className="mx-auto relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
  )
}

export default Loading
