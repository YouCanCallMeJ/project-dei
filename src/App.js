import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Bot from './screens/Bot';
import Holiday from './screens/Holiyday';
import Motivation from './screens/Motivation';
import Translator from './screens/Translator';




function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/Bot" element = { <Bot /> } />
        <Route path = "/Holiyday" element = { <Holiday /> } />
        <Route path = "/Motivation" element = { <Motivation /> } />
        <Route path = "/Translator" element = { <Translator /> } />
      </Routes>
    </Router>
    // <h1>hello</h1>
  );
}


export default App;
