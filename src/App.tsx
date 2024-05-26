import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import { useState } from "react";
import "./index.css";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="app-container">
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <Home isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
