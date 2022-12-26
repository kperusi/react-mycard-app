import React, { useState } from "react";
import './page.css'
import { formatedNumber } from "./FormatedNumber";
import { CheckForLetters } from "./CheckforLetters";

function Forms(props) {
  const [cardNumber, setCardNumber] = useState("");
  


  
  const onchange = (e) => {
    setCardNumber(formatedNumber(e.target.value));
    
  };

console.log(CheckForLetters(cardNumber))

  return (
    <div className="forms">
      <label htmlFor="holdername" className="label">CARDHOLDER NAME</label>

      <input
        className="holdername"
        placeholder="e.g Jane Appleseed"
        onInput={props.nameHandler}
        type ='text'

      ></input>

      <label htmlFor="card-number"className="label">CARD NUMBER</label>

      <input
        className="card-number-input"
        placeholder="e.g 1234 5678 9123 0000"
        onInput={props.enterNumber}
        onChange={onchange}
        value={cardNumber}
        required
        autoComplete="none"
        type={'text'}
        maxLength={19}
      ></input>
      {CheckForLetters(cardNumber)&& <p className="number-error">Wrong format, numbers only</p>}

      <div className="date-labels">
        <label htmlFor="card-date-month" className="label" >EXP.DATE(MM/YY)</label>
        <label htmlFor="card-date-year"className="label" style={{ marginRight: "30px" }}>
          CVC
        </label>
      </div>

      <div className="date-container">
        <input
          className="card-date-month"
          placeholder="MM"
          onInput={props.enterMonth}
          inputMode="numeric"
          onChange={props.getMonthValue}
          required
          maxLength={2}
        
        ></input>

        <input
          className="card-date-year"
          placeholder="YY"
          onInput={props.enterYear}
          inputMode='numeric'
          onChange={props.checkForN}
          maxLength={2}
        ></input>

        <input
          className="cvc"
          placeholder="e.g 123"
          onInput={props.enterCvc}
          onChange={props.getCvcValue}
          inputMode="numeric"
          maxLength={3}
        ></input>
      </div>
      <div className="error-grp">
        <p className="date-error">{props.errorText}</p>
        <p className="cvc-error">{props.cvcErrorText}</p>
      </div>
      <button
        className="form-button"
        onClick={() => {
          props.formClickHandler();
        }}
      >
        confirm
      </button>
    </div>
  );
}
export default Forms;
