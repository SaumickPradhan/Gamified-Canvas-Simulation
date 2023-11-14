import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard';
import Announcements from './pages/Announcements';
import 'react-bootstrap'
import UserInterface from './courses/UserInterface';
import Zoom from './components/Zoom';
import Syllabus from './components/Syllabus';
import RewardCenter from './components/RewardCenter';
import ModulesPage from './pages/ModulesPage';
import VerticalNavBar from './components/VerticalNavBar';
import Progress from './components/Progress';
import Grade from './components/Grade';
import AssignmentPage from './components/AssignmentPage';
import ToDoPage from './pages/ToDoPage';
import SyllabusCG from './components/SyllabusCG';
import SyllabusSD from './components/SyllabusSD';
import GraphicsProgress from './components/GraphicsProgress';
import ProjectProgress from './components/ProjectProgress';
import GamifiedCalendarPage from './components/GamifiedCalendarPage';

function App() {
  // Global variable to store user input
  const [userInput, setUserInput] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleUserInput = (input) => {
    setUserInput(input);
    setIsLoggedIn(true);
  };

  useEffect(() => {
    // Check if the current location is not the LoginPage
    if (window.location.pathname !== '/') {
      setIsLoggedIn(true);
    }
  }, [])
  // Callback function to set user input in App.jsx

  return (
    <div className="App">
      {isLoggedIn && window.location.pathname !== '/' && <NavBar />}
 <Container>
       <Router>
            <Routes>
            <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to={`/Dashboard/${userInput}`} />
              ) : (
                <LoginPage onUserInput={handleUserInput} />
              )
            }
          />
            <Route path="/Dashboard/:userInput" element={<Dashboard  onUserInput={handleUserInput}/>} />
    
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/ToDoList" element={<ToDoPage />} />
            <Route path="/UserInterface" element={<VerticalNavBar />} />
            <Route path="/Zoom" element={<Zoom />} />
            <Route path="/RewardCenter" element={<RewardCenter  />} />
            <Route path="/ModulesPage" element={<ModulesPage />} />
            <Route path="/Syllabus" element={<Syllabus />} />
            <Route path="/Progress" element={<Progress />} />
            <Route path="/GradeBook" element={<Grade />} />
            <Route path="/AssignmentPage" element={<AssignmentPage />} />
            <Route path="/SyllabusSG" element={<SyllabusCG />} />
            <Route path="/SyllabusSD" element={<SyllabusSD />} />
            <Route path="/ProjectProgress" element={<ProjectProgress />} />
            <Route path="/GraphicsProgress" element={<GraphicsProgress />} />
            <Route path="/Calender" element={<GamifiedCalendarPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </Router>
            {/* <Router>
              <Routes>
              <Route path="/Zoom" element={<VerticalNavBar />} />
              <Route path="/RewardCenter" element={<VerticalNavBar />} />
            <Route path="/ModulesPage" element={<VerticalNavBar />} />
            <Route path="/Syllabus" element={<VerticalNavBar />} />
            <Route path="/GradeBook" element={<VerticalNavBar />} />
            <Route path="/AssignmentPage" element={<VerticalNavBar />} />

              </Routes>
            </Router> */}
            </Container>
   </div>
   

  )
}

export default App
