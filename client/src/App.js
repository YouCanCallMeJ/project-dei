import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfQuestions, setListOfQuestions] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getQuestions").then((response) => {
      setListOfQuestions(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="questionDisplays">
        {listOfQuestions.map((question) => {
          return (
            <div>
              <h1>Question: {question.question}</h1>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
