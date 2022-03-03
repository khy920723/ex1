import React from "react";
import './searchbar.css';
import { useRef } from "react";

function SearchBar(searchResult){
    const inputRef=useRef();

    // 서치버튼 클릭 시 호출 될 함수
    // enter 클릭 시 호출 공통 함수
    const searchFnc=()=>{
        // input의 value 값을 가져온다.
        const value=inputRef.current.value;
        searchResult(value)
    }
    const inputClick=()=>{
        searchFnc();
    }

    // 인풋 박스에 enter 시 호출 될 함수
    // e: 이벤트 객체
    const inputEnter=(e)=>{
        if(e.key === 'Enter'){
            searchFnc();
        }
    }

    return (
        <div className="searchArea">
            <div className="logoarea">
                <button className="btn-leftmenu"><i className="fa-solid fa-bars"></i></button>
                <h1><img src="/images/logo.png" alt="youtube" className="logoimg" /></h1>
            </div>
            {/* 왼쪽 */}
            <div className="searchInputArea">
                <input 
                type="search" placeholder="검색" className="searchInput" 
                onKeyPress={inputEnter} 
                ref={inputRef} />
                
                <button className="searchbtn" onClick={inputClick}>
                    <img src="/images/searchicon.png" alt="search" />
                </button>
                <button className="micbtn">
                    <i className="fa-solid fa-microphone"></i>
                </button>
            </div>
            {/* 가운데 */}
            <div className="topmenuarea">
                <button className="btn-rightmenu">
                    <i className="fa-solid fa-table-cells"></i>
                </button>
                <button className="btn-rightmenu">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </button>
                <button className="btn-rightmenu">
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
            {/* 오른쪽 */}
        </div>
    )
}

export default SearchBar;