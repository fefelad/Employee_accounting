import CreatEmployes from "../components/CreatEmployes/CreatEmployes";
import EmployesList from "../components/EmpluesList/EmployesList";
import Header from "../components/Header/Header";
import PeopleFilter from "../components/PeopleFilter/PeopleFilter";
import Input from "../shared/ui/Input/Input";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="serch_panel">
          <h3 className="serch_panel_title">Поиск сотрудников</h3>
          <Input placeholderText="Найти сотрудника" />
          <PeopleFilter />
        </div>
        <div className="Employes_list">
          <EmployesList />
        </div>
        <div className="Creat_employes">
          <CreatEmployes />
        </div>
      </div>
    </>
  );
}

export default App;
