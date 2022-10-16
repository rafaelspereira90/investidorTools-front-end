import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import AuthService from "../../services/auth";

const Logout = () => {
  const navigate = useNavigate();

  function handleLogout() {
    AuthService.logout();
    navigate("/");
    
  };

  return (
  <Container>
    <h3 className="App-subtittle2" onClick={() => handleLogout()}>Logout</h3>
  </Container>
  )
};

export default Logout;