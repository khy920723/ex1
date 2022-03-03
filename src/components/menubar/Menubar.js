import React from "react";
import './menubar.css';

function Menubar(){
    return(
        <div className="menubar-area">
            <button className="menu-btn">
                <i className="fas fa-home"></i>
                홈
            </button>
            <button className="menu-btn">
                <i className="fas fa-fire"></i>
                홈
            </button>
            <button className="menu-btn">
                <i className="fas fa-globe"></i>
                홈
            </button>
            <button className="menu-btn">
                <i className="fas fa-youtube"></i>
                홈
            </button>
            <button className="menu-btn">
                <i className="fas fa-box"></i>
                홈
            </button>
        </div>
    )
}

export default Menubar;