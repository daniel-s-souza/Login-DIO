import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/register";
import Feed from "./pages/feed";
import HomePage from "./pages/homepage"
import Login from "./pages/login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
