import React, { useEffect } from "react";
import './event.css';
import VanillaTilt from 'vanilla-tilt';
export default function Tablet(props){
    useEffect(()=>{
    VanillaTilt.init(document.getElementById("image"));
    });
    return(
        <div className="  mt-5 flex justify-center">
            <div className=" rounded-lg bg-[#ddbea8] w-[70%] m-3 grid grid-cols-1 sm:grid-cols-2 ">
                <div className=" rounded-l-lg  h-92 w-86 flex justify-center items-center bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group:hover-to-black/70">
                    <img id="image" className="object-cover drop-shadow-2xl h-96 w-80 " data-tilt src={props.img} alt="" />
                </div>
                <div className=" rounded-r-lg p-5 grid grid-rows-3 grid-rows-[1fr,3fr,1fr] bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group:hover-to-black/70">
                    <h1 className="text-5xl font-bold font-anta underline underline-offset-8">{props.title}</h1>
                    <div>
                    <h3 className="mx-5 font-bold font-anta">Date of Event : Coming Soon....</h3>
                    <h3 className="m-5 font-bold font-anta">Venue : Coming soon....</h3>
                    <p className="text-lg italic mb-3 font-anta">{props.description}</p>
                    </div>
                     <div>
                    <button className=" my-2 rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white font-body">Participate</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}