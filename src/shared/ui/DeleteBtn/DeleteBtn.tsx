import { memo } from "react";
import "./DeleteBtn.css";

import delet from "../../../assets/delete.png";

import { type BtnProps } from "../Btn/InterfaceBtn";

function DeleteBtn({ OnClick }: BtnProps) {
  return (
    <button onClick={OnClick} className="DeleteBtn">
      <img className="DeleteImg" src={delet} alt="delete" />
    </button>
  );
}

export default memo(DeleteBtn);
