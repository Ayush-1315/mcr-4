import './App.css';
import { Navbar } from './frontend/components/Navbar/navbar';
import { Sidebar } from './frontend/components/sidebar/sidebar';
import {Asidebar} from "./frontend/components/asidebar/asidebar";
function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Sidebar/>
        <div className='container'>
Data
        </div>
        <Asidebar/>
      </div>
    </div>
  );
}

export default App;
