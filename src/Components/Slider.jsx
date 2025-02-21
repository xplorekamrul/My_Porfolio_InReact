import React, { useState }  from 'react'

const Slider = () => {
    const [scrollPosition, setScrollPosition] = useState(0); // State to store scroll position
    // Scroll Position Handle for the scrollbar line
    const handleScroll = (e) => {
        const scrollTop = e.currentTarget.scrollTop;
        const scrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollPosition(scrollPercentage);
    };

  return (
    <>
    {/* horizontal align */}
    <div className="h-[450px] overflow-y-scroll flex flex-col flex-wrap justify-around space-y space-x-4 p-4  custom-scrollbar" onScroll={handleScroll}>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
    </div>
    {/* vertical align */}
    <div className="h-[450px] overflow-y-scroll flex flex-col md:flex-row md:flex-wrap justify-around space-y p-4 py-10 custom-scrollbar" onScroll={handleScroll}>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
    </div>
    <div className='p-10 bg-red-500'></div>
    </>
  )
}

export default Slider