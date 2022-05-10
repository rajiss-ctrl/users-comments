import { useState, useEffect } from 'react';

import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/reusableComp/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [userResource, setUserResource] = useState([]);


 useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    const newData = await response.json();
    console.log(newData)
     setUserResource(newData)
  };

  fetchData();
},[]);
  return (
    <div className="app-container">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/users-comments" element={<Home userComm={userResource}/>} />
          <Route path="/about" element={<About userComm={userResource} />} />
          <Route path="/contact" element={<Contact userComm={userResource} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
