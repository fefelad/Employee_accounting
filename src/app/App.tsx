import { useEffect, useState } from "react";
import CreatEmployes from "../components/CreatEmployes/CreatEmployes";
import EmployesList from "../components/EmpluesList/EmployesList";
import Header from "../components/Header/Header";
import PeopleFilter from "../components/PeopleFilter/PeopleFilter";
import Input from "../shared/ui/Input/Input";
import "./App.css";
import { type Employes } from "../components/CreatEmployes/InterfaceEmployes";

function App() {
  const [faundEmployes, SetFaundEmployes] = useState("");
  const [RenderEmployes, SetRenderEmployse] = useState<Employes[]>([]);
  // const [employesDelete, SetEmployesDelete] = useState<Employes[]>([]);

  const HadleDelete = (id: string) => {
    SetRenderEmployse((emp) => emp.filter((emp) => emp.id !== id));
  };

  useEffect(() => {
    console.log(RenderEmployes);
  }, [RenderEmployes]);

  return (
    <>
      <div className="app">
        <Header />
        <div className="Creat_employes">
          <CreatEmployes dataEmployesList={SetRenderEmployse} />
        </div>
        <div className="serch_panel">
          <h3 className="serch_panel_title">Поиск сотрудников</h3>
          <Input
            value={faundEmployes}
            OnChange={SetFaundEmployes}
            placeholderText="Найти сотрудника"
          />
          <PeopleFilter />

          <div className="List"></div>
        </div>

        <div className="Employes_list">
          <EmployesList
            OnDeleteEmployes={HadleDelete}
            dataRenderList={RenderEmployes}
          />
        </div>
      </div>
    </>
  );
}

export default App;
