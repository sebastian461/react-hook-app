import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(0);

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />
      </h2>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}
      >
        {" "}
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
