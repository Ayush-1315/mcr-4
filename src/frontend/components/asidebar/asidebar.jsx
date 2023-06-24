import { useEffect } from "react";
import { useData } from "../../context/dataContext";
import asidebar from "./asidebar.module.css";
export const Asidebar = () => {
 const {postDispatch,setSortedBy}=useData();
 useEffect(()=>{
  setSortedBy("Latest");
  postDispatch({type:"FILTER_POSTS",payload:"latest"})
 },[postDispatch,setSortedBy])
 const changeHandler=(e)=>{
  setSortedBy(e.target.value[0].toUpperCase()+e.target.value.slice(1));
  postDispatch({type:"FILTER_POSTS",payload:e.target.value})
 }
  return (
    <div className={asidebar.listContainer}>
      <h3>Sort By</h3>
      <select
        name="sortOpt"
        id="sortOpt"
        defaultValue={"latest"}
        className={asidebar.sortOpt}
        onChange={changeHandler}
      >
        <option value="latest">
          {" "}
          ↥Latest
        </option>
        <option value="Most Upvoted">Most Upvoted</option>
      </select>
    </div>
  );
};
