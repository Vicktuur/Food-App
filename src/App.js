import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/dashboard' element = {<Dashboard/>} />
              <Route path='/' element = {<Landing/>} />
              <Route path='/login' element = {<Login/>} />
              <Route path='/register' element = {<Register/>} />
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
