import Div100vh from "react-div-100vh";
import "./index.css";
import { Button } from "primereact/button";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import ChipsDemo from "../dialog/createTodo";
import InputGroupDemo from "../todoList/todoList";

const MyTodoList: React.FC = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  const onClick = () => setDisplayBasic((prev) => !prev);

  const renderFooter = (name: string) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={onClick}
          className="p-button-text"
        />
        <Button label="Create" icon="pi pi-check" onClick={onClick} autoFocus />
      </div>
    );
  };

  return (
    <Div100vh>
      <div className="cardlist">
        <div className="card-flex">
          MY List I Want To Do
          <div>
            <InputGroupDemo />
          </div>
          <div>
            <Button
              icon="pi pi-plus"
              label="Add List"
              className="p-button-rounded"
              style={{ backgroundColor: "green" }}
              onClick={onClick}
            />
          </div>
        </div>
      </div>

      <Dialog
        header="What do you want to do?"
        visible={displayBasic}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic")}
        onHide={onClick}
      >
        <p>
          <ChipsDemo />
        </p>
      </Dialog>
    </Div100vh>
  );
};

export default MyTodoList;
