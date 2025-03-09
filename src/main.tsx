// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Lion from "./gams/Lion/Lion";
import { BrowserRouter, Routes, Route  } from "react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/lion" element={<Lion />} />
    </Routes>
  </BrowserRouter>
);
