import React, { useState } from "react";
import './page.css'

function Forms(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [monthValues, setMonthValues]=useState('')

  // function to format number

  function formatedNumber(values) {
    let val = values.replace(/\D/g, "");
    let val2 = val.match(/(\d{0,4})?(\d{0,4})?(\d{0,4})?(\d{0,4})/);

    let result = "";
    if (val2[1]) {
      result = val2[1];
    }

    if (val2[2]) {
      result = result.concat(" " + val2[2]);
    }
    if (val2[3]) {
      result = result.concat(" " + val2[3]);
    }
    if (val2[4]) {
      result = result.concat(" " + val2[4]);
    }
    return result;
  }

  const onchange = (e) => {
    setCardNumber(formatedNumber(e.target.value));
  };
  // const onMonthChange=(e)=>{
  //   setMonthValues(e.target.value)
  // }

  console.log(monthValues)

  return (
    <div className="forms">
      <label htmlFor="holdername">CARDHOLDER NAME</label>

      <input
        className="holdername"
        placeholder="e.g Jane Appleseed"
        onInput={props.nameHandler}
      ></input>

      <label htmlFor="card-number">CARD NUMBER</label>

      <input
        className="card-number-input"
        placeholder="e.g 1234 5678 9123 0000"
        onInput={props.enterNumber}
        onChange={onchange}
        value={cardNumber}
        required
        autoComplete="none"
      ></input>

      <div className="date-labels">
        <label htmlFor="card-date-month">EXP.DATE(MM/YY)</label>
        <label htmlFor="card-date-year" style={{ marginRight: "30px" }}>
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
