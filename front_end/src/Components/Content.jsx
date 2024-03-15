import line from '../assets/Line.svg';
import React, { useState } from 'react';

const Content = () => {
  const [isOpen, setisOpen] = useState(false);

  const openPopUP = () => {
    console.log('open');
    setisOpen(true);
  };

  const closePopUp = () => {
    console.log('close');
    setisOpen(false);
  };

  return (
    <div className=''>
      <div className='flex justify-between'>
        <div className='text-[#F446B9] text-3xl p-8 font-semibold whitespace-nowrap'>My To Do List </div>
        <img src={line} alt="line" />
      </div>
      <div className=' flex justify-end'>
        <button className=' z-30 text-blue text-2xl font-medium p-3 mx-4 border-2 border-blue rounded-md cursor-pointer ' onClick={openPopUP}>+ Add new Task</button>
      </div>
      <div> {isOpen && (
          <div className=" max-w-xs shadow-md flex justify-center items-center backdrop-blur-xl bg-white/30 border-2 border-[#F446B9] m-auto rounded-md">
            <div className=" max-w-sm mx-6">
              <button onClick={closePopUp}>Close</button>
              <form className=' text-[#6F6F6F]'>
              <div className=' mb-8'>  
                <p className=' m-2'>Title</p>
                <input type="text" name="" id="" className=' outline outline-[#6F6F6F] px-10 py-2' />
              </div>  
              <div className=' mb-8'>
                <p className=' m-2'>Timing</p>
                <input type="text" name="" id="" className=' outline outline-[#6F6F6F] px-10 py-2'  />
              </div>
              <div className='flex mb-8 '>
                <input type="checkbox" name="" id="" />
                <p className='  m-2'>Urgent</p>
              </div>
              <div className='flex justify-end m-2'>
                   <button type='submit' className=' text-blue text-2xl font-medium py-2 px-4 mx-2 my-2  border-2 border-blue rounded-md cursor-pointer '>Save</button>
              </div>
              </form>  
            </div>
          </div>
        )}</div>
    </div>
  );
};

export default Content;
