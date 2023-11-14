import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import bearcat from "../assets/bearcatFace.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ onUserInput }) => {
    const history = useNavigate();
    const [isLogged, setIsLogged] = useState(false);

  // State for the mascot image URL
  const [mascotImage, setMascotImage] = useState("");

  useEffect(() => {
    // Create a new image element for the mascot
    const mascot = new Image();
    mascot.onload = () => {
      setMascotImage(mascot.src);
    };

    // Assign the variable directly to the src property
    mascot.src = bearcat;
  }, []);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the value from the input field
    const userInput = event.target.elements.username.value;

    // Call the callback function from App.jsx
    onUserInput(userInput);
    setIsLogged(true);

    console.log(userInput)
    history(`/Dashboard/${userInput}`);
  }

  return (
    <div className="user-login-page">
      {/* Add the mascot image above the login form */}
      {mascotImage && <img src={mascotImage} alt="Mascot" className="mascot-image" />}

      <h1>User Profile Page</h1>
      <form className="user-login-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
        </form>
    </div>
  );
};

export default LoginPage;
