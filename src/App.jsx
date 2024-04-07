import React, { useState, useEffect,lazy } from 'react';


// import Event from "./Components/Events/Event";
// import Footer from "./Components/Footer/Footer";
// import Footer2 from "./Components/Footer/Footer2";
// import First from "./Components/Home/First";
// import Home from "./Components/Home/Home";
// import Name from "./Components/Home/Name";
// import Navbar from "./Components/Navbar/Navbar";


// import Team from "./Components/Team/Team";


const Event= lazy(() => import ("./Components/Events/Event")) ;
const Footer = lazy(() => import ("./Components/Footer/Footer")) ;
const Footer2= lazy(() => import ("./Components/Footer/Footer2")) ;
const First = lazy(() => import ("./Components/Home/First")) ;
const  Home = lazy(() => import ("./Components/Home/Home")) ;
const  Name = lazy(() => import ("./Components/Home/Name")) ;
const Navbar = lazy(() => import ("./Components/Navbar/Navbar")) ;


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-[100vw] bg-black h-screen absolute z-[9999] flex items-center justify-center backdrop-blur-xl">
          <img src="/load.svg" alt="" className='md:w-[25%]' />
        </div>
      ) : (
        <div className='w-full flex flex-col min-h-screen bg-black'>
          <First />
          <Name />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
