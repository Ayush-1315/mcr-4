import { Link } from "react-router-dom";
import navbar from "./navbar.module.css";
export const Navbar=()=>{
    return <nav className={navbar.navbar}><Link to="/">MyForum</Link></nav>
}