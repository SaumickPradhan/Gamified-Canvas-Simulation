import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerticalNavBar from "../components/VerticalNavBar";
import { useNavigate } from "react-router-dom";
import Zoom from "../components/Zoom";

const UserInterface = () => {
  return (
      // <div style={{ display: "flex" }}>
        <VerticalNavBar />
      // </div>
  );
};

export default UserInterface;
