// import { useParams } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


// import React from 'react';
// import './Dashboard.css';
// const Dashboard = () => {
//     const navi = useNavigate();
//   const { userInput } = useParams();

//     const handleCourseClick = (courseName) => {
//         // alert(`Clicked on ${courseName}`);
//         navi(`/UserInterface`);
//         // Add your logic for handling the button click here
//     };

//     const handleRewardsCenterClick = () => {
//         alert('Clicked on Rewards Center');
//         // Add your logic for handling the button click here
//     };

//     const handleRewardsHistoryClick = () => {
//         alert('Clicked on Rewards History');
//         // Add your logic for handling the button click here
//     };

//     return (
//         <div className = "main-cont"> <h1>Welcome Back { userInput }</h1>
//         <div className="dashboard-container">
            
//             <div className="points-component">
//                 {/* Left Component with Points */}
//                 <div className="points-box">
//                     <h3>ACan Stats:</h3>
//                     <p>Acan Points</p> {/* Replace with actual points */}
//                     <p>100 pts</p>
//                     <button className="points-button" onClick={handleRewardsCenterClick}>
//                         Rewards Center
//                     </button>
//                     <button className="points-button" onClick={handleRewardsHistoryClick}>
//                         Rewards History
//                     </button>
//                 </div>
//             </div>
//             <div className="courses-component">
//                 {/* Middle Component with Course Names and Progress Bars */}
//                 <div className="course-box">
//                     <button className="course-button" onClick={() => handleCourseClick("Course 1")}>
//                         Course 1
//                     </button>
//                     <div className="progress-container">
//                         <span className="progress-number">60%</span>
//                         <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
//                             <div className="progress" style={{ width: '60%'}}></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="course-box">
//                     <button className="course-button" onClick={() => handleCourseClick("Course 2")}>
//                         Course 2
//                     </button>
//                     <div className="progress-container">
//                         <span className="progress-number">80%</span>
//                         <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
//                             <div className="progress" style={{ width: '80%'}}></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="course-box">
//                     <button className="course-button" onClick={() => handleCourseClick("Course 1")}>
//                         Course 3
//                     </button>
//                     <div className="progress-container">
//                         <span className="progress-number">20%</span>
//                         <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
//                             <div className="progress" style={{ width: '20%' }}></div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* Add more course boxes as needed */}
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';

import './Dashboard.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {


      const navi = useNavigate();
  const { userInput } = useParams();
  const presets = ["sam", "nehang", "nachiket","Sam", "Nehang", "Nachiket"];
  useEffect(() => {
    // Fetch data based on userInput
  }, [userInput]);

    const handleCourseClick = (courseName) => {
        // alert(`Clicked on ${courseName}`);
        navi(`/Syllabus`);
        // Add your logic for handling the button click here
    };

    const handleCourseClickSG = () => {
        // alert(`Clicked on ${courseName}`);
        navi(`/SyllabusSG`);
        // Add your logic for handling the button click here
    };

    const handleCourseClickSD = () => {
        // alert(`Clicked on ${courseName}`);
        navi(`/SyllabusSD`);
        // Add your logic for handling the button click here
    };

    const handleRewardsCenterClick = () => {
        // alert('Clicked on Rewards Center');
        navi('/RewardCenter');
        // Add your logic for handling the button click here
    };

    const handleRewardsHistoryClick = () => {
        alert('Clicked on Rewards History');
        
    };

    const handleprogress = () => {
        navi('/Progress');
    }

    const handleGPprogress = () => {
        navi('/GraphicsProgress');
    };

    const handleSDprogress = () => {
        navi('/ProjectProgress');
    };

  
    let points;

    if (presets.includes(userInput)) {
      // Assign points based on presets for specific users
      switch (userInput) {
        case "sam":
          points = 50;
          break;
        case "nehang":
          points = 75;
          break;
        case "nachiket":
          points = 100;
          break;
          case "Sam":
          points = 50;
          break;
        case "Nehang":
          points = 75;
          break;
        case "Nachiket":
          points = 100;
          break;
      }
    } else {
      // Assign random points for other users
      points = Math.floor(Math.random() * 100) + 1;
    }
    return (
        <div> <h1>Welcome Back { userInput }!</h1>
        <div className="dashboard-container">
            
            <div className="points-component">
                {/* Left Component with Points */}
                <div className="points-box">
                    <h3>ACan Stats:</h3>
                    <p>Acan Points</p> {/* Replace with actual points */}
                    <p>{points} pts</p>
                    <button className="points-button" onClick={handleRewardsCenterClick}>
                        Rewards Center
                    </button>
                    <button className="points-button" onClick={handleRewardsHistoryClick}>
                        Rewards History
                    </button>
                </div>
            </div>
            <div className="courses-component">
                {/* Middle Component with Course Names and Progress Bars */}
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClick("Course 1")}>
                        User Interface
                    </button>
                    <div className="progress-container" onClick={() => handleprogress()}>
                        {/* <span className="progress-number">60%</span> */}
                        60%
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '60%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClickSG()}>
                        Computer Graphics
                    </button>
                    <div className="progress-container" onClick={() => handleGPprogress()}>
                        {/* <span className="progress-number">80%</span> */}
                        80%
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '80%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="course-box">
                    <button className="course-button" onClick={() => handleCourseClickSD()}>
                        Senior Design
                    </button>
                    <div className="progress-container" onClick={() => handleSDprogress()}>
                        {/* <span className="progress-number">20%</span> */}
                       20%
                        <div className="progress-bar" style={{ backgroundColor: '#0000'}}>
                            <div className="progress" style={{ width: '20%' }}></div>
                        </div>
                    </div>
                </div>
                {/* Add more course boxes as needed */}
            </div>
        </div>
        </div>
    );
}

export default Dashboard;

