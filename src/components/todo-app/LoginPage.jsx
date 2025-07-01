import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { useAuth } from './security/Authcontext';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(null);
  const navigate = useNavigate();
  const authContext=useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (authContext.login(username,password)) {
      navigate(`/welcome/${username}`);
    } else {    
      setLogin(false)
    }
  }

  return (
    <div className="Login">
      {isLogin === false && <div className="error-msg">Invalid Credentials</div>}
      <div className="LoginContainer">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <br />
          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}