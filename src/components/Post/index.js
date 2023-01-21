import React from "react";
import {useParams} from "react-router-dom";
import {Layout} from "../Layout";
import './style.css';
import useFetch from "../../hooks/useFetch";

const Post = () => {
    let {id} = useParams();
    let post = useFetch('http://api-blog/api/posts/' + id);

    if (post) {
        const createdAt = new Date(post.created_at).toLocaleDateString('pt-BR', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        const updated = () => {
            if (post.created_at !== post.updated_at) {
                const updatedAt = new Date(post.updated_at).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                return (
                    <span className='date text-stone-500 mr-auto'>Atualizado pela última vez por {post.author.name ?? ''} em {updatedAt}</span>
                )
            }
        }

        return (
            <div className='container'>
                <Layout>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-3xl title'>{post.title ?? ''}</h1>
                        {updated()}
                        <img src={post.image_url ?? ''} className='mt-5 rounded-md'/>
                        <p className='mt-5 leading-7 text-justify' dangerouslySetInnerHTML={{ __html: post.body }}></p>
                        <span className='date text-stone-500 mr-auto mt-5'>Postado por {post.author.name ?? ''} em {createdAt}</span>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Post;