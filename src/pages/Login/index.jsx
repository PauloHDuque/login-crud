import { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validUsername = "user@test";
  const validPassword = "1234";

  const handlesSubmit = (e) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      navigate("/Crud");
    } else {
      alert("Usuário e/ou senha inválidos");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <LoginForm
        onSubmit={handlesSubmit}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
}
