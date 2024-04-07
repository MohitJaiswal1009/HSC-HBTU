import React from "react";
import Marquee from "react-fast-marquee";
import Card from "./Card";

export default function Marque(){
    return(
        <div>
           <Marquee speed={100} direction="right" pauseOnHover={true}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </Marquee>
        </div>
    )
}