
import React from 'react';
import './Progress.css';

const GraphicsProgress = () => {
  // Sample graphics class progress data (replace it with actual data from your application)
  const graphicsProgressData = {
    graphicsPoints: 500,
    modulesCompleted: 3,
    achievements: [
      { name: 'Pixel Art Pro', tier: 'Bronze', icon: '🥉', earned: true },
      { name: 'Shader Wizard', tier: 'Silver', icon: '🥈', earned: false },
      // Add more achievements as needed
    ],
    renderingProgress: 75,
    modelingProgress: 90,
    animationProgress: 50,
    projectsCompleted: 2,
  };

  const calculateAchievementTier = (graphicsPoints) => {
    if (graphicsPoints >= 1000) {
      return 'Gold';
    } else if (graphicsPoints >= 500) {
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
      <h1>Computer Graphics Class Progress</h1>
      <p>Graphics Points: {graphicsProgressData.graphicsPoints}</p>
      <p>Modules Completed: {graphicsProgressData.modulesCompleted}</p>

      <h2>Achievements</h2>
      <ul>
        {graphicsProgressData.achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <span className="achievement-icon">{achievement.icon}</span>
            <span className="achievement-info">
              {achievement.name} - Tier {achievement.tier} - {achievement.earned ? 'Earned' : 'Not Earned'}
            </span>
          </li>
        ))}
      </ul>

      <h2>Rendering Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(graphicsProgressData.renderingProgress)}></div>
        <span className="progress-number">{graphicsProgressData.renderingProgress}%</span>
      </div>

      <h2>Modeling Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(graphicsProgressData.modelingProgress)}></div>
        <span className="progress-number">{graphicsProgressData.modelingProgress}%</span>
      </div>

      <h2>Animation Progress</h2>
      <div className="ring-progress">
        <div className="ring" style={getRingStyle(graphicsProgressData.animationProgress)}></div>
        <span className="progress-number">{graphicsProgressData.animationProgress}%</span>
      </div>

      <h2>Projects Completed</h2>
      <p>{graphicsProgressData.projectsCompleted} projects successfully completed</p>
    </div>
  );
};

export default GraphicsProgress;

