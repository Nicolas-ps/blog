import React, {useState} from "react";
import './style.css';
import MenuBar from "../MenuBar";

const Banner = () => {
    return (
        <header className='fixed top-0 w-full blur-20px bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 '>
            <div className='container-list max-w-3xl mx-auto'>
                <MenuBar/>
            </div>
        </header>
    );
}

export default Banner;