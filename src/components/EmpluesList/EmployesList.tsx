import EmployesListPeople from "../EmployesListPeople/EmployesListPeople";
import "./EmployesList.css";

import { type Employes } from "../CreatEmployes/InterfaceEmployes";

interface employeesList {
  dataRenderList: Employes[];
}

function EmployesList({ dataRenderList }: employeesList) {
  return (
    <ul className="Employes_list_items">
      <div className="colom_name">
        <p className="colum_text_name">Имя сотрудника</p>
        <p className="colum_text_salary">Зп сотрудника</p>
      </div>
      {dataRenderList.map((employes, index) => (
        <li key={index}>
          <EmployesListPeople
            Name={employes.ValueName}
            Salary={employes.ValueSalary}
          />
        </li>
      ))}
    </ul>
  );
}

export default EmployesList;
