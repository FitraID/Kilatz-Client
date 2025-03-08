import { useState } from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import Dashboard from "./pages/v1/dashboard";
import NavBar from "./components/v1/navbar";
import Transaksi from "./pages/v1/transaksi";
import MasterBarang from "./pages/v1/master";
import ModifyBarang from "./pages/v1/master-add";
import SettingPage from "./pages/v1/settings";
import SignUpPage from "./pages/v1/signup";
import BillingPage from "./pages/billing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/master" element={<MasterBarang />} />
          <Route path="/master/barangs/:id" element={<ModifyBarang />} />
          <Route path="/master/barangs" element={<ModifyBarang />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </NavBar>
    </>
  );
}

export default App;
