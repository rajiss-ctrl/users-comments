import { useState, useEffect } from 'react';

import './App.css';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';
import Homepage from './components/pages/Homepage';
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
          <Route path='/' element={userResource && <Homepage userComm={userResource}/>} />
          <Route path='/about' element={userResource && <Aboutpage aboutuser={userResource} />} />
          <Route path='/contact' element={userResource && <Contactpage usercontact={userResource} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
