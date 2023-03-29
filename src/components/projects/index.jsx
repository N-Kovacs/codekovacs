import { useState } from "react";
import Madcap from "./madcap";

import "./projects.css";

export default function Projects(props) {
  const [btnState, setBtnState] = useState("HOME");
  const [hoverImageState, setHoverImageState] = useState("");
  const MADCAP = "MADCAP";
  const clicked = () => {
    props.transition(btnState);
  };
  const clickedcontent = () => {
    //do stuff to show info
  };
  const divStyle = {
    backgroundImage: hoverImageState,
  };

  return (
    <div>
      Hello There
      <div id="menu" className="menu" style={divStyle}>
        <div id="menu-items">
          <a
            className="menu-item"
            onClick={clickedcontent}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("MADCAP");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            {mode === MADCAP && <Madcap />}
            MadCap
          </a>
          <a
            className="menu-item"
            onClick={clickedcontent}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("MADCAP");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            CodeKovacs
          </a>
          <a
            className="menu-item"
            onClick={clicked}
            onMouseEnter={(ev) => {
              setHoverImageState("url('./projects.png')");
              setBtnState("PROJECTS");
              // console.log("Projects");
            }}
            onMouseLeave={() => setHoverImageState("")}
          >
            Back
          </a>
        </div>
      </div>
      ;
    </div>
  );
}
