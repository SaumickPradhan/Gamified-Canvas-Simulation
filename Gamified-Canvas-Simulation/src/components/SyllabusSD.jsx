import React from 'react';
import './Syllabus.css';
import VerticalNavBarSD from './VerticalNavBarSD';

const SyllabusSD = () => {
  return (
    <div>
      < VerticalNavBarSD/>
    <div className="senior-design-syllabus">
      <header>
        <h1>🎓 Welcome to Senior Design Project! 🚀</h1>
        <p>Embark on a Journey with Dr. [Instructor Name]</p>
      </header>

      <section className="course-info">
        <h2>Course Information</h2>
        <p>
          <strong>Class Times:</strong> [Class Days and Times]
        </p>
        <p>
          <strong>Location:</strong> [Classroom Location]
        </p>
        <p>
          <strong>Instructor:</strong> Dr. [Instructor Name]
        </p>
        <p>
          <strong>Email:</strong> [Instructor Email]
        </p>
        <p>
          <strong>Office:</strong> [Instructor Office Location]
        </p>
        <p>
          <strong>Student Hours:</strong> [Office Hours Information]
        </p>
      </section>

      <section className="course-description">
        <h2>Embark on the Senior Design Project</h2>
        <p>
          Welcome to the Senior Design Project! This course is a culmination of your academic journey, where you will
          apply your skills and knowledge to solve real-world problems. Join Dr. [Instructor Name] on a quest to
          conceptualize, design, and implement a meaningful project!
        </p>
        <p>
          Throughout the semester, you'll work on a comprehensive project, collaborating with your team to address
          challenges and deliver a viable solution.
        </p>
      </section>

      <section className="achievements">
        <h2>Project Milestones</h2>
        <ul>
          <li>📅 Project Proposal Submission</li>
          <li>📋 Project Design Review</li>
          <li>💻 Implementation Phase</li>
          <li>📊 Project Presentation</li>
        </ul>
      </section>

      <section className="learning-outcomes">
        <h2>Course Learning Outcomes</h2>
        <ul>
          <li>🚀 Apply engineering principles to solve real-world problems</li>
          <li>🎯 Collaborate effectively in a team setting</li>
          <li>🛠️ Design and implement a comprehensive solution</li>
          <li>📝 Communicate technical ideas clearly and concisely</li>
          <li>🔍 Evaluate the success and challenges of your project</li>
        </ul>
      </section>

      <section className="project-tasks">
        <h2>🛠️ Project Tasks - Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Dates</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {/* Project tasks for each week */}
            <tr>
              <td>1</td>
              <td>[Dates]</td>
              <td>Project Planning and Team Formation</td>
            </tr>
            {/* Add similar rows for other weeks */}
          </tbody>
        </table>
      </section>

      <section className="achievement-unlocked">
        <h2>🏆 Achievement Unlocked - Project Progress</h2>
        <p>Earn Points and Level Up!</p>
        <ul>
          <li>
            🌟 Team Collaboration
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </li>
          <li>
            🚀 Project Implementation
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </li>
          <li>
            📊 Project Presentation
            <div className="progress-bar" style={{ width: '40%' }}></div>
          </li>
        </ul>
      </section>

      <section className="rewards-marketplace">
        <h2>🛍️ Rewards Center</h2>
        <p>Redeem Your Hard-Earned Points for Incentives!</p>
        <ul>
          <li>🕐 Project Extension (50 points)</li>
          <li>🌟 Bonus Recognition (+5% on project grade, 100 points)</li>
          {/* Add more redemption options */}
        </ul>
      </section>

      {/* Add more sections for project guidelines, communication, etc. */}

      <footer>
        <p>🏆 Level up and conquer the Senior Design Project! 🚀</p>
      </footer>
    </div>
    </div>
  );
};

export default SyllabusSD;
