// NavBar.js
import { Container, Nav, Navbar } from "react-bootstrap";
import './NavBar.css';
import canvas from '../assets/Canvas-Logo-only.png';
import dashboard from '../assets/dashboard.png';
import announcements from "../assets/announcements.png";
import todolist from '../assets/todolist.png';
import { useState } from "react";
import calender from '../assets/Calender.jsx.png';
const NavBar = () => {

  const [userInput, setUserInput] = useState(""); // Global variable to store user input

  // Callback function to set user input in App.jsx
  const handleUserInput = (input) => {
    setUserInput(input);
  }

  return (
    <Navbar bg="light" data-bs-theme="light" >
      <Container >
        <Navbar.Brand href="/">
          <img
            src={canvas}
            width="150"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <p className="brand-header">Alterna-Canvas</p>
          <Nav>
            <Nav.Link href="/Dashboard/:userInput"> <img src={dashboard} width="50" height="50"/></Nav.Link>
            {/* <Nav.Link href="/dashboard"><img src={dashboard} width="50" height="50"/></Nav.Link> */}
            <Nav.Link href="/announcements"><img src={announcements} width="50" height="50"/></Nav.Link>
            <Nav.Link href="/ToDoList"><img src={todolist} width="50"height="50" /></Nav.Link>
            <Nav.Link href="/Calender"><img src={calender} width="50"height="50" /></Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
