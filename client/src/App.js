import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Question from './pages/Question';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/question" element={<Question />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
