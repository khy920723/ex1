import React from "react";
import './menubar.css';
import { Link } from "react-router-dom";

// props로 받을 것이 없기 때문에 memo로 싸는 것이 의미 없음
const Menubar = () => {
    return(
        <div className="menubar-area">
            <Link to="/">
                <button className="menu-btn">
                    <i className="fas fa-home"></i>
                    홈
                </button>
            </Link>
            <button className="menu-btn">
                <i className="fas fa-fire"></i>
                인기
            </button>
            <button className="menu-btn">
                <i className="fas fa-globe"></i>
                탐색
            </button>
            <button className="menu-btn">
                <i className="fas fa-youtube"></i>
                구독
            </button>
            <button className="menu-btn">
                <i className="fas fa-box"></i>
                보관함
            </button>
        </div>
    )
}

export default Menubar;