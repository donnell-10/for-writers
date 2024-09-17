import logo from './logo.svg';

import { Auth } from './components/auth';
import Home from './pages/home';
import Login from './pages/login';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { db } from './config/firebase';
import { useState } from 'react';
import Write from './pages/write';

function App() {
  const[projectsList, setProjectList] = useState([])
  return (
    // <div className="App">
    //   For Writers
    //   <div>
    //     <Auth/>
    //   </div>
    // </div>
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path = '/write' element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
