import { useState } from "react";

export default function ButtonCounter() {
  //Crear un  Estado
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}> {count} </button>;
}
