import Button from "./Button";

const buttons = [
  ["7","8","9","/"],
  ["4","5","6","*"],
  ["1","2","3","-"],
  ["0",".","=","+"],
  ["C","←"]
];

export default function ButtonPanel({ handleClick }) {
  return (
    <div className="button-panel">
      {buttons.flat().map((b, i) => (
        <Button key={i} label={b} onClick={handleClick} />
      ))}
    </div>
  );
}
