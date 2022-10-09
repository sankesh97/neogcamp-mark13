import "./App.css";
import { useRef, useState } from "react";

function App() {
  const birthDate = useRef();

  const [message, setMessage] = useState("Please enter the date.");
  const palCheck = () => {
    const beforeBday = PalindromeCheckerPlus(
      birthDate.current.value.replaceAll("-", "")
    );
    const afterBday = PalindromeCheckerMinus(
      birthDate.current.value.replaceAll("-", "")
    );
    const PlusDiff = timeDifference(
      new Date(birthDate.current.value),
      new Date(beforeBday)
    );
    const MinusDiff = timeDifference(
      new Date(afterBday),
      new Date(birthDate.current.value)
    );
    if (
      birthDate.current.value
        .replaceAll("-", "")
        .split("")
        .reverse()
        .join("") === birthDate.current.value.replaceAll("-", "")
    ) {
      setMessage(`Your Birthday is a Palindrome 🎉`);
    } else if (PlusDiff > MinusDiff) {
      setMessage(
        `The nearest palindrome date is ${afterBday}, you missed by ${MinusDiff} days`
      );
    } else {
      setMessage(
        `The nearest palindrome date is ${beforeBday}, you missed by ${PlusDiff} days`
      );
    }
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

const PalindromeCheckerMinus = (date) => {
  let DateStr = date;
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
  return newYearString.join("");
};
const PalindromeCheckerPlus = (date) => {
  let DateStr = date;
  let tempDate = DateStr.split("");
  let newYearString = null;
  let year = parseInt(tempDate.slice(0, 4).join(""));

  do {
    year += 1;
    let arrayedYear = year.toString().split("");
    newYearString = [...arrayedYear, ...arrayedYear.reverse()];
    newYearString.splice(4, 0, "-");
    newYearString.splice(7, 0, "-");
  } while (new Date(newYearString.join("")).toString() === "Invalid Date");
  return newYearString.join("");
};
const timeDifference = (DateOne, DateTwo) => {
  return (DateTwo.getTime() - DateOne.getTime()) / (1000 * 3600 * 24);
};
export default App;
