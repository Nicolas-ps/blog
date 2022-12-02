import React, {Fragment, useState} from "react";
import ReactQuill from "react-quill";
import Header from "../Header";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Cms = () => {
    const [text, setText] = useState('');
    const body = {
        title: "Oi moanoite",
        body: text
    };
    function save () {
        axios.post('http://api-blog/api/posts', body)
            .then(function (response) {
                if (response.data.success) {
                    NotificationManager.success('Post Salvo com sucesso!', '', 3000);
                }
            })
            .catch(function (response) {
                response = response.response.data;
                if(response.error) {
                    NotificationManager.error(response.message, 'Ocorreu um erro', 5000);
                }
            })
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
            <NotificationContainer/>
        </Fragment>

    );
}

export default Cms;