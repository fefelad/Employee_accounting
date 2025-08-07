import { memo } from "react";
import "./Prize.css";

interface PrizeProps {
  OnClick: () => void;
  isActive: boolean;
}

function Prize({ OnClick, isActive }: PrizeProps) {
  return (
    <button onClick={OnClick} className="prizebtn">
      {isActive ? "★" : "☆"}
    </button>
  );
}

export default memo(Prize);
