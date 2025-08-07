import { memo } from "react";
import "./Btn.css";

interface BtnProps {
  textBtn: string;
  OnClick: () => void;
  active?: boolean;
}

function Btn({ textBtn, OnClick, active = false }: BtnProps) {
  return (
    <button className={`Btn ${active ? "Btn--active" : ""}`} onClick={OnClick}>
      {textBtn}
    </button>
  );
}

export default memo(Btn);
