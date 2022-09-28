import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';
import Login from './Login';


function App() {

  const db = {
    'admin':{uname:'admin',pword:'admin',position:'admin'},
    'Jackson':{uname:'Jackson',pword:'123',position:'Teacher'},
    'Ben':{uname:'Ben',pword:'123',position:'Student'},
    'Niranjana':{uname:'Niranjana',pword:'501',position:'Teacher'},
    'Chithra':{uname:'Chithra',pword:'601',position:'Student'},
    'Vivek':{uname:'Vivek',pword:'701',position:'Teacher'},

  };

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Login database={db} />} />
          <Route path='/dashboard' element={<Dashboard database={db} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
