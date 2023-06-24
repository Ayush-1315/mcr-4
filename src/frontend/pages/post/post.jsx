import { useParams } from "react-router-dom"
import post from "./post.module.css"
import { useData } from "../../context/dataContext";
import { PostCard } from "../../components/postCard/postCard";

export const Post=()=>{
    const {postId}=useParams();
    const {postsState}=useData();
    console.log(postsState)
    const findPost=postsState.find(({postId:id})=>id===postId)
    console.log(findPost)
    return <div className={post.postContainer}><PostCard postData={findPost}/></div>
}