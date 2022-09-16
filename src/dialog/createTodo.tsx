import React, { useState } from "react";
import { Chips } from "primereact/chips";

const ChipsDemo = () => {
  const [values1, setValues1] = useState<any>([]);

  return (
    <div>
      <div className="card p-fluid">
        <h5>Title</h5>
        <Chips value={values1} onChange={(e) => setValues1(e.value)} />
        <h5>Description</h5>
        <Chips value={values1} onChange={(e) => setValues1(e.value)} />
      </div>
    </div>
  );
};

export default ChipsDemo;
