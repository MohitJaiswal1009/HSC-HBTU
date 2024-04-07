import React from "react";
import './event.css'
export default function Card(props){
    return(
        // <div className=" text-white flex min-h-screen items-center justify-center bg-neutral-900">
        //  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-lg inline-block m-4 group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow">
               <div className="h-[70vw] w-[60vw] sm:h-96 sm:w-72"> {/*h-96 w-72 */}
                    <img className="h-full w-full object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-500" src={props.img} alt="" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group:hover-to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center sm:translate-y-[49%] group-hover:translate-y-0 transition-all duration-500">
                    <h1 className="text-3xl font-bold text-white font-anta">{props.title}</h1>
                    <p className="text-lg italic text-white mb-3 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body">{props.description}</p>
                    <button className="rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white font-body">See More</button>
                </div>
            </div>
        //  </div>
        // </div>
    )
}