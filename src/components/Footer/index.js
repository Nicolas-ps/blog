import React from "react";

const Footer = (props) => {
    return (
        <footer className='py-10 flex justify-center'>
            <div>
                <p>Feito por <a href='https://www.linkedin.com/in/nicolas-ps/'
                                className='hover:text-yellow-500 duration-150'>Nicolas Souza</a>
                    <span className='text-gray-500'> com ReactJS e Laravel ❤</span>
                ️</p>
            </div>
        </footer>
    );
}

export default Footer;