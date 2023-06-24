import { useData } from "../../context/dataContext";
import sidebar from "./sidebar.module.css";
export const Sidebar = () => {
  const {forumData}=useData();
  return (
    <div className={sidebar.listContainer}>
      <ul>
        <li className={sidebar.listItem} style={{fontWeight:"bold"}}>
          <span className="material-symbols-outlined">home</span><span>Home</span>
        </li>
        <li className={sidebar.listItem}>
          <span className="material-symbols-outlined">rocket</span><span>Explore</span>
        </li>
        <li className={sidebar.listItem}>
          <span className="material-symbols-outlined">bookmark</span><span>Bookmarks</span>
        </li>
        <li className={sidebar.listItem}>
          <span className="material-symbols-outlined">rocket</span><span>Profile</span>
        </li>
      </ul>
      <div className={sidebar.footer}>
        <div>
          <span className={sidebar.profile} style={{backgroundImage:`url(${forumData.picUrl})`}}></span>
        </div>
        <div>
          <p>{forumData.name}</p>
          <span>@{forumData.username}</span>
        </div>
      </div>
    </div>
  );
};
