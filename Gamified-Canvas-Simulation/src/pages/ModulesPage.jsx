// ModulesPage.jsx
import React, { useState } from "react";
import "./ModulesPage.css";
import Popup from "../components/Popup"; // Import the Popup component
import VerticalNavBar from "../components/VerticalNavBar";

const ModulesPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [points, setPoints] = useState(0);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [openWeeks, setOpenWeeks] = useState([]);

  const weeksData = [
    {
      weekNumber: 1,
      content: [
        { type: "content", title: "Syllabus", file: "/moduleFiles/ui/course_info/syllabus.html", points: 20, checked: false},
        { type: "presentation", title: "Course Introduction", file: "/moduleFiles/ui/presentations/01-01-intro.pptx", points: 10, checked: false},
        { type: "presentation", title: "Usability", file: "/moduleFiles/ui/presentations/01-02-usability.pptx", points: 10, checked: false},
        { type: "presentation", title: "Norman's Principles of Discoverability", file: "/moduleFiles/ui/presentations/01-03-norman-principals-discoverability", points: 10, checked: false},
        { type: "assignment", title: "Assignment 1 - Getting Started!", file: "/moduleFiles/ui/assignments/assignment_01.html", points: 50, checked: false},
      ],
    },
    {
      weekNumber: 2,
      content: [
        { type: "presentation", title: "The User - Part-1", file: "moduleFiles/ui/presentations/01-04-the-user-p1.pptx", points: 10, checked: false},
        { type: "presentation", title: "The User - Part-2", file: "moduleFiles/ui/presentations/01-05-the-user-p2.pptx", points: 10, checked: false},
        { type: "presentation", title: "The User - Part-3", file: "moduleFiles/ui/presentations/01-06-the-user-p3.pptx", points: 10, checked: false},
      ],
    },
    {
      weekNumber: 3,
      content: [
        { type: "presentation", title: "Sketching Part-1", file: "/moduleFiles/ui/presentations/03-01-sketching-p1.pptx", points: 10, checked: false},
        { type: "presentation", title: "Sketching Part-2", file: "/moduleFiles/ui/presentations/03-02-sketching-p2.pptx", points: 10, checked: false},
        { type: "content", title: "Sketching Design Challenge-1", file: "/moduleFiles/ui/pages/inclass_01.html", points: 20, checked: false},
        { type: "content", title: "Sketching Design Challenge-2", file: "/moduleFiles/ui/pages/inclass_02.html", points: 20, checked: false},
        { type: "content", title: "Sketching Design Challenge-3", file: "/moduleFiles/ui/pages/inclass_03.html", points: 20, checked: false},
        { type: "content", title: "Sketching the Interface - Instructions for Assignment-2", file: "/moduleFiles/ui/assignments/assignment_02_b.html", points: 50, checked: false},
        { type: "assignment", title: "Assignment 2 - Sketching the Interface Directions for Submission", file: "/moduleFiles/ui/assignments/assignment_02.html", points: 50, checked: false},
      ],
    },
    {
      weekNumber: 4,
      content: [
        { type: "presentation", title: "The Web", file: "/moduleFiles/ui/presentations/04-01-web-p1.pptx", points: 10, checked: false},
        { type: "content", title: "Tutorial-0: The Web", file: "/moduleFiles/ui/pages/tutorial0.html", points: 20, checked: false},
        { type: "presentation", title: "HTML & CSS", file: "/moduleFiles/ui/presentations/04-02-html-css.pptx", points: 10, checked: false},
        { type: "content", title: "Tutorial-1: HTML, DOM, SVG & CSS", file: "/moduleFiles/ui/pages/tutorial1.html", points: 20, checked: false},
        { type: "presentation", title: "CSS", file: "/moduleFiles/ui/presentations/04-03-css.pptx", points: 10, checked: false},
        { type: "content", title: "Tutorial-2: CSS and Page Layouts", file: "/moduleFiles/ui/pages/tutorial2.html", points: 20, checked: false},
        { type: "content", title: "HTML & CSS In-Class Activity-1", file: "/moduleFiles/ui/pages/inclass_05.html", points: 20, checked: false},
        { type: "content", title: "HTML & CSS In-Class Activity-2", file: "/moduleFiles/ui/pages/inclass_06.html", points: 20, checked: false},
        { type: "content", title: "HTML & CSS In-Class Activity-3", file: "/moduleFiles/ui/pages/inclass_07.html", points: 20, checked: false},
        { type: "assignment", title: "Assignment 3 - Week-4 In-Class Work", file: "/moduleFiles/ui/assignments/assignment_04.html", points: 50, checked: false},
      ],
    },
    {
      weekNumber: 5,
      content: [
        { type: "content", title: "Tutorial-3: Running a Local Server", file: "/moduleFiles/ui/pages/tutorial3.html", points: 20, checked: false},
        { type: "presentation", title: "JavaScript Part-1", file: "/moduleFiles/ui/presentations/05-01-javascript-p1.pptx", points: 10, checked: false},
        { type: "presentation", title: "JavaScript Part-2", file: "/moduleFiles/ui/presentations/05-02-javascript-p2.pptx", points: 10, checked: false},
        { type: "presentation", title: "JavaScript Part-3", file: "/moduleFiles/ui/presentations/05-03-javascript-p3.pptx", points: 10, checked: false},
        { type: "content", title: "Tutorial-4: JavaScript Part-1", file: "/moduleFiles/ui/pages/tutorial4.html", points: 20, checked: false},
        { type: "content", title: "Tutorial-5: JavaScript Part-2", file: "/moduleFiles/ui/pages/tutorial5.html", points: 20, checked: false},
        { type: "content", title: "JavaScript In-Class Activity-1", file: "/moduleFiles/ui/pages/inclass_09.html", points: 20, checked: false},
        { type: "content", title: "JavaScript In-Class Activity-2", file: "/moduleFiles/ui/pages/inclass_10.html", points: 20, checked: false},
        { type: "assignment", title: "Assignment 4 - Week-5 In-Class Work", file: "/moduleFiles/ui/assignments/assignment_05.html", points: 50, checked: false},
      ],
    },
    {
      weekNumber: 6,
      content: [
        { type: "presentation", title: "Design Principles Part-1", file: "/moduleFiles/ui/presentations/06-01-design-principles-p1.pptx", points: 10, checked: false},
        { type: "presentation", title: "Design Principles Part-2", file: "/moduleFiles/ui/presentations/06-02-design-principles-p2.pptx", points: 10, checked: false},
        { type: "presentation", title: "Design Principles - Color", file: "/moduleFiles/ui/presentations/06-03-design-principles-color.pptx", points: 10, checked: false},
        { type: "content", title: "Design Principles In-Class Activity-1", file: "/moduleFiles/ui/pages/inclass_11.html", points: 20, checked: false},
        { type: "content", title: "Design Principles In-Class Activity-2", file: "/moduleFiles/ui/pages/inclass_12.html", points: 20, checked: false},
      ],
    },
    {
      weekNumber: 7,
      content: [
        { type: "presentation", title: "People Part-1", file: "/moduleFiles/ui/presentations/07-02-people.pptx", points: 10, checked: false},
        { type: "presentation", title: "People Part-2", file: "/moduleFiles/ui/presentations/07-03-people.pptx", points: 10, checked: false},
      ],
    },
    {
      weekNumber: 8,
      content: [
        { type: "presentation", title: "People Part-3", file: "/moduleFiles/ui/presentations/08-02-people.pptx", points: 10, checked: false},
        { type: "presentation", title: "People Part-4", file: "/moduleFiles/ui/presentations/08-03-people.pptx", points: 10, checked: false},
      ],
    },
    {
      weekNumber: "Project-1",
      content: [
        { type: "project", title: "Project-1 - Details", file: "/moduleFiles/ui/pages/project1.html", points: 30, checked: false},
        { type: "assignment", title: "Assignment 5 - Select Smart Object", file: "/moduleFiles/ui/assignments/06.html", points: 50, checked: false},
        { type: "assignment", title: "Assignment 6 - Project-1 Design Checkpoint", file: "/moduleFiles/ui/assignments/assignment_03.html", points: 50, checked: false},
        { type: "assignment", title: "Assignment 7 - Project-1 Implementation", file: "/moduleFiles/ui/assignments/07.html", points: 50, checked: false},
        { type: "assignment", title: "Assignment 8 - Project-1 Documentation", file: "/moduleFiles/ui/assignments/08.html", points: 50, checked: false},
      ],
    },
  ];

  const handleWeekChange = (weekNumber) => {
    setSelectedWeek((prevOpenWeek) => (prevOpenWeek === weekNumber ? null : weekNumber));
  };  
  
  const handleCheckboxChange = (weekNumber, itemIndex, itemPoints) => {
    setCheckedItems((prevCheckedItems) => {
      const key = `${weekNumber}-${itemIndex}`;
      const updatedCheckedItems = { ...prevCheckedItems, [key]: !prevCheckedItems[key] };
  
      const updatedPoints = weeksData.reduce((acc, week) => {
        return acc + week.content.reduce((weekAcc, item, index) => {
          const itemKey = `${week.weekNumber}-${index}`;
          if (updatedCheckedItems[itemKey]) {
            return weekAcc + (item.points || 0);
          }
          return weekAcc;
        }, 0);
      }, 0);
  
      // Display custom pop-up
      setPopupMessage(`ACan Points Updated! Total Points: ${updatedPoints}`);
      setIsPopupOpen(true);
  
      setPoints(updatedPoints); // Update the points state
  
      return updatedCheckedItems;
    });
  };  

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const expandAll = () => {
    setOpenWeeks(weeksData.map((week) => week.weekNumber));
  };
  
  const collapseAll = () => {
    setOpenWeeks([]);
  };  

  return (
    <div>
      <VerticalNavBar/> 
    <div className="modules-page">
  
      <h1 className="modules-heading">Modules</h1>
      <div className="button-container" style={{ margin: "15px" }}>
        <button onClick={expandAll} style={{ marginRight: "10px" }}>Expand All</button>
        <button onClick={collapseAll}>Collapse All</button>
      </div>
      <div className="week-dropdowns">
        {weeksData.map((week) => (
          <details key={week.weekNumber} open={openWeeks.includes(week.weekNumber)}>
            <summary
              onClick={() => handleWeekChange(week.weekNumber)}
              className={openWeeks.includes(week.weekNumber) ? "active arrow-up" : "arrow-down"}
            >
              Level {week.weekNumber}
            </summary>
            <div className="content-list">
              {week.content.map((item, index) => (
                <div key={index} className={`content-item ${item.type}`}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedItems[`${week.weekNumber}-${index}`] || false}
                      onChange={() => handleCheckboxChange(week.weekNumber, index, item.points)}
                    />
                    <span className="content-title">{item.title}</span>
                    {item.file && (
                      <span className="file-links">
                        <a href={item.file} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-eye"></i>
                        </a>{" "}
                        |
                        <a href={item.file} download>
                          <i className="fas fa-download"></i>
                        </a>
                      </span>
                    )}
                  </label>
                </div>
              ))}
            </div>
          </details>
          
        ))}
        {/* Custom pop-up */}
        {isPopupOpen && <Popup message={popupMessage} onClose={closePopup} />}
      </div>
    </div>
    </div>
  );
};

export default ModulesPage;
