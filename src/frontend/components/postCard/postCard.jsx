import {Link} from "react-router-dom"

import { useData } from "../../context/dataContext";
import postCard from "./postCard.module.css";
export const PostCard = ({ postData }) => {
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt,
    isBookmarked,
  } = postData;
  const {postDispatch}=useData();
  return (
    <div className={postCard.card}>
      <div className={postCard.div1}>
        <button onClick={()=>postDispatch({type:"UPVOTE",payload:postId})}>Upvote</button>
        {upvotes - downvotes}
        <button onClick={()=>postDispatch({type:"DOWNVOTE",payload:postId})}>Downvote</button>
      </div>
      <div className={postCard.content}>
        <div className={postCard.header}>
          <span
            className={postCard.profile}
            style={{ backgroundImage: `url(${picUrl})` }}
          ></span>
          <div>
            <p>posted by @{username}</p>
          </div>
        </div>
        <h2>{post}</h2>
        <div>
          {tags.map((tag, index) => (
            <span className={postCard.chips} key={index}>
              {tag}
            </span>
          ))}
          <p>{postDescription}</p>
        </div>
        <div className={postCard.footer}>
          <Link to={`/post/${postId}}`}>
          <button className={postCard.options}>
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
          </Link>
          <button disabled className={postCard.options}>
            <span className="material-symbols-outlined">share</span>
          </button>
          <button disabled className={postCard.options}>
            <span className="material-symbols-outlined">bookmark</span>
          </button>
        </div>
      </div>
    </div>
  );
};
