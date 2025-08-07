import "./Header.css";
import { type Employes } from "../CreatEmployes/InterfaceEmployes";
import { useMemo, useState } from "react";

interface HederProps {
  DataInfoEmplyes: Employes[];
}

function Header({ DataInfoEmplyes }: HederProps) {
  const PremiaCount = useMemo(() => {
    return DataInfoEmplyes?.filter((emp) => emp.Premia).length || 0;
  }, [DataInfoEmplyes]);

  return (
    <div className="header">
      <h1 className="header_title">Сотрудники в компании OOO SeregaBog</h1>
      <h2 className="header_text_employes">
        Общее количество сотрудников: {DataInfoEmplyes.length}
      </h2>
      <p className="header_text_count_premia">
        Сотрудники с премией: {PremiaCount}
      </p>
    </div>
  );
}

export default Header;
