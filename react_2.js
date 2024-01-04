import "./styles.css";
import { useState } from "react";
export default function App() {
  const [value, setvalue] = useState("abc.gmail");

  function handlechange(e) {
    // setvalue(abc.gmail);
    // console.log(e);
    setvalue(e.target.value);
  }
  console.log(value);
  return (
    <div>
      <label form="email">Email </label>
      <select value={value} onChange={(e) => handlechange(e.target.value)}>
        <option value={"abc.gmail"}>abc.gmail</option>
        <option value={"def.gmail"}>def.gmail</option>
        <option value={"ghi.gmail"}>ghi.gmail</option>
      </select>
      <input
        form="password"
        id="password"
        placeholder="Enter your password"
      ></input>
    </div>
  );
}
