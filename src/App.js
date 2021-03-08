import logo from "./logo.svg";
import "./App.css";
import Aspect from "./lib/AspectRatioBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="hello">
          <Aspect
            ratio="2:1"
            onClick={() => console.log("HI!")}
            style={{ backgroundColor: "blue" }}
          >
            <div className="testDiv"></div>
          </Aspect>
        </div>
      </header>
    </div>
  );
}

export default App;
