import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const InputGroupDemo = () => {
  const [checked1, setChecked1] = useState<boolean>(false);

  return (
    <div>
      <div className="card">
        <div className="grid p-fluid">
          <div className="col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <Checkbox
                  checked={checked1}
                  onChange={(e) => setChecked1(!checked1)}
                />
              </span>
              <InputText placeholder="Username" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGroupDemo;
