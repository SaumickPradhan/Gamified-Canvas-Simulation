import React, { useState, useEffect } from "react";
import "./CalendarPage.css";

const GamifiedCalendarPage = () => {
  const [assignments, setAssignments] = useState(Array(28).fill(null));
  const [completedAssignments, setCompletedAssignments] = useState([]);

  useEffect(() => {
    // Dummy data for all available assignments
    const allAssignments = [
      "Design a Landing Page",
      "Write a Blog Post",
      "Create a Mockup",
      "Implement Responsive Design",
      "Build a Login System",
      // ... add more assignment names as needed
    ];

    // Shuffle the assignment array to randomize the order
    const shuffledAssignments = shuffleArray(allAssignments);

    // Randomly select assignments for the calendar without replacement
    const assignmentsData = Array(28).fill(null).map((_, index) => ({
      name: shuffledAssignments[index % shuffledAssignments.length],
      completed: false,
    }));

    setAssignments(assignmentsData);
  }, []); // Run this effect only once when the component mounts

  const toggleAssignment = (index) => {
    const newAssignments = [...assignments];
    newAssignments[index].completed = !newAssignments[index].completed;

    // Update the list of completed assignments
    setCompletedAssignments(
      newAssignments.filter((assignment) => assignment.completed).map((assignment) => assignment.name)
    );

    setAssignments(newAssignments);
  };

  // Calculate progress percentage
  const progressPercentage = (completedAssignments.length / assignments.length) * 100;

  // Function to shuffle an array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="calendar-container">
      <h1 className="calendar-heading">Assignment Calendar</h1>
      <div className="calendar">
        {/* Weekdays */}
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {/* Days */}
        <div className="days">
          {/* Empty cells for the previous month */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="empty-cell"></div>
          ))}
          {/* Days of the current month */}
          {Array.from({ length: 28 }).map((_, index) => (
            <div key={index} className={`day ${assignments[index]?.completed ? "completed" : ""}`}>
              <div className="day-number">{index + 1}</div>
              {assignments[index] ? (
                <button
                  className={`assignment-button ${assignments[index].completed ? "completed" : ""}`}
                  onClick={() => toggleAssignment(index)}
                >
                  {assignments[index].completed ? "Complete!" : assignments[index].name}
                </button>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      {/* Assignment Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
  );
};

export default GamifiedCalendarPage;
