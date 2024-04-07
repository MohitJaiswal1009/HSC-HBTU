// import React, { lazy } from "react"
// import "./Team.css"

// import Hover2 from "./Hover/Hover2"
// import Navbar from "../Navbar/Navbar"
// import Footer2 from "../Footer/Footer2"
// import teamMembers from "./Assets/all_product"
// import Hover from "./Hover/Hover2"

// // const teamMembers = lazy(() => import ('./Assets/all_product')) ;
// // const Footer2= lazy(() => import ('../Footer/Footer2')) ;
// // const  Navbar  = lazy(() => import ('../Navbar/Navbar')) ;
// // const Hover2 = lazy(() => import ('./Hover/Hover2')) ;

// const Team = () => {
//   const renderTeamSection = (teamName, teamMembers) => (
//     <section key={teamName} className="team-section">
//       <h2 style={{ position: "sticky", top: 0 }}>{teamName}</h2>
//       <div className="card-container">
//         {teamMembers.map((item) => (
//           <div key={item.id} className="card-wrapper">
//             <Hover2
//               instagram={item.instagram}
//               linkedin={item.linkedin}
//               img={item.img}
//               id={item.id}
//               name={item.name}
//               role={item.roll}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   )

//   return (
//     <>
//       <div className="team-container">
//         <h1>Meet Our Teams</h1>
//         {Object.entries(teamMembers).map(([teamName, members]) =>
//           renderTeamSection(teamName, members)
//         )}
//       </div>
//     </>
//   )
// }

// export default Team

import React, { useEffect, lazy } from "react"
import "./Team.css"

import Hover2 from "./Hover/Hover2"
import Navbar from "../Navbar/Navbar"
import Footer2 from "../Footer/Footer2"
import teamMembers from "./Assets/all_product"
import Hover from "./Hover/Hover2"

// const teamMembers = lazy(() => import ('./Assets/all_product')) ;
// const Footer2= lazy(() => import ('../Footer/Footer2')) ;
// const  Navbar  = lazy(() => import ('../Navbar/Navbar')) ;
// const Hover2 = lazy(() => import ('./Hover/Hover2')) ;

const Team = () => {
  useEffect(() => {
    const onTouchStart = () => {}
    const onTouchMove = () => {}

    document.addEventListener("touchstart", onTouchStart, { passive: true })
    document.addEventListener("touchmove", onTouchMove, { passive: true })

    return () => {
      document.removeEventListener("touchstart", onTouchStart)
      document.removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  const renderTeamSection = (teamName, teamMembers) => (
    <section key={teamName} className="team-section">
      <h2 style={{ position: "sticky", top: 0 }}>{teamName}</h2>
      <div className="card-container">
        {teamMembers.map((item) => (
          <div key={item.id} className="card-wrapper">
            <Hover2
              instagram={item.instagram}
              linkedin={item.linkedin}
              img={item.img}
              id={item.id}
              name={item.name}
              role={item.roll}
            />
          </div>
        ))}
      </div>
    </section>
  )

  return (
    <>
      <div className="team-container">
        <h1>Meet Our Teams</h1>
        {Object.entries(teamMembers).map(([teamName, members]) =>
          renderTeamSection(teamName, members)
        )}
      </div>
    </>
  )
}

export default Team
