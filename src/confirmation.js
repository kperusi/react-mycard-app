import React from "react";
import img1 from "./images/icon-complete.svg";
function Confirmation(props) {
//   const backToMain = () => {
//     let main = document.querySelector(".forms");
//     let confirmation = document.querySelector(".confirmation");

//     if(main.classList.contains('hide')){
//         main.classList.remove("hide"); 
//     }
  
// main.classList.add('show')
//     confirmation.classList.add("hide");
//   };

  return (
    <div className="confirmation">
      <img src={img1} alt="imagelogo" />

      <h1 className="thanks" style={{ textAlign: "center" }}>
        THANK YOU!
      </h1>
      <p className="para" style={{ textAlign: "center" }}>
        We've added your card details
      </p>

      <button className="continue-button" style={{}} onClick={props.confirmationClickHandler}>
        continue
      </button>
    </div>
  );
}
export default Confirmation;
