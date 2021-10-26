import { useState } from "react";
export const CounterComponent = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>{num}</h1>
      <button
        className="inc btn btn-success mr-2"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="dec btn btn-info ml-2"
        onClick={() => {
          setNum(num - 1);
        }}
      >
        {" "}
        -{" "}
      </button>
    </>
  );
};
