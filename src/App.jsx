import { useState } from "react";
import "./App.css";

function Result(props) {
  return <div className="result">{props.result}</div>;
}

function Input(props) {
  return <div className="input">{props.input}</div>;
}

function Button(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  function reset() {
    setInput("");
    setResult("");
  }

  function write(character) {
    setInput((prevInput) => prevInput + character);
  }

  function calculate() {
    try {
      setResult(eval(input.replace(/%/g, "*0.01")));
      setInput("");
    } catch (error) {
      setResult("Error");
      setInput("");
    }
  }

  return (
    <>
      <div className="calculationWindow">
        <Result result={result} setResult={setResult} />
        <Input input={input} setInput={setInput} />
      </div>
      <div className="buttonBlock">
        <Button className="button" value="AC" onClick={reset} />
        <Button className="button" value="+/-" />
        <Button className="button" value="%" onClick={() => write("%")} />
        <Button
          className="button accent"
          value="/"
          onClick={() => write("/")}
        />
        <Button className="button" value="7" onClick={() => write(7)} />
        <Button className="button" value="8" onClick={() => write(8)} />
        <Button className="button" value="9" onClick={() => write(9)} />
        <Button
          className="button accent"
          value="x"
          onClick={() => write("*")}
        />
        <Button className="button" value="4" onClick={() => write(4)} />
        <Button className="button" value="5" onClick={() => write(5)} />
        <Button className="button" value="6" onClick={() => write(6)} />
        <Button
          className="button accent"
          value="-"
          onClick={() => write("-")}
        />
        <Button className="button" value="1" onClick={() => write(1)} />
        <Button className="button" value="2" onClick={() => write(2)} />
        <Button className="button" value="3" onClick={() => write(3)} />
        <Button
          className="button accent"
          value="+"
          onClick={() => write("+")}
        />
        <Button className="button span-2" value="0" onClick={() => write(0)} />
        <Button className="button" value="." onClick={() => write(".")} />
        <Button className="button accent" value="=" onClick={calculate} />
      </div>
    </>
  );
}
