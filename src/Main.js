import React, { useState } from "react";
// import img1 from './images/icon-complete.svg'
import './page.css'
import Forms from "./Forms";
import Confirmation from "./confirmation";
import Cardfront from "./Cardfront";
import CardBack from "./CardBack";

function Main() {
  
  const [visibility, setVisibility] = React.useState(false);
  const [name, setName] = useState("JANE APPLESEED");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [month, setMonth] = useState("00");
  const [inputMonth, setInputMonth] = useState("MM");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [n, setN] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [cvcErrorText, setCvcErrorText]=useState('')
  const [nameError, setNameError]=useState('')
  const [formName,setFormName]=useState('')
  const [formNumber,setFormNumber]=useState('')
  const [numberError,setNumberError]=useState('')
  

  const formClickHandler = (e) => {
    if (n === "") {
      setErrorText('Can\'t be blank');
    }
    if (cvcValue === "") {
      setCvcErrorText('Can\'t be blank');
    }
    if(formName===''){
     setNameError('Can\'t be blank')
    }

    if(formNumber===''){
      setNumberError('Can\'t be blank')
    }

    if (n === "" || monthValue === "" || cvcValue === ""||formName===''||formNumber==='') {
      console.log(`this is n from button click is empty ${n}`);
      setVisibility(false);
    } else {
      setVisibility(true);
    }
    
  };

  const confirmationClickHandler = () => {
    setVisibility(false);
    setCvcValue('')
    setMonthValue('')
    setCvcErrorText('')
    setN('')
    setErrorText('')
    setMonth('00')
    setYear('00')
    setName('JANE APPLESEED')
    setNumber('0000 0000 0000 0000')
    setCvc('000')
    setNameError('')
    setFormName('')
    setNumberError('')
    setFormNumber('')
  };

  const nameHandler = (e) => {
    setName((e.target.value).toUpperCase());
    setFormName(e.target.value);
    setNameError('')
  };

  const EnterNumberHandler = (e) => {
    setNumber(e.target.value);
    setFormNumber(e.target.value)
    setNumberError('')
  };
  const EnterMonthHandler = (e) => {
    setMonth(e.target.value);
    if(inputMonth.length<3){
      setInputMonth(e.target.value)
   }
   
  };
  const EnterYearHandler = (e) => {
    setYear(e.target.value);
  };
  const EnterCvcHandler = (e) => {
    setCvc(e.target.value);
  };
  const getN = (e) => {
    setN(e.target.value);
    setErrorText('')
  };

  const getMonthValue = (e) => {
    setMonthValue(e.target.value);
  };
  const getCvcValue = (e) => {
    setCvcValue(e.target.value);
    setCvcErrorText('')
  };

  return (
    <div className="main">
      <CardBack cvc={cvc} />
      <Cardfront name={name} number={number} month={month} year={year} />

      {visibility ? (
        <Confirmation confirmationClickHandler={confirmationClickHandler} />
      ) : (
        <Forms
          enterNumber={EnterNumberHandler}
          nameHandler={nameHandler}
          formClickHandler={formClickHandler}
          enterMonth={EnterMonthHandler}
          month={inputMonth}
          enterYear={EnterYearHandler}
          enterCvc={EnterCvcHandler}
          checkForN={getN}
          getMonthValue={getMonthValue}
          getCvcValue={getCvcValue}
          errorText={errorText}
          cvcErrorText={cvcErrorText}
          nameError = {nameError}
          numberError={numberError}
        />
      )}
    </div>
  );
}
export default Main;
