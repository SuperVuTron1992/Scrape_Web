import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import MainPage from './MainPage';
import ForgotPassWordPage from './ForgotPassWordPage';

function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<HomePage />}/>
        <Route path = "/ForgotPassWordPage" element = {<ForgotPassWordPage />}/> 
        <Route path = "/MainPage" element = {<MainPage />}/>
      </Routes>
    </Router>
  );
}

export default App;