import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/container/pages/Home"
import CRM from "../src/container/pages/CRM"
import Selling from "../src/container/pages/Selling"
import Manufacturing from "../src/container/pages/Manufacturing"
import Overview from "./container/pages/Overview";
import Tasks from "./container/pages/Tasks"
import './App.scss'
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
export default function App() {

  return (
    <div>
      <Navbar />
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CRM" element={<CRM />} />
          <Route path="/Selling" element={<Selling />} />
          <Route path="/Manufacturing" element={<Manufacturing />} />
          <Route path="/Overview" element={<Overview />} />
          <Route path="/Tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}