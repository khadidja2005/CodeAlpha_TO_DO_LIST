import React from 'react'
import { GrBook } from "react-icons/gr";

const Header = () => {
  return (
    <div className=' w-full h-16 bg-purple  flex flex-row items-center justify-start z-10'>
    <div className=' text-xl ml-4 kalam-regular'>
    MyToDoList</div>
    <GrBook  className='text-xl'/>
    </div>
  )
}

export default Header