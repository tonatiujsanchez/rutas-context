import { NavLink } from 'react-router-dom';
import Controles from '../components/Controles';
import posts from './../data/posts';

const Blog = () => {
  return (
    <div>
        <h2>Blog</h2>
        <ul>
            {posts.map( post => (
                <li key={ post.id }>
                    <NavLink to={`/post/${post.id}`}>{ post.titulo }</NavLink>
                </li>
             ))
            }
        </ul>
        
        <Controles />
    </div>
  )
}

export default Blog