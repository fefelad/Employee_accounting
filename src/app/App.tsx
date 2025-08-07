import { useEffect, useMemo, useState } from "react";
import CreatEmployes from "../components/CreatEmployes/CreatEmployes";
import EmployesList from "../components/EmpluesList/EmployesList";
import Header from "../components/Header/Header";
import PeopleFilter from "../components/PeopleFilter/PeopleFilter";
import Input from "../shared/ui/Input/Input";
import "./App.css";
import { type Employes } from "../components/CreatEmployes/InterfaceEmployes";

function App() {
  const [faundEmployes, SetFaundEmployes] = useState("");
  const [RenderEmployes, SetRenderEmployse] = useState<Employes[]>(() => {
    const localStrogeEmployes = localStorage.getItem("employes");
    return localStrogeEmployes ? JSON.parse(localStrogeEmployes) : [];
  }); // я ебал такое
  const [activeFilter, setActiveFilter] = useState<"all" | "premia">("all");

  useEffect(() => {
    try {
      localStorage.setItem("employes", JSON.stringify(RenderEmployes));
    } catch {
      console.log("error");
    }
  }, [RenderEmployes]);

  const FilterEmployes = useMemo(() => {
    return activeFilter === "premia"
      ? RenderEmployes.filter((emp) => emp.Premia)
      : RenderEmployes;
  }, [RenderEmployes, activeFilter]);

  const SerchEmployes = useMemo(() => {
    return FilterEmployes.filter((emp) =>
      emp.ValueName.toLowerCase().includes(faundEmployes.toLowerCase())
    );
  }, [FilterEmployes, faundEmployes]);

  const HadleDelete = (id: string) => {
    SetRenderEmployse((emp) => emp.filter((emp) => emp.id !== id));
  };

  const togglePremia = (id: string) => {
    SetRenderEmployse((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, Premia: !emp.Premia } : emp))
    );
  };

  return (
    <>
      <div className="app">
        <Header DataInfoEmplyes={RenderEmployes} />
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
          <PeopleFilter
            onFilterChange={setActiveFilter}
            currentFilter={activeFilter}
          />

          <div className="List"></div>
        </div>

        <div className="Employes_list">
          <EmployesList
            onTogglePrize={togglePremia}
            OnDeleteEmployes={HadleDelete}
            dataRenderList={SerchEmployes}
          />
        </div>
      </div>
    </>
  );
}

export default App;
