import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignIn } from "./pages/Signin";
import { Pagenotfound } from "./pages/Pagenotfound";
import { Details } from "./components/Details";
import { Checkout } from "./components/Checkout";

function App() {


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  )
}

export default App
