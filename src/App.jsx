import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const initialText =
    "Я говорю вам: нужно носить в себе еще хаос, чтобы быть в состоянии родить танцующую звезду. Я говорю вам: в вас есть еще хаос.";
  const text = initialText.split("");

  let indexDone = input.length;
  const textDone = text.slice(0, indexDone);
  const [mistakeIndex, setMistakeIndex] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input != textDone.join("")) {
      setMistakeIndex(textDone.join("").length);
    } else {
      setMistakeIndex(null);
    }
  }, [input]);

  return (
    <div className="App">
      <div className="main-container">
        <input type="text" value={input} onChange={(e) => handleInput(e)} />
        <div className="text-container">
          {textDone.map((letter, index) => {
            console.log(mistakeIndex - 1, index);
            // return mistakeIndex === null ||
            //   (mistakeIndex - 1 !== index && mistakeIndex - 1 > index) ? (
            //   <div className="letterDone">{letter}</div>
            // ) : (
            //   <div className="letterError">{letter}</div>
            // );
            return mistakeIndex === null ? (
              <div className="letterDone">{letter}</div>
            ) : mistakeIndex - 1 === index ? (
              <div className="letterError">{letter}</div>
            ) : mistakeIndex - 1 > index ? (
              <div className="letterDone">{letter}</div>
            ) : (
              <h1>222</h1>
            );
          })}
          {text.slice(indexDone).map((letter) => {
            return <div className="letter">{letter}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
