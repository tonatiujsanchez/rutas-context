import { Navigate, useParams } from "react-router-dom"
import posts from "../data/posts"


const Post = () => {
    const { id } = useParams();
    const post = posts.find(postFind => postFind.id === Number(id))

    return (
        <>
            {post
                ? <div>
                    <p>Id: {post.id}</p>
                    <h1>{post.titulo}</h1>
                    <p>{post.texto}</p>
                  </div>
                : <Navigate replace to="/blog" />
            }
        </>
    )
}

export default Post