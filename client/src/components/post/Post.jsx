import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="post" />}
      <div className="postInfo">
        <div className="postCats">
          {/*  method 1 {
          post.categories.map(c=>(
            <span className="postCat">{c.name}</span>
          ))
        } */}

          {/*  method 2 {post.categories.map((c) => {
          return (
            <div className="postCats" key={c._id} >
             
            <span className="postCat">{c.name}</span>
              
            </div>
          );
        })}   */}

          <span className="postCat">CategoriesId : {post?.categories?.name}</span>
        </div>

        <span className="postAuthor">AuthorId: {post?.author?.name}</span>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p classsName="postDesc">{post.content}</p>
    </div>
  );
}
