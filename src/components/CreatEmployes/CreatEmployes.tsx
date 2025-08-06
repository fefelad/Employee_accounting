import { useEffect, useState } from "react";
import Btn from "../../shared/ui/Btn/Btn";
import Input from "../../shared/ui/Input/Input";
import "./CreatEmployes.css";
import { type Employes } from "./InterfaceEmployes";
import { type Dispatch, type SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

interface CreatEmployesProps {
  dataEmployesList: Dispatch<SetStateAction<Employes[]>>;
}

function CreatEmployes({ dataEmployesList }: CreatEmployesProps) {
  const [ValueName, SetValueName] = useState("");
  const [ValueSalary, SetValueSalary] = useState("");
  // const [employeesList, setEmployeesList] = useState<Employes[]>([]);

  const handleAddEmployee = () => {
    dataEmployesList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ValueName: ValueName,
        ValueSalary: Number(ValueSalary),
        Premia: false,
      },
    ]);
    SetValueName("");
    SetValueSalary("");
  };

  useEffect(() => {
    console.log(dataEmployesList);
  }, [dataEmployesList]);

  return (
    <>
      <h4 className="CreatEmployes_title">Добавление сотрудников</h4>
      <div className="CreatEmployes_wrapper">
        <Input
          value={ValueName}
          OnChange={SetValueName}
          placeholderText={"Имя сотрудника"}
        />
        <Input
          value={ValueSalary}
          OnChange={SetValueSalary}
          placeholderText={"Зарплата"}
        />
        <Btn OnClick={handleAddEmployee} textBtn="Добавить" />
      </div>
    </>
  );
}

export default CreatEmployes;
