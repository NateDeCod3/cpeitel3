import './App.css';
import { useState } from "react";

// Display Function
function Display({ display }) {
  return <div>{display}</div>;
}

// Key Function
function Key({ label, clickHandler, className }) {
  return <button className={className} onClick={clickHandler}>{label}</button>;
}

// App Function
function App() {
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  // Buttons
  const keyOne = () => { setDisp("Being On Time"); };
  const keyTwo = () => { setDisp("Making An Effort"); };
  const keyThree = () => { setDisp("Being High Energy"); };
  const keyFour = () => { setDisp("Having A Positive Attitude"); };
  const keyFive = () => { setDisp("Being Passionate"); };
  const keySix = () => { setDisp("Using Good Body Language"); };
  const keySeven = () => { setDisp("Being Coachable"); };
  const keyEight = () => { setDisp("Doing A Little Extra"); };
  const keyNine = () => { setDisp("Being Prepared"); };
  const keyZero = () => { setDisp("Having A Strong Work Ethic"); };

  // Reset Click Handler
  const clrClickHandler = (e) => {
    e.preventDefault();
    setDisp("10 Things That Require Zero Talent");
  };

  // Name Click Handler
  const nameClickHandler = () => {
    setDisp("NATHANIEL MANANSALA");
  };

  // QUESTIONS
  const whatILearnedHandler = () => {
    setDisp("I learned about system integrations and developing a React app.");
  };

  const whatIWantToLearnHandler = () => {
    setDisp("I want to learn to improve my coding skills being versatile in many languages.");
  };

  const howWillILearnHandler = () => {
    setDisp("I will practice diligently with the skills I've acquired so far.");
  };

  return (
    <div className="App">
      {/* Header */}
      <div className="Header">
        Nathaniel Manansala - IT3A
      </div>

      {/* Main Section */}
      <div className="Calc">
        {/* Display */}
        <div className="Disp">
          <Display display={disp} />
        </div>

        {/* Buttons */}
        <div className="Buttons">
          <Key label={1} clickHandler={keyOne} />
          <Key label={2} clickHandler={keyTwo} />
          <Key label={3} clickHandler={keyThree} />
          <Key label={4} clickHandler={keyFour} />
          <Key label={5} clickHandler={keyFive} />
          <Key label={6} clickHandler={keySix} />
          <Key label={7} clickHandler={keySeven} />
          <Key label={8} clickHandler={keyEight} />
          <Key label={9} clickHandler={keyNine} />
          <Key label={0} clickHandler={keyZero} />
          <Key label={"RESET"} clickHandler={clrClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
          <Key label={"What I learned?"} clickHandler={whatILearnedHandler} className="full-width" />
          <Key label={"What I want to learn?"} clickHandler={whatIWantToLearnHandler} className="full-width" />
          <Key label={"How will I learn?"} clickHandler={howWillILearnHandler} className="full-width" />
        </div>
      </div>
    </div>
  );
}

export default App;
