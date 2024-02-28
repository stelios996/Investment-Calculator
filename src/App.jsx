import { useState } from "react";
import UserInput from "./components/UserInput"
import Result from "./components/Result"

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const inputIsValid = userInput.duration>=1;

  function handleUserInput(inputID, newValue){
      setUserInput( prevUserInput => {
          return {
              ...prevUserInput,
              [inputID] : +newValue
          }
      });
  }

  return (
    <>
      <UserInput onChangeUserInput={handleUserInput} userInput={userInput} />
      {inputIsValid && <Result userInput={userInput} />}
      {!inputIsValid && <p className="center">Please enter a duration value &#8805; 1</p>}
    </>
  )
}

export default App
