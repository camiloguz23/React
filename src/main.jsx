
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AxiosInterceptor } from "./interceptor/axios.interceptor";

AxiosInterceptor();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider transitionDuration={1000*6} sx={{width:800}}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
