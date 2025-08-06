import "./EmployesListPeople.css";

interface EmployesListPeople {
  Name: string;
  Salary: number;
}

function EmployesListPeople({ Name, Salary }: EmployesListPeople) {
  return (
    <>
      <div className="EmployesList_wrapper">
        <p className="EmployesList_Name">{Name}</p>
        <div className="EmployesList_settings">
          <p className="EmployesList_Salary">{Salary + "$"}</p>
        </div>
      </div>
    </>
  );
}

export default EmployesListPeople;
