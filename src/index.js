import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Cms from './components/Cms';
import Post from './components/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path={'/post/:id'} element={<Post/>} />
            <Route path={'/cms'} element={<Cms/>}/>
        </Routes>
    </BrowserRouter>
);