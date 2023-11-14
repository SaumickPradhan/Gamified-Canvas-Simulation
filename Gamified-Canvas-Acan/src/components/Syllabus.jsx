// GamifiedSyllabus.jsx

import React from 'react';
import './Syllabus.css';
import VerticalNavBar from './VerticalNavBar'

const Syllabus = () => {
  return (
    <div> < VerticalNavBar/>
    <div className="gamified-syllabus">
      
      <header>
        <h1>🎮 Welcome to UI Design Adventure! 🚀</h1>
        <p>Embark on a Gamified Journey with Dr. Jillian Aurisano</p>
      </header>

      <section className="course-info">
        <h2>Course Information</h2>
        <p>
          <strong>Class Times:</strong> Mon, Wed, Fri 1:25pm-2:20pm
        </p>
        <p>
          <strong>Location:</strong> Baldwin 661
        </p>
        <p>
          <strong>Instructor:</strong> Dr. Jillian Aurisano
        </p>
        <p>
          <strong>Email:</strong> jillian.aurisano@uc.edu
        </p>
        <p>
          <strong>Office:</strong> 812b Rhodes
        </p>
        <p>
          <strong>Student Hours:</strong> After class M and F from 2:20-3:00pm, or by appointment
        </p>
      </section>

      <section className="course-description">
        <h2>Embark on the UI Design Quest</h2>
        <p>
          Welcome to the UI Design Adventure! This course is a gamified journey through the world of user interface
          design. Join Dr. Jillian Aurisano on a quest to explore, create, and level up your UI skills!
        </p>
        <p>
          Throughout the semester, you'll engage in quests like sketching, prototyping, programming, and critiquing to
          enhance your UI abilities.
        </p>
      </section>

      <section className="achievements">
        <h2>Level Up Your Skills</h2>
        <ul>
          <li>🎨 Sketching Novice</li>
          <li>🛠️ Prototyping Apprentice</li>
          <li>💻 UI Programmer</li>
          <li>🤔 Critique Master</li>
        </ul>
      </section>

      <section className="learning-outcomes">
        <h2>Course Learning Outcomes</h2>
        <ul>
          <li>🚀 Employ usability engineering principles</li>
          <li>🎯 Design user interfaces with a user-centered approach</li>
          <li>🛠️ Prototype user interfaces to refine designs</li>
          <li>📝 Ideate, sketch, elaborate, and communicate user experiences</li>
          <li>🔍 Evaluate UIs using human-computer interaction principles</li>
          <li>🔍 Conduct heuristic evaluation of user interfaces</li>
          <li>👥 Conduct user testing of computing applications</li>
        </ul>
      </section>

      <section className="quest-board">
        <h2>🗺️ Quest Board - Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Dates</th>
              <th>Topics</th>
              <th>Projects</th>
            </tr>
          </thead>
          <tbody>
            {/* Gamified rows for each week */}
            <tr>
              <td>1</td>
              <td>8/22, 8/24, 8/26</td>
              <td>Introduction, Usability, Learnability, Efficiency, Safety</td>
              <td>🚀 Quest: Sketching Basics</td>
            </tr>
            {/* Add similar rows for other weeks */}
          </tbody>
        </table>
      </section>

      <section className="achievement-unlocked">
        <h2>🏆 Achievement Unlocked - Grading</h2>
        <p>Earn ACan Points and Level Up!</p>
        <ul>
          <li>
            🌟 Participation
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </li>
          <li>
            🚀 Projects
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </li>
          <li>
            🏁 Final Exam
            <div className="progress-bar" style={{ width: '40%' }}></div>
          </li>
        </ul>
      </section>

      <section className="rewards-marketplace">
        <h2>🛍️ Rewards Center</h2>
        <p>Redeem Your Hard-Earned Points for In-Game Benefits!</p>
        <ul>
          <li>🕐 Assignment Extension (50 points)</li>
          <li>🌟 Bonus Grade (+5% on a project, 100 points)</li>
          {/* Add more redemption options */}
        </ul>
      </section>

      {/* Add more sections for policies, communication, etc. */}

      <footer>
        <p>🏆 Level up and conquer the UI Design Adventure! 🚀</p>
      </footer>
    </div>
    </div>
  );
};
export default Syllabus;