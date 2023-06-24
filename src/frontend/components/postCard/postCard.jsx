import {Link} from "react-router-dom"

import { useData } from "../../context/dataContext";
import postCard from "./postCard.module.css";
export const PostCard = ({ postData }) => {
  const {
    postId,
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    isBookmarked,
  } = postData;
  const {postDispatch}=useData();
  return (
    <div className={postCard.card}>
      <div className={postCard.div1}>
        <button onClick={()=>postDispatch({type:"UPVOTE",payload:postId})}><img src="https://img.icons8.com/?size=512&id=NJKamAy8tnNG&format=png" className="icon" alt="icons"/></button>
        {upvotes - downvotes}
        <button onClick={()=>postDispatch({type:"DOWNVOTE",payload:postId})}><img src="https://img.icons8.com/?size=512&id=Yftegc6_6JFs&format=png" className="icon" alt="icons"/></button>
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
          <button className={postCard.options} onClick={()=>postDispatch({type:"BOOKMARK",payload:postId})}>
           <img src={isBookmarked?"https://img.icons8.com/?size=512&id=84065&format=png":"https://img.icons8.com/?size=512&id=26087&format=png"} alt="bookmark" className="icon"/>
          </button>
        </div>
      </div>
    </div>
  );
};
