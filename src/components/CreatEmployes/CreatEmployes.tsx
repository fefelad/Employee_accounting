import Btn from "../../shared/ui/Btn/Btn";
import Input from "../../shared/ui/Input/Input";
import "./CreatEmployes.css";

function CreatEmployes() {
  return (
    <>
      <h4 className="CreatEmployes_title">Добавление сотрудников</h4>
      <div className="CreatEmployes_wrapper">
        <Input placeholderText={"Имя сотрудника"} />
        <Input placeholderText={"Зарплата"} />
        <Btn textBtn="Добавить" />
      </div>
    </>
  );
}

export default CreatEmployes;
