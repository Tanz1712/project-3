import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return (
          <div className="posts" key={p._id}>
            <Post post={p} />
          </div>
        );
      })}
    </div>
  );
}
