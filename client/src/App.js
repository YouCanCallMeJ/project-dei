import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getQuestions").then((response) => {
      setListOfQuestions(response.data);
    });
  }, []);

  const getQuestions = () => {
    Axios.get("http://localhost:3001/getQuestions").then((response) => {
      setListOfQuestions(response.data);
    });
  }

  const createQuestion = () => {
    Axios.post("http://localhost:3001/createQuestion", {
        question: question
      }).then((response) => {
        alert("A question has been created.");
        setListOfQuestions([...listOfQuestions, {question: question}]);
    })
  }

  const updateQuestion = (id) => {
    Axios.put("http://localhost:3001/updateQuestion", {
      id: id, newQuestion: newQuestion
    }).then((response) => {
      // setListOfQuestions([...listOfQuestions, { question: question }]);
      getQuestions();
      alert("The question has been updated.");
    });
  }
  
  const deleteQuestion = (id) => {
    Axios.delete(`http://localhost:3001/deleteQuestion/${id}`).then((response) => {
      getQuestions();
      alert("A question has been deleted.");
    });
  }

  return (
    <div className="App">
      <div className="questionDisplays">
        {listOfQuestions.map((question) => {
          return (
            <div>
              <h1>Question: {question.question}</h1>
              <input type="text" placeholder="New Question" onChange={(event) => {setNewQuestion(event.target.value);}}/>
              <button onClick={() => updateQuestion(question._id)}>Update</button>
              <button onClick={() => deleteQuestion(question._id)}>Delete</button>
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
