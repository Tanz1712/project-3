import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <Link to={`/post/${post._id}`} className="link">
      <div className="post">
        {post.photo && <img className="postImg" src={post.photo} alt="post" />}
        <div className="postInfo">
          <div className="postCats">
            {/* {
          post.categories.map(c=>(
            <span className="postCat">{c.name}</span>
          ))
        }*/}

            {/* {post.categories.map((c) => {
          return (
            <div className="postCats" key={c._id} >
             
            <span className="postCat">{c.name}</span>
              
            </div>
          );
        })}   */}

            <span className="postCat">{post.categories}</span>
          </div>
          <span className="postTitle">{post.title}</span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p classsName="postDesc">{post.content}</p>
      </div>
    </Link>
  );
}
