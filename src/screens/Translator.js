import React, { useState } from 'react';
import Arrows from '../components/Arrows';
import Button from '../components/Button';
import Modal from '../components/Modal';
import NavBarElements from '../components/NavBarElements';
import TextBox from '../components/TextBox';
import TextBoxOutput from '../components/TextBoxOutput';

const Translator = () => {
  const [values, setValues] = useState({
    userInput: ""
  });

  const [textValue, setTextValue] = useState(null);

  // const [result, setResult] = useState;

  const inputs = [
    {
      id:1,
      name:"userInput",
      type:"text",
      placeholder:"Enter Text",
      // label:"UserInput"
    }
  ]

  var result = "";

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(values);
    const uInput = values.userInput;
    result = TransFunction(uInput);
    console.log(setTextValue(result));
    return textValue;
  };

  function TransFunction(input){
    // const inclusiveWord = [
    //   replaceLadies = 'replaceLadies',
    //   replaceGentleman = 'replaceGentleman',
    //   replaceNormal = 'replaceNormal',
    //   replaceGuys = 'replaceGuys',
    //   replaceMinorities = 'replaceMinorities'
    // ]

    // for (let i = 0; i < inclusiveWord.length; i++) {
    //   inclusiveWord[i] = 
    // }    

    try {
      var replacelg = input.replace('ladies&gentleman', 'people');
      var replaceLadies = replacelg.replace('ladies', 'people');
      var replaceGentleman = replaceLadies.replace('gentleman', 'people');
      var replaceNormal = replaceGentleman.replace('normal', 'typical');
      var replaceGuys = replaceNormal.replace('guys', 'teammates');
      var replaceMinorities = replaceGuys.replace('minorities', 'underrepresented');
      return replaceMinorities;
    } catch (error) {
      
    }
  }


  const onChange = (e)=>{
    setValues({ ...values, [e.target.name]: e.target.value });
  }


  // input twice ??


  return (
    <div>
      <h1>Inclusive Language Translator</h1>
        <NavBarElements></NavBarElements>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <TextBox key={input.id} {...input} value={values[input.name]} onChange={onChange}/>

          ))}
        {/* <p><div className='arrow'>&#8645;</div></p> */}
        <Arrows ></Arrows>

            {/* // <TextBox key={input.id} {...input} value={values[input.name]} onChange={onChange}/> */}
        <TextBoxOutput placeholder='Translation' disabled='disabled' value={textValue}/>

        {/* <TextBoxOutput placeholder='Translation' disabled='disabled' value={values[input.name]}  /> */}
        <button>Translate</button>
        {/* onClick={() => setTextValue(result)} */}
        </form>
    </div>
  )
};

export default Translator;