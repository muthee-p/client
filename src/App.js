import React, {useState} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import {Homepage, Register, Login} from "./components/public"
import {Mental, Emergency, Insurance, Facilities, Drugs, Policies, InsuranceForm} from "./components/health";
import {Driving, Freight, Public, Vehicle} from './components/transport';
import {Ecommerce, Imports, International, TradePolicies} from './components/trade';
import {Cyber, Forensics, Jury, Rehab, Victim} from './components/crime';

function App() {
	
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/" element={<Layout />} >
      <Route path="health/mental" element={<Mental />} />
      <Route path="health/emergency" element={<Emergency />} />
      <Route path="health/insurance" element={<Insurance />} />
      <Route path="health/facilities" element={<Facilities />} />
      <Route path="health/policies" element={<Policies />} />
      <Route path="health/drugs" element={<Drugs />} />

      <Route path="trade/ecommerce" element={<Ecommerce />} />
      <Route path="trade/imports" element={<Imports />} />
      <Route path="trade/international" element={<International />} />
      <Route path="trade/policies" element={<TradePolicies />} />

      <Route path="crime/cyber" element={<Cyber />} />
      <Route path="crime/forensics" element={<Forensics />} />
      <Route path="crime/jury" element={<Jury />} />
      <Route path="crime/rehab" element={<Rehab />} />
      <Route path="crime/victim" element={<Victim />} />

      <Route path="transport/driving" element={<Driving />} />
      <Route path="transport/freight" element={<Freight />} />
      <Route path="transport/public" element={<Public />} />
      <Route path="transport/vehicle" element={<Vehicle />} />






      	
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="insuranceform" element={<InsuranceForm />} />
      </Routes>
    </div>
  );
}

export default App;
