import Btn from "../../shared/ui/Btn/Btn";
import "./PeopleFilter.css";

function PeopleFilter() {
  return (
    <div className="people_filter_wrapper">
      <Btn textBtn="Все сотрудники" />
      <Btn textBtn="На повышение" />
      <Btn textBtn="Фильтрация по ЗП" />
    </div>
  );
}

export default PeopleFilter;
