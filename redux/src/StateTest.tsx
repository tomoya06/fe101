import React from "react";
import { FC, useState } from "react";

const someValue = {
  hello: "world",
};

let cnt = 1;

const StateTest: FC = () => {
  const [val, setVal] = useState(someValue);

  console.log(`StateTest component rendering #${cnt++}`);

  return (
    <div>
      <div>{val.hello}</div>
      <button
        onClick={() => {
          setVal(someValue);
        }}
      >
        click me
      </button>

      <button
        onClick={() => {
          setVal({
            ...someValue,
          });
        }}
      >
        click me to set diff
      </button>
    </div>
  );
};

export default StateTest;
