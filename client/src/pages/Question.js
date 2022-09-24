import { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/layout.css";
import "../styles/list.css";
import "../styles/addForm.css";

function Question() {
  const [listOfQuestions, setListOfQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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
    if(validate(question)) {
      Axios.post("http://localhost:3001/createQuestion", {
        question: question
      }).then((response) => {
        alert("A question has been created.");
        setListOfQuestions([...listOfQuestions, { question: question }]);
      })
    } else {
      alert("The question is required!")
    }
  }

  const updateQuestion = (id) => {
    if (validate(question)) {
      Axios.put("http://localhost:3001/updateQuestion", {
        id: id, newQuestion: newQuestion
      }).then((response) => {
        getQuestions();
        alert("The question has been updated.");
        toggleFrom();
      });
    } else {
      alert("The question is required!")
    }
  }

  const deleteQuestion = (id) => {
    Axios.delete(`http://localhost:3001/deleteQuestion/${id}`).then((response) => {
      getQuestions();
      alert("A question has been deleted.");
    });
  }

  const validate = (question) => {
    if (question === "") {
      return false;
    }
    return true;
  }
  
  const toggleFrom = (id) => {
    setIsEditing(!isEditing);
  };

  let result = (
    <div className="Question">
      <div class="Layout">
        <h1>
          Awareness Questions <span>A simple React Question List App</span>
        </h1>
        {listOfQuestions.map((question) => {
          return (
            <div class="List">
              {/* {
                isEditing ?
                  <ul><input type="text" value={question.question} /></ul>
                : <ul>{question.question}</ul>
              } */}
              <ul>{question.question}</ul>
              <div class="List-buttons">
                <button onClick={toggleFrom}>
                  <i class="fas fa-pen" />
                </button>
                <button onClick={() => deleteQuestion(question._id)}>
                  <i class="fas fa-trash" />
                </button>
              </div>
            </div>
          )
        })}
        {
          isEditing ?
            <div class="AddForm">
              <label>Edit question</label>
              <input type="text" placeholder="Enter an updated question!" onChange={(event) => { setQuestion(event.target.value); }} />
              <button onClick={() => updateQuestion(question._id)}>Update</button>
            </div>
            : <div class="AddForm">
              <label>New question</label>
              <input type="text" placeholder="Enter a new question!" onChange={(event) => { setQuestion(event.target.value); }} />
              <button onClick={createQuestion}>Create</button>
            </div>
        }
      </div>
    </div>
  );
  return result;
}

export default Question;
