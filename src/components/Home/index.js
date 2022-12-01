import Presentation from "../Presentation";
import PostItem from "../PostItem";
import React from "react";

const Home = (props) => {
    return (
        <div className=''>
            <Presentation/>
            {props.posts && props.posts.map((post) => (<PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                image_url={post.image_url}
                created_at={post.created_at}
                author_name={post.author.name}
            />))}
        </div>
    )
}

export default Home;