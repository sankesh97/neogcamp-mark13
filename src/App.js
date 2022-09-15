import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Palindrome Birthday ? 🤔 </h1>
      <label htmlFor="birthDate">When is your Birthday ?</label>
      <div className="form-control">
        <input type="text" name="birthDate" id="birthDate" />
      </div>
      <div className="form-control">
        <button className="btn">Submit</button>
      </div>
      <div className="form-control">
        <p>The OutPut Text</p>
      </div>
    </div>
  );
}

export default App;
