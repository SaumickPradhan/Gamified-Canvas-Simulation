// AssignmentPage.jsx
import React, { useState } from "react";
import "./AssignmentPage.css";
import Popup from "./Popup"; // Update the path accordingly
import VerticalNavBar from "./VerticalNavBar";

const AssignmentPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState("");
  const [acanPoints, setAcanPoints] = useState(100);
  const [professorPolicies, setProfessorPolicies] = useState({
    extensionPoints: Math.floor(Math.random() * 10) + 1,
    bonusPoints: Math.floor(Math.random() * 10) + 1,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isExtensionSelected, setIsExtensionSelected] = useState(false);
  const [isBonusSelected, setIsBonusSelected] = useState(false);
  const [textEntry, setTextEntry] = useState("");
  const [fileUpload, setFileUpload] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    const assignments = fetchAssignmentsForCourse(course);
    setSelectedAssignment(""); // Reset selected assignment when the course changes
  };

  const handleAssignmentChange = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleRedeemExtension = () => {
    setAcanPoints((prevPoints) => {
      const updatedPoints = prevPoints - professorPolicies.extensionPoints;
      updateAcanPointsInBackend(updatedPoints);
      return updatedPoints;
    });
    setIsExtensionSelected(true);
    showPopup(`Extension redeemed! -${professorPolicies.extensionPoints} ACan Points`);
  };

  const handleRedeemBonus = () => {
    setAcanPoints((prevPoints) => {
      const updatedPoints = prevPoints - professorPolicies.bonusPoints;
      updateAcanPointsInBackend(updatedPoints);
      return updatedPoints;
    });
    setIsBonusSelected(true);
    showPopup(`Bonus redeemed! -${professorPolicies.bonusPoints} ACan Points`);
  };

  const handleUndoExtensionSelection = () => {
    setAcanPoints((prevPoints) => {
      const updatedPoints = prevPoints + professorPolicies.extensionPoints;
      updateAcanPointsInBackend(updatedPoints);
      return updatedPoints;
    });
    setIsExtensionSelected(false);
  };

  const handleUndoBonusSelection = () => {
    setAcanPoints((prevPoints) => {
      const updatedPoints = prevPoints + professorPolicies.bonusPoints;
      updateAcanPointsInBackend(updatedPoints);
      return updatedPoints;
    });
    setIsBonusSelected(false);
  };

  const handleTextEntryChange = (e) => {
    setTextEntry(e.target.value);
  };

  const handleFileUploadChange = (e) => {
    setFileUpload(e.target.files[0]);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const showPopup = (message) => {
    setIsPopupOpen(true);
  };

  const showSuccessPopup = () => {
    setIsSuccessPopupOpen(true);
  };

  const closeSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the form and update ACan Points
    setIsSubmitted(true);
    showSuccessPopup();

    setTimeout(() => {
      setIsSuccessPopupOpen(false);
      setIsSubmitted(false);
      const intervalId = setInterval(() => {
        if (!isSuccessPopupOpen) {
          clearInterval(intervalId);
          window.location.reload(); // Refresh the page after an additional 5 seconds
        }
      }, 1000);
    }, 1500);
  };
  
  const fetchAssignmentsForCourse = (course) => {
    // Mock function, replace with actual logic
    return ["Assignment 1", "Assignment 2", "Assignment 3"];
  };

  const updateAcanPointsInBackend = (points) => {
    // Mock function, replace with actual logic
    console.log(`ACan Points updated to: ${points}`);
  };

  return (
    <div>
      < VerticalNavBar />
    <div className="assignment-page">
  
      <h1 className="assignment-heading">Assignment Submission</h1>
      <div className="acan-points-container">
        <p>Your ACan Points: {acanPoints}</p>
      </div>
      <div className="dropdown-container">
        <label>Select Course:</label>
        <select onChange={(e) => handleCourseChange(e.target.value)}>
          <option value="">Select a Course</option>
          <option value="Course1">Course 1</option>
          <option value="Course2">Course 2</option>
        </select>
      </div>
      {selectedCourse && (
        <div className="dropdown-container">
          <label>Select Assignment:</label>
          <select onChange={(e) => handleAssignmentChange(e.target.value)}>
            <option value="">Select an Assignment</option>
            {fetchAssignmentsForCourse(selectedCourse).map((assignment) => (
              <option key={assignment} value={assignment}>
                {assignment}
              </option>
            ))}
          </select>
        </div>
        
      )}
      {selectedAssignment && (
        <div className="policies-container">
          <p>
            <strong>Your Professor's Bonus/Extension Policies:</strong>
            <br />
            Extension Points: {professorPolicies.extensionPoints}
            {"  "}
            {!isExtensionSelected ? (
              <button onClick={handleRedeemExtension}>Redeem Extension</button>
            ) : (
              <button onClick={handleUndoExtensionSelection}>Undo Extension</button>
            )}
          </p>
          <p>
            Bonus Points: {professorPolicies.bonusPoints}
            {"   "}
            {!isBonusSelected ? (
              <button onClick={handleRedeemBonus}>Redeem Bonus</button>
            ) : (
              <button onClick={handleUndoBonusSelection}>Undo Bonus</button>
            )}
          </p>
        </div>
      )}
      {selectedAssignment && (
        <div className="submission-container">
          <h2>Assignment Submission</h2>
          <form>
            <div>
              <label>File Upload:</label>
              <input type="file" onChange={handleFileUploadChange} />
            </div>
            <div>
              <label>Text Entry:</label>
              <textarea rows="4" onChange={handleTextEntryChange} />
            </div>
            <button onClick={handleSubmit}>Submit Assignment</button>
            {isSuccessPopupOpen && (
                <Popup
                message="Assignment Submitted Successfully!"
                onClose={closeSuccessPopup}
                />
            )}
          </form>
        </div>
      )}
      {isPopupOpen && (
        <Popup
          message={`ACan Points Updated! Total Points: ${acanPoints}`}
          onClose={handlePopupClose}
        />
      )}
    </div>
    </div>
  );
};

export default AssignmentPage;