import { SnackbarProvider } from "notistack";
import { useEffect, useState } from "react";
import "./App.css";
import { peticion } from "./services/http";
import { SnackBarConfig } from "./services/message";

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
      <div className="App">{JSON.stringify(count)}</div>
    </>
  );
}

export default App;
