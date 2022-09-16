import Div100vh from "react-div-100vh";
import "./index.css";
import { Button } from "primereact/button";

const MyTodoList: React.FC = () => {
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
            />
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default MyTodoList;
