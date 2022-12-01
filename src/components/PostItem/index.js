import {
    Link
} from "react-router-dom";
import './style.css';

const PostItem = (props) => {
    const {
        id,
        title,
        created_at,
        author_name
    } = props;

    const createdAt = new Date(created_at).toLocaleDateString('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <div className='box-post'>
            <Link to={`/post/${id}`}><h1 className='title text-3xl hover:text-gray-600 cursor-pointer'>{title}</h1></Link>
            <div className='meta'>
                <div>
                    <span className='date text-stone-500'>Postado {createdAt} por {author_name}</span>
                </div>
            </div>
        </div>
    );
}

export default PostItem;