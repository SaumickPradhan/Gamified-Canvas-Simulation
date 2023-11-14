// VerticalNavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./VerticalNavBar.css";

const VerticalNavBarSD = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/ModulesPage">
          Modules
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/SyllabusSD">
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

export default VerticalNavBarSD;
