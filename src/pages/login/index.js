import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/header";
import { FormDiv } from "./styles";
import AuthService from "../../services/auth";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
        await AuthService.login(user, password).then(
            () => {
            navigate("/reports");
            },
            (error) => {
            console.log(error);
            }
        );
        } catch (err) {
        console.log(err);
        }
  };

return (
        <div className="app">
            <Header />
            <h1>Login</h1>
            <FormDiv onSubmit={handleLogin}>
                <input type="text" placeholder="usuário" onChange={(e) => setUser(e.target.value)} />
                <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                <input className="btn-submit" type="submit" value="Login" />
                
                <h3 className="App-link">Esqueci a senha</h3>
                <h3 className="App-link">Cadastre-se</h3>
            </FormDiv>     
        </div>
    );
}

export default Login;