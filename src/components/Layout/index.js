import React, {Fragment} from "react";
import Header from "../Header";
import Footer from "../Footer";

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header/>
            <main className='mt-28 w-full'>
                {children}
            </main>
            <Footer/>
        </Fragment>
    );
}