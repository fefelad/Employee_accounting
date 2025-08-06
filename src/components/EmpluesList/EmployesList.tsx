import EmployesListPeople from "../EmployesListPeople/EmployesListPeople";
import "./EmployesList.css";

import { type Employes } from "../CreatEmployes/InterfaceEmployes";
import DeleteBtn from "../../shared/ui/DeleteBtn/DeleteBtn";
import Prize from "../../shared/ui/PrizeBtn/Prize";

interface employeesList {
  dataRenderList: Employes[];
  OnDeleteEmployes: (id: string) => void;
}

function EmployesList({ dataRenderList, OnDeleteEmployes }: employeesList) {
  return (
    <ul className="Employes_list_items">
      <div className="colom_name">
        <p className="colum_text_name">Имя сотрудника</p>
        <p className="colum_text_salary">Зп сотрудника</p>
      </div>
      {dataRenderList.map((emp) => (
        <li key={emp.id}>
          <EmployesListPeople Name={emp.ValueName} Salary={emp.ValueSalary} />
          <div className="Settings_Btn">
            <DeleteBtn OnClick={() => OnDeleteEmployes(emp.id)} />
            <Prize />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EmployesList;
