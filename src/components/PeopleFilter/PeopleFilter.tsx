import Btn from "../../shared/ui/Btn/Btn";
import "./PeopleFilter.css";

interface PeopleFilter {
  onFilterChange: (type: "all" | "premia") => void;
  currentFilter: "all" | "premia";
}

function PeopleFilter({ onFilterChange, currentFilter }: PeopleFilter) {
  return (
    <div className="people_filter_wrapper">
      <Btn
        active={currentFilter === "all"}
        OnClick={() => onFilterChange("all")}
        textBtn="Все сотрудники"
      />
      <Btn
        active={currentFilter === "premia"}
        OnClick={() => onFilterChange("premia")}
        textBtn="На повышение"
      />
    </div>
  );
}

export default PeopleFilter;
