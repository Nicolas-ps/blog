import React, {Fragment, useState} from "react";
import ReactQuill from "react-quill";
import Header from "../Header";

const Cms = () => {
    const [text, setText] = useState('');

    function save () {
        console.log(text)
    }

    return (
        <Fragment>
            <Header/>
            <div className='mt-28'>
                <ReactQuill className='h-screen' theme='snow' onChange={(value) => setText(value)}/>
            </div>
            <div className='mt-5 p-5'>
                <button className='bg-amber-300 p-3 mt-5 rounded w-48' onClick={() => save()}>Salvar</button>
            </div>
        </Fragment>
    );
}

export default Cms;