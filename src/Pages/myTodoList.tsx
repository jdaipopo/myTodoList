import Div100vh from "react-div-100vh";
import "./index.css";
import { Button } from "primereact/button";
import { useState } from "react";
import { Dialog } from "primereact/dialog";

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
        <Button label="Yes" icon="pi pi-check" onClick={onClick} autoFocus />
      </div>
    );
  };

  return (
    <Div100vh>
      <div className="cardlist">
        <div className="card-flex">
          MY List I Want To Do
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit sunt voluptatum error voluptas. Reprehenderit
            delectus, nostrum enim a sed quod doloremque? Praesentium saepe
            repellendus consequatur rerum itaque sit architecto aut error
            pariatur deserunt, odit voluptate id placeat excepturi molestiae
            tempora fugit dignissimos provident, beatae officia nisi. Id
            deserunt fugit, natus assumenda incidunt porro exercitationem, optio
            dolor eius quae culpa itaque facilis? Adipisci vel harum eaque
            reiciendis rem velit corrupti laudantium recusandae. Tenetur
            molestiae fuga quaerat nostrum provident error ducimus quod
            perspiciatis? Nisi ab ex nemo quas, magnam omnis dolor obcaecati
            amet maiores esse est et quidem similique nobis eum enim!
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
        header="Header"
        visible={displayBasic}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic")}
        onHide={onClick}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Dialog>
    </Div100vh>
  );
};

export default MyTodoList;
