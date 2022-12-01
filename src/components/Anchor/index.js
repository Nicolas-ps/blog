import React from "react";
import './style.css';

const Anchor = (props) => {
    return (
        <div className='anchor'>
            <h3>{props.children}</h3>
        </div>
    );
}

export default Anchor;