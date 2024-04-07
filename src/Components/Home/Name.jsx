import React, { useState,lazy } from 'react'
import './first.css'
import { MenuItems } from '../Navbar/MenuItems';
import { Link } from 'react-router-dom';


const Navbar = lazy(() => import ('../Navbar/Navbar')) ;


const Name = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };


    const [exploreClicked, setExploreClicked] = useState(false);

    const handleExploreClick = () => {
        setExploreClicked(true);
        window.scrollTo({
            top: window.innerHeight / 2,
            behavior: 'smooth'
        });
    };
    return (
        <>
            {/* <div className='w-full flex fixed top-0 left-0 h-[60px] md:h-[80px] z-20 bg-transparent backdrop-blur-xl'>
                <img src="/logo.png" alt="hello" className='img' />
                <div className="icons" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "active" : "menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                    <button>Throwback</button>
                </ul>
            </div> */}
            <Navbar />
            <div className='name absolute text-[12vh] md:text-[14vw] text-center flex items-center justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] select-none bg-[#2322226b] rounded-xl -py-3 px-4 pointer-events-none leading-none'>
                Tarang
            </div>

            <div onClick={handleExploreClick} className='w-fit border-2 border-white text-white absolute top-[90%] rounded-xl px-5 py-3 text-xl font-serif cursor-pointer left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                Explore
            </div>
        </>
    )
}

export default Name