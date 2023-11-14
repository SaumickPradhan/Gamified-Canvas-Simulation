import React from 'react';
import './Progress.css';

const Progress = () => {
  // Sample gamified progress data (replace it with actual data from your application)
  const gamifiedProgressData = {
    xp: 500,
    level: 3,
    badges: [
      { name: 'Novice Explorer', tier: 'Bronze', icon: '🥉', earned: true },
      { name: 'Quiz Master', tier: 'Silver', icon: '🥈', earned: false },
      // Add more badges as needed
    ],
    courseProgress: 75,
    assignmentProgress: 90,
    quizProgress: 50,
    lecturesAttended: 20,
  };

  const calculateBadgeTier = (xp) => {
    if (xp >= 1000) {
      return 'Gold';
    } else if (xp >= 500) {
      return 'Silver';
    } else {
      return 'Bronze';
    }
  };

  const getRingStyle = (percentage) => {
    const progress = Math.min(100, Math.max(0, percentage));
    const rotation = (progress / 100) * 360;
    return {
      transform: `rotate(${rotation}deg)`,
    };
  };

  return (
    <div className="container">
      <h1>User Interface Progress</h1>
      <p>ACan Points: {gamifiedProgressData.xp}</p>
      <p>Level: {gamifiedProgressData.level}</p>

      <h2>Badges</h2>
      <ul>
        {gamifiedProgressData.badges.map((badge, index) => (
          <li key={index} className="badge-item">
            <span className="badge-icon">{badge.icon}</span>
            <span className="badge-info">
              {badge.name} - Tier {badge.tier} - {badge.earned ? 'Earned' : 'Not Earned'}
            </span>
          </li>
        ))}
      </ul>

      <h2>Course Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(gamifiedProgressData.courseProgress)}></div>
        <span className="progress-number">{gamifiedProgressData.courseProgress}%</span>
      </div>

      <h2>Assignment Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(gamifiedProgressData.assignmentProgress)}></div>
        <span className="progress-number">{gamifiedProgressData.assignmentProgress}%</span>
      </div>

      <h2>Quiz Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(gamifiedProgressData.quizProgress)}></div>
        <span className="progress-number">{gamifiedProgressData.quizProgress}%</span>
      </div>

      <h2>Lectures Attended</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(gamifiedProgressData.lecturesAttended)}></div>
        <span className="progress-number">{gamifiedProgressData.lecturesAttended}</span>
      </div>
    </div>
  );
};

export default Progress;