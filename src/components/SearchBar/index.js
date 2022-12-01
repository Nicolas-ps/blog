import React from "react";
import './style.css';
import Button from "../Button";

const SearchBar = (props) => {
    return (
        <div className='searchBar'>
            <input
                value={props.value}
                type='text'
                placeholder={props.placeholder}
                onChange={event => props.onChange(event)}
            />
            <Button class='button'>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M18,10a8,8,0,1,0-3.1,6.31l6.4,6.4,1.41-1.41-6.4-6.4A8,8,0,0,0,18,10Zm-8,6a6,6,0,1,1,6-6A6,6,0,0,1,10,16Z"/></g></svg>
            </Button>
        </div>
    );
}

export default SearchBar;