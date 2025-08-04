import { memo } from "react";
import "./Btn.css";

interface BtnProps {
  textBtn: string;
  OnClick: () => void;
}

function Btn({ textBtn, OnClick }: BtnProps) {
  return (
    <button className="Btn" onClick={OnClick}>
      {textBtn}
    </button>
  );
}

export default memo(Btn);
