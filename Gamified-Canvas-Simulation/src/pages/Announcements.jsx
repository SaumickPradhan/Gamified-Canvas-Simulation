// Announcements.js
import React, { useState, useEffect } from 'react';
import './Announcements.css';
import ann from '../assets/announcements.png';
const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Function to fetch announcements
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('/Announcements.json');
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    // Fetch announcements initially
    fetchAnnouncements();

    // Refresh announcements every 20 seconds
    const intervalId = setInterval(fetchAnnouncements, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="announcements-container">
      <br></br>
      <img src={ ann } height="50" />
      <h2>Announcements</h2>
      <br></br>
      {announcements.length > 0 && (
        <div className="announcement-list">
          {announcements.map((announcement, index) => (
            <div key={index} className="announcement-card">
              <h3>{announcement.title}</h3>
              <p>{announcement.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Announcements;
