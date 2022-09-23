import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getQuestions").then((response) => {
      setListOfQuestions(response.data);
    });
  }, []);

  const createQuestion = () => {
    Axios.post("http://localhost:3001/createQuestion", {
        question: question
      }).then((response) => {
      alert("A question has been created.")
    })
  }

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

      <div>
        <input type="text" placeholder="Enter a question!" onChange={(event) => {setQuestion(event.target.value);}}/>
        <button onClick={createQuestion}>Create Question</button>
      </div>
    </div>
  );
}

export default App;
