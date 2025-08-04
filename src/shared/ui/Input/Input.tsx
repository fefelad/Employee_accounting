import { memo, useState, type SetStateAction } from "react";
import "./Input.css";

interface InputProps {
  placeholderText: string;
}

function Input({ placeholderText }: InputProps) {
  const [values, SetValue] = useState("");

  const ValueInput = (event: { target: { value: SetStateAction<string> } }) => {
    SetValue(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <input
      className="input_serch"
      value={values}
      onChange={ValueInput}
      type="text"
      placeholder={placeholderText}
    />
  );
}

export default memo(Input);
