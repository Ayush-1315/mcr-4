import { useParams, Link } from "react-router-dom";
import post from "./post.module.css";
import { useData } from "../../context/dataContext";
import { PostCard } from "../../components/postCard/postCard";

export const Post = () => {
  const { postId } = useParams();
  const { postsState } = useData();
  const findPost = postsState.find(({ postId: id }) => id === postId);
  console.log(findPost);
  return (
    <div className={post.postContainer}>
      <Link to="/">
        <h2>
          <span className="material-symbols-outlined">arrow_back</span>
          Post
        </h2>
      </Link>
      <PostCard postData={findPost} />
      <div className={post.commentBox}>
        {findPost?.comments.map((comment, index) => (
          <div key={index} className={post.comments}>
            <div>
              <span className={post.profile}></span>
            </div>
            <div>
              @{comment.username}
              <p>Replying to @{findPost.username}</p>
              <p style={{ marginTop: "1rem" }}>{comment.comment}</p>
              <div className={post.commentFooter}>
                <span class="material-symbols-outlined">favorite</span>
                <span class="material-symbols-outlined">chat_bubble</span>
                <span class="material-symbols-outlined">share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
