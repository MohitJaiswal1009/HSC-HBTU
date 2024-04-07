import React from 'react'
const Footer = () => {
    const redirectToEvents = () => {
        window.location.href = '/Events';
    };
    return (
        <div className='h-[90vh] flex flex-col items-center md:items-start md:flex-row w-[80%] ml-auto mr-auto'>
            <div className='w-[70%] md:w-[48%] h-52 md:h-[70%] md:mt-auto md:mb-auto mt-4 rounded-[40px] md:rounded-[70px] overflow-hidden border-2 border-[#ddbea8] bg-red-600'>
                <img src="/book.jpg" className='w-full h-full object-cover' alt="" />
            </div>
            <div className='md:ml-20 text-center md:text-left w-full md:w-[40%]'>
                <div className='mt-10 md:mt-20'>
                    <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>SAVE</h1>
                    <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>YOUR</h1>
                    <h1 className='text-7xl uppercase text-[#ddbea8] font-bold'>SPOT</h1>
                </div>
                <p className='text-xl text-center md:text-left text-[#ddbea8] w-full md:w-[65%] mt-5 md:mt-10'>
                    Book your spot now and join us for an amazing event! Limited seats available.
                    Reserve your place early to avoid missing out on this unforgettable experience.
                </p>
                <button onClick={redirectToEvents} className='border-2 border-white bg-gray-800 text-[#ddbea8] rounded-[50px] mt-10 px-6 py-4 text-xl font-bold font-serif'>
                    BOOK NOW
                </button>
            </div>
        </div>
    )
}

export default Footer
