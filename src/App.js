


import Home from './pages/home';
import Login from './pages/login';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Write from './pages/write';
import Projects from './pages/projects';
import Register from './pages/register';
import PrivateLibrary from './pages/priv-library';

function App() {
 
  return (
    // <div className="App">
    //   For Writers
    //   <div>
    //     <Auth/>
    //   </div>
    // </div>
  <div className='App'>
    <Router>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path = '/write' element={<Write/>}/>
        <Route path = '/projects' element={<Projects/>}/>
        <Route path = '/private-library' element = {<PrivateLibrary/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
