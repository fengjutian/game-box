// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router";
import App from "./App";
import Lion from "./gams/Lion/Lion";
import King from "./gams/King/King";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lion" element={<Lion />} />
      <Route path="/king" element={<King />} />
    </Routes>
  </BrowserRouter>
);
