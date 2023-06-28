import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HeaderComponent from "./Header/Header";

function AfterLogin() {
  return (
    <div>
      <Routes>
        <Route path="/header" element={<HeaderComponent />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
        <Route path="/home" element={<Navigate replace to="/home" />} />
      </Routes>
    </div>
  );
}

export default AfterLogin;
