import React, { useState } from 'react';
import './Zoom.css';
import VerticalNavBar from './VerticalNavBar';

const Zoom = () => {
  // Sample lectures data
  const [lectures, setLectures] = useState([
    { id: 1, title: 'Introduction to React', points: 10, status: 'Not Attended' },
    { id: 2, title: 'State and Props in React', points: 15, status: 'Not Attended' },
    { id: 3, title: 'Styling in React', points: 10, status: 'Not Attended' },
    { id: 4, title: 'React Router', points: 15, status: 'Not Attended' },
    // Add more lectures as needed
  ]);

  // Calculate the total points
  const totalPoints = lectures.reduce((total, lecture) => total + (lecture.status === 'Attended' ? lecture.points : 0), 0);

  // Function to handle attending a lecture
  const handleAttendLecture = (lectureId) => {
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture.id === lectureId ? { ...lecture, status: 'Attended' } : lecture
      )
    );
  };

  return (
    <div>
       < VerticalNavBar/>
    <div className="zoom-lectures">

      <h1>Zoom Lectures</h1>
      
      <div className="total-points">
        <p>Total Points: {totalPoints}</p>
      </div>

      <div className="lecture-list">
        <h2>Lecture Attendance</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Points</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((lecture) => (
              <tr key={lecture.id}>
                <td>{lecture.title}</td>
                <td>{lecture.status}</td>
                <td>{lecture.points}</td>
                <td>
                  {lecture.status === 'Not Attended' && (
                    <button onClick={() => handleAttendLecture(lecture.id)}>Attend</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Zoom;