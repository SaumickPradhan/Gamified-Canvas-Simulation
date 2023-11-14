import React from 'react';
import './Progress.css';

const ProjectProgress = () => {
  // Sample project progress data (replace it with actual data from your application)
  const projectProgressData = {
    projectPoints: 500,
    milestones: 3,
    achievements: [
      { name: 'Innovator', tier: 'Bronze', icon: '🥉', earned: true },
      { name: 'Documentation Guru', tier: 'Silver', icon: '🥈', earned: false },
      // Add more achievements as needed
    ],
    designProgress: 75,
    implementationProgress: 90,
    testingProgress: 50,
    meetingsAttended: 20,
  };

  const calculateAchievementTier = (projectPoints) => {
    if (projectPoints >= 1000) {
      return 'Gold';
    } else if (projectPoints >= 500) {
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
      <h1>Senior Design Project Progress</h1>
      <p>Project Points: {projectProgressData.projectPoints}</p>
      <p>Milestones Completed: {projectProgressData.milestones}</p>

      <h2>Achievements</h2>
      <ul>
        {projectProgressData.achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <span className="achievement-icon">{achievement.icon}</span>
            <span className="achievement-info">
              {achievement.name} - Tier {achievement.tier} - {achievement.earned ? 'Earned' : 'Not Earned'}
            </span>
          </li>
        ))}
      </ul>

      <h2>Design Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(projectProgressData.designProgress)}></div>
        <span className="progress-number">{projectProgressData.designProgress}%</span>
      </div>

      <h2>Implementation Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(projectProgressData.implementationProgress)}></div>
        <span className="progress-number">{projectProgressData.implementationProgress}%</span>
      </div>

      <h2>Testing Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(projectProgressData.testingProgress)}></div>
        <span className="progress-number">{projectProgressData.testingProgress}%</span>
      </div>

      <h2>Meetings Attended</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(projectProgressData.meetingsAttended)}></div>
        <span className="progress-number">{projectProgressData.meetingsAttended}</span>
      </div>
    </div>
  );
};

export default ProjectProgress;
