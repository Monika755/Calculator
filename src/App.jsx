import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css"; 
import { evaluate } from "mathjs";

export default function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light");

const handleClick = (label) => {
  if (label === "C") setInput("");
  else if (label === "←") setInput(input.slice(0, -1));
  else if (label === "=") {
    try {
      setInput(evaluate(input).toString());
    } catch {
      setInput("Error");
    }
  } else {
    setInput(input + label);
  }
};

  return (
    <div className={`calculator ${theme}`}>
      <h1>Calculator</h1>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <Display value={input || "0"} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
}
