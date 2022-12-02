import 'dayjs/locale/pt-br';
import React from "react";
import './style.css';
import useFetch from "./hooks/useFetch";
import {Layout} from "./components/Layout";
import Home from "./components/Home";
import dayjs from "dayjs";
import {NotificationContainer} from 'react-notifications';

dayjs.locale('pt-br')

const App = () => {
    const posts = useFetch('http://api-blog/api/posts')

    return (
        <div className='container'>
            <Layout>
                <Home posts={posts.data}/>
            </Layout>
            <NotificationContainer/>
        </div>
    );
}

export default App;