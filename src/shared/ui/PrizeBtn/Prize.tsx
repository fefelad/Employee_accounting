import { memo } from "react";
import "./Prize.css";

import PrizeImg from "../../../assets/Prize.png";
import { type BtnProps } from "../Btn/InterfaceBtn";

function Prize({ OnClick }: BtnProps) {
  return (
    <button onClick={OnClick} className="prizebtn">
      <img className="prizeimg" src={PrizeImg} alt="prize" />
    </button>
  );
}

export default memo(Prize);
