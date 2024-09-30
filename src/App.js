


import Home from './pages/home';
import Login from './pages/login';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Write from './pages/write';
import Projects from './pages/projects';

function App() {
 
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
        <Route path = '/projects' element={<Projects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
