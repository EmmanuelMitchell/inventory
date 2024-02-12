import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";
import Customers from "../../pages/Customers";

export default function AppRout() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}
