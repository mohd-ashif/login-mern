import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

import EditButton from "./Home";
import ProfilePage from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProfilePage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

