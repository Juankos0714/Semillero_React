import { useState } from "react";

interface InputProps {
  title: string;
  id: string;
  autoComplete: string;
  typeText:string;
}

function Input(props: InputProps) {
  const [inputValue, setInputValue] = useState("");
  console.log("🚀 ~ App ~ inputValue:", inputValue);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setInputValue(event.target.value);
  };

  return (
    <>
      <label htmlFor="name">
        {props.title}:
        <input
          style={{ marginLeft: "8px", border: "3px solid grey" }}
          id={props.id}
          autoComplete={props.autoComplete}
          type={props.typeText}
          onChange={handleInputChange}
        />
      </label>
    </>
  );
}
export default Input;
