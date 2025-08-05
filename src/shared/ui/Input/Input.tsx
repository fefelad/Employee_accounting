import { memo } from "react";
import "./Input.css";

interface InputProps {
  placeholderText: string;
  OnChange: (value: string) => void;
  value: string;
}

function Input({ placeholderText, OnChange, value }: InputProps) {
  return (
    <>
      <input
        className="input_serch"
        type="text"
        value={value}
        onChange={(e) => OnChange(e.target.value)}
        placeholder={placeholderText}
      />
    </>
  );
}

export default memo(Input);
