import {useLocation,Routes,Route} from "react-router-dom"
import './App.css';
import { Navbar } from './frontend/components/Navbar/navbar';
import { Sidebar } from './frontend/components/sidebar/sidebar';
import {Asidebar} from "./frontend/components/asidebar/asidebar";
import { Post } from "./frontend/pages/post/post";
import { Home } from "./frontend/pages/home/home";
function App() {
const location=useLocation().pathname;
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Sidebar/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/post/:postId" element={<Post/>}/>
          </Routes>
        </div>
        {location==="/" && <Asidebar/>}
      </div>
    </div>
  );
}

export default App;
