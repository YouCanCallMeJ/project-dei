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

  const [textValues, setTextValues] = useState('');


  const inputs = [
    {
      id:1,
      name:"userInput",
      type:"text",
      placeholder:"Enter Text",
      // label:"UserInput"
    }
  ]

  // const outputs = [
  //   {
  //     id:1,
  //     name:"userOutput",
  //     type:"text",
  //     placeholder:"Translation",
  //     // label:"UserInput"
  //   }
  // ]


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(values);             // ladies
    const uInput = values.userInput;
    var result = '';
    result = TransFunction(uInput);
    console.log(result);       //people
    setTextValues(result);
    console.log(textValues);        // ?? 
    // return result;
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
      var replaceMankind = replaceMinorities.replace('mankind', 'humankind');
      return replaceMankind;
    } catch (error) {
      console.log("error");
    }
  }


  const onChange = (e)=>{
    setValues({ ...values, [e.target.name]: e.target.value });
    // setTextValues( { ...textValues, [e.target.name]: e.target.textValue});
    // const uInput = values.userInput;
    // console.log(uInput);
    // result = TransFunction(uInput);
    // console.log(result);   
    // var result = "";         //people
    // setTextValues(result);
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
          {/* {outputs.map((output) => (
            <TextBoxOutput key={output.id} {...output} value={textValues[output.name]} onChange={onChange}/>
          ))} */}
        {/* <TextBoxOutput placeholder='Translation' disabled='disabled' value={textValues} onChange={onChange}/> */}
        <div><textarea className='output' placeholder='Translation ' disabled='disabled'
            value={textValues}
        /></div>

        {/* <TextBoxOutput placeholder='Translation' disabled='disabled' value={values[input.name]}  /> */}
        <button>Translate</button>
        {/* onClick={() => setTextValue(result)} */}
        </form>
    </div>
  )
};

export default Translator;