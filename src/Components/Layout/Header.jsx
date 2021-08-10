/** @format */
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [classNameTop, setClassNameTop] = useState("topnav");
  const myFunction = () => {
    if (classNameTop === "topnav") {
      setClassNameTop("topnav responsive");
    } else {
      setClassNameTop("topnav");
    }
  };
  return (
    <div className={classNameTop} id="myTopnav">
      <a className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
      <a href="https://github.com/Perriex" className="home">
        Translator
      </a>
      <div className="access">
        <a href="https://github.com/Perriex">GitHub</a>
      </div>
    </div>
  );
};

export default Header;
