import React from "react"
import "./Hover2.scss"
// import img1 from '../Assets/img.jpg';

const Hover = React.memo((props) => {
  return (
    <div className="containe">
      <div className="card__collection clear-fix">
        <div className="cards cards--three">
          <img src={props.img} className="h-full w-full object-cover" alt="" />
          <span className="cards--three__rect-1">
            <span className="shadow-1"></span>
            <p>{props.name}</p>
            <p>{props.role}</p>
          </span>
          <span className="cards--three__rect-0">
            <span className="shadow-2"></span>
          </span>
          <span className="cards--three__circle"></span>
          <ul className="cards--three__list">
            <li>
              {" "}
              <a href={props.instagram}>
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href={props.linkedin}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})

export default Hover
