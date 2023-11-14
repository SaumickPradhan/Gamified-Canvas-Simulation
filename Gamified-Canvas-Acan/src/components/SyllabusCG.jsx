import React from 'react';
import './Syllabus.css';
import VerticalNavBarCG from './VerticalNavBarCG';

const SyllabusCG = () => {
  return (
      <div>
          < VerticalNavBarCG/>
    <div className="computer-graphics-Syllabus">
      <header>
        <h1>🖥️ Welcome to Computer Graphics Exploration! 🎨</h1>
        <p>Embark on a Visual Journey with Prof. [Instructor Name]</p>
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
          <strong>Instructor:</strong> Prof. [Instructor Name]
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
        <h2>Embark on the Computer Graphics Exploration</h2>
        <p>
          Welcome to the world of Computer Graphics! This course is an exploration of visual computing and graphic
          rendering. Join Prof. [Instructor Name] on a quest to understand, create, and manipulate digital visual
          representations!
        </p>
        <p>
          Throughout the semester, you'll delve into topics such as 2D and 3D graphics, rendering algorithms,
          shading, and more, applying your knowledge through hands-on projects.
        </p>
      </section>

      <section className="achievements">
        <h2>Graphics Skills to Acquire</h2>
        <ul>
          <li>🎨 2D Graphics Artist</li>
          <li>🌐 3D Modeling Maestro</li>
          <li>💻 Rendering Wizard</li>
          <li>🎓 Shader Guru</li>
        </ul>
      </section>

      <section className="learning-outcomes">
        <h2>Course Learning Outcomes</h2>
        <ul>
          <li>🖼️ Understand principles of computer graphics</li>
          <li>🎨 Create 2D and 3D graphics</li>
          <li>💡 Implement rendering algorithms</li>
          <li>🌈 Apply shading techniques</li>
          <li>🖱️ Interact with graphical user interfaces</li>
        </ul>
      </section>

      <section className="project-tasks">
        <h2>🖥️ Project Assignments - Schedule</h2>
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
            {/* Project tasks for each week */}
            <tr>
              <td>1</td>
              <td>[Dates]</td>
              <td>Introduction to Computer Graphics</td>
              <td>🎨 Project: 2D Graphics Exploration</td>
            </tr>
            {/* Add similar rows for other weeks */}
          </tbody>
        </table>
      </section>

      <section className="achievement-unlocked">
        <h2>🏆 Achievement Unlocked - Project Mastery</h2>
        <p>Earn Points and Master the Art of Computer Graphics!</p>
        <ul>
          <li>
            🌟 Visual Creativity
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </li>
          <li>
            🖌️ Project Implementation
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </li>
          <li>
            💻 Rendering Excellence
            <div className="progress-bar" style={{ width: '40%' }}></div>
          </li>
        </ul>
      </section>

      <section className="resources">
        <h2>📚 Graphics Resources</h2>
        <p>Explore these resources to enhance your graphic design skills:</p>
        <ul>
          <li>📖 [Recommended Book]</li>
          <li>🖥️ [Online Tutorials]</li>
          {/* Add more resource options */}
        </ul>
      </section>

      {/* Add more sections for grading, communication, etc. */}

      <footer>
        <p>🏆 Level up and conquer the Computer Graphics Exploration! 🎨</p>
      </footer>
    </div>
    </div>
  );
};

export default SyllabusCG;