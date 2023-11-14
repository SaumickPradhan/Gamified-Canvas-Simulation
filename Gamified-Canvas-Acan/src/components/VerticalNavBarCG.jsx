// VerticalNavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBarCG = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/ModulesPage">
          Modules
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/SyllabusSG">
          Syllabus
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/GradeBook">
          Grades
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/AssignmentPage">
          Assignments
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Zoom">
          Zoom
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/RewardCenter">
          Rewards
        </Link>
      </li>
    </ul>
  );
};

export default VerticalNavBarCG;
