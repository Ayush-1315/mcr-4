import { PostCard } from "../../components/postCard/postCard";
import { useData } from "../../context/dataContext"

export const Home=()=>{
    const {postsState,sortedBy}=useData();
    return <>
    <h2>{sortedBy}</h2>
    {postsState.map((post,index)=><PostCard postData={post} key={index}/>)}
    </>
}