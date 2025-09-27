import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from './security/Authcontext';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (await authContext.login(username, password)) {
      navigate(`/welcome/${username}`);
    } else {
      setLogin(false);
    }
  }
  function handleForgotPassword(){
     navigate('/forgot-password');
  }

  // Navigate to signup page
  function handleCreateAccount() {
    navigate('/signup');
  }

  return (
    <div className="Login">
      <div className="LoginContainer">
        <h2>Sign in</h2>
        <p className="signup-link">
          Don't have an account?
          <button 
            className="create-btn" 
            type="button" 
            onClick={handleCreateAccount}
          >
            Create Now
          </button>
        </p>

        {isLogin === false && <div className="error-msg">Invalid Credentials</div>}

        <form className="form" onSubmit={handleSubmit}>
          <big><label htmlFor="username">Username</label></big>
          <input
            id="username"
            type='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <big><label htmlFor="password">Password</label></big>
          <div className='password-input'>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className='eye-icon'
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              {showPassword ? '🙈' : '👁️' }
            </span>
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox' /> Remember me</label>
            <button className="create-btn" type="button" onClick={handleForgotPassword}>Forgot Password?</button>
          </div>

          <button className="login-btn" type="submit">Sign in</button>

          <div className="divider"><span>or</span></div>

          <button className="google-btn" type="button">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}