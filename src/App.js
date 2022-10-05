import "./App.css";
import { useRef, useState } from "react";

function App() {
  const birthDate = useRef();
  const [message, setMessage] = useState("Please enter the date.");
  const palCheck = () => {
    let DateStr = birthDate.current.value.replaceAll("-", "");
    let tempDate = DateStr.split("");
    let newYearString = null;
    let year = parseInt(tempDate.slice(0, 4).join(""));

    do {
      year -= 1;
      let arrayedYear = year.toString().split("");
      newYearString = [...arrayedYear, ...arrayedYear.reverse()];
      newYearString.splice(4, 0, "-");
      newYearString.splice(7, 0, "-");
    } while (new Date(newYearString.join("")).toString() === "Invalid Date");
    console.log(
      timeDifference(
        new Date(newYearString.join("")),
        new Date(birthDate.current.value)
      )
    );
  };
  return (
    <div className="App">
      <h1>Palindrome Birthday ? 🤔 </h1>
      <label htmlFor="birthDate">Please enter your birthday date :</label>
      <div className="form-control">
        <input type="date" name="birthDate" id="birthDate" ref={birthDate} />
      </div>
      <div className="form-control">
        <button className="btn" onClick={palCheck}>
          Submit
        </button>
      </div>
      <div className="form-control">
        <p>{message}</p>
      </div>
    </div>
  );
}

const timeDifference = (DateOne, DateTwo) => {
  console.log(DateOne);
  return (DateTwo.getTime() - DateOne.getTime()) / (1000 * 3600 * 24);
};
export default App;
