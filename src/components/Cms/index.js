import React, {Fragment, useEffect, useState} from "react";
import ReactQuill from "react-quill";
import Header from "../Header";
import axios from "axios";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import useFetch from "../../hooks/useFetch";
import useQueryString from "../../hooks/useQueryString";
import { useNavigate} from "react-router-dom";
import CustomToolbar from './customToolbar'

const Cms = () => {
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const navigate = useNavigate();

    let accessToken = useQueryString().get('access_token');
    let hasAccess = useFetch('http://api-blog/api/cms', {
        'Authorization': accessToken
    });

    if (! hasAccess) return <h1>Carregando...</h1>;

    if (! hasAccess.success) {
        alert('Você não pode entrar aqui!');
        navigate('/');
    }

    const body = {
        title: title,
        body: text
    };

    const modules = {
        toolbar: {
            container: "#toolbar",
        }
    }

    const formats = [
        'font','size',
        'bold','italic','underline','strike',
        'color','background',
        'script',
        'header','blockquote','code-block',
        'indent','list',
        'direction','align',
        'link','image','video','formula',
    ]

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
            <div className='flex flex-col justify-center'>

                <div className='flex flex-col justify-center items-center'>
                    <div className='mt-28 w-3/5 mb-5'>
                        <label className=''>
                            <h1 className='text-xl'>Título</h1>
                            <input type='text' className='w-full border-0 bg-gray-200 rounded text-xl p-2' onChange={(e) => setTitle(e.target.value)}/>
                        </label>
                    </div>

                    <CustomToolbar/>
                    <ReactQuill
                        className='h-screen w-3/5'
                        theme='snow'
                        onChange={(value) => setText(value)}
                        modules={modules}
                        formats={formats}
                    />

                    <div className='w-3/5 my-10'>
                        <button className='bg-amber-300 p-3 mt-5 rounded w-48' onClick={() => save()}>Salvar</button>
                    </div>
                </div>
            </div>
            <NotificationContainer/>
        </Fragment>
    );
}

export default Cms;