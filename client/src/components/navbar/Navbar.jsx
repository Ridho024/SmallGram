import React from "react";
import "./navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">SmallGram</span>
      <div className="icons">
        <div className="icon">
            <img src={Notification} alt="notification" className="iconImg" />
            <div className="counter">2</div>
        </div>
        <div className="icon">
            <img src={Message} alt="notification" className="iconImg" />
            <div className="counter">2</div>
        </div>
        <div className="icon">
            <img src={Settings} alt="notification" className="iconImg" />
            <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
