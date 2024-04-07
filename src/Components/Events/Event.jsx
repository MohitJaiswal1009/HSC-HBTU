
import React from "react";
import { useRef } from "react";
import Tablet from "./Tablet.jsx";
import Card from "./Card.jsx";
import list from "./eventList";
import hill1 from '/hill1.png';
import hill2 from '/hill2.png';
import hill3 from '/hill3.png';
import hill4 from '/hill4.png';
import hill5 from '/hill5.png';
import leaf from '/leaf.png';
import plant from '/plant.png';
import tree from '/tree.png';
import './event.css';
import Navbar from "../Navbar/Navbar.jsx";
import Footer2 from "../Footer/Footer2.jsx";

function Event() {
  const [eve, setEvent] = React.useState(0);
  const [temp, setTemp] = React.useState({});


  async function parallax() {
    let text = document.getElementById("text");
    let leaf1 = document.getElementById("leaf");
    let hill11 = document.getElementById("hill1");
    let hill44 = document.getElementById("hill4");
    let hill55 = document.getElementById("hill5");

    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      // console.log(value);
      if (text !== null) {
        if(window.matchMedia('(max-width: 767px)').matches){
        if (value < 120)
          text.style.marginTop = value * 0.68 + 'px';
        leaf1.style.top = value * -1.5 + 'px';
        leaf1.style.left = value * 1.5 + 'px';
        hill55.style.left =value*1.5<91? value * 1.5 + 'px':91+'px';
        hill44.style.left =value*-1.5>-91?value * -1.5 + 'px':-91+'px';
        hill11.style.top = value * 1 + 'px';}
        else{
          if (value < 180)
          text.style.marginTop = value * 0.68 + 'px';
        leaf1.style.top = value * -1.5 + 'px';
        leaf1.style.left = value * 1.5 + 'px';
        hill55.style.left = value*1.5<312?value * 1.5 + 'px':312+'px';
        hill44.style.left = value*-1.5>-312?value * -1.5 + 'px':-312+'px';
        hill11.style.top = value * 1 + 'px';

        }
      }
      else {
        parallax();
      }
    })
  }






  const Tab = useRef(null);

  const scrolll = (eleRef) => {
    // console.log(eleRef);
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  function handleinactive() {
    document.getElementById("tablet").classList.toggle('active');
    document.getElementById("crd").classList.toggle('active');
  }

  function HandleClick(getid) {
    // console.log(getid);
    document.getElementById("crd").classList.toggle('active');
    document.getElementById("tablet").classList.toggle('active');
    const newObj = list[getid - 1];
    // console.log(newObj);
    setTemp(newObj);
  }
  return (
    <>
      <div className="mt-[60px]" >
        <div id="crd">
          <div className="h-auto bg-[url(https://static.vecteezy.com/system/resources/previews/023/372/025/non_2x/tropical-beach-with-ocean-sunset-and-palm-trees-cartoon-summer-view-illustration-with-summer-background-generative-ai-free-photo.jpeg)] bg-top bg-no-repeat bg-cover">
            <div className="box-border overflow-hidden">
              <section onScroll={parallax()} className="  relative flex justify-center h-[57vw] sm:h-[40vw] md:h-[60vw] overflow-hidden">

                <img id="hill1" className="absolute top-[1vw] left-0 w-[100%] pointer-events-none" src={hill1} alt=""></img>
                <img id="hill2" className="absolute top--3 left-0 w-[100%] pointer-events-none" src={hill2} alt="" />
                <img id="hill3" className="absolute top-0 left-0 w-[100%] pointer-events-none" src={hill3} alt=""></img>
                <img id="hill4" className="absolute top--1 left-0 w-[100%] pointer-events-none" src={hill4} alt=""></img>
                <img id="hill5" className="absolute top--1 left-0 w-[100%] pointer-events-none" src={hill5} alt=""></img>
                <img id="tree" className="absolute top--3 left-0 w-[100%] pointer-events-none" src={tree} alt=""></img>
                <h2 id="text" className="p-[7vw] z-10 absolute text-[15vw] sm:text-[10em] text-[#160f29] drop-shadow-2xl font-anta"><strong>EVENTS</strong></h2>
                <img id="plant" className="absolute top-[4vw] left-0 w-[100%] pointer-events-none" src={plant} alt=""></img>
                <img id="leaf" className="absolute top-0 left-0 w-[100%] pointer-events-none" src={leaf} alt=""></img>
              </section>
            </div>
          </div>
          {/* <Marque/ > */}
          <div className="flex flex-wrap justify-center bg-[#003329]">
            {list.map((item) => {
              return (
                <div className="inline-block" onClick={() => {
                  HandleClick(item.id)
                  scrolll(Tab)
                }} >
                  <Card
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    description={item.desc} />
                </div>
              )

            })}
          </div>
        </div>

        {/* <Card /> */}
        <div id="tablet" onClick={handleinactive} className="bg-[#ddbea8] w-fit hidden" ref={Tab}>
          <Tablet
            key={temp.id}
            title={temp.title}
            img={temp.img}
            description={temp.msg}
          />
        </div>
      </div>
    </>
  );
}

export default Event;
