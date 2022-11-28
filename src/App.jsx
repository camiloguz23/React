import { useEffect, useState } from "react";
import "./App.scss";
import Date from "./date/Date";
import Select from "./dropdown/DropDown";
import { peticion } from "./services/http";
import { SnackBarConfig } from "./services/message";
import Switch from "./switchBtn/Switch";

function App() {
  const [count, setCount] = useState({});

  const fetchApi = async () => {
    const { data } = await peticion();
    setCount(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <SnackBarConfig />
      <div className="container">
          <input className="input" type="text" id="text" placeholder=" " />
          <label htmlFor='text' className="label">Input</label>
      </div>
      <Switch/>
      <Date/>
      <Select options={['example 1','example 2', 'example 3']} title={'type of example'}/>
    </>
  );
}

export default App;
