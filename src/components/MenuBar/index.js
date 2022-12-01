import React from "react";
import './style.css';
import {NavLink} from "react-router-dom";

const MenuBar = () => {
    return (
        <ul className='menu-bar'>
            <li className="hover:bg-gray-100 p-1 px-2 rounded cursor-pointer" key={'home'}>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li className="hover:bg-gray-100 p-1 px-2 rounded cursor-pointer" key={'categoria'}>
                Categoria
            </li>
            <li className="hover:bg-gray-100 p-1 px-2 rounded cursor-pointer" key={'sobre'}>
                Sobre
            </li>
        </ul>
    )
}

export default MenuBar;