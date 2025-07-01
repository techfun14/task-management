import { useNavigate } from 'react-router-dom';
import './Heeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './security/Authcontext';

const Header = () => {
  const authContext=useAuth();
  const navigate = useNavigate();
  const isAuthenticated=authContext.isAuthenticated;
  const usrname=authContext.usrname;
  return (
    <header className="header shadow">
      <div className="nav-left">
        <h1 className="logo">Task Manager</h1>
      </div>

      <nav className="nav-center">
        {isAuthenticated && (
          <>
            <button onClick={() => navigate(`/welcome/${usrname}`)} className="nav-btn">
              Home
            </button>
            <button onClick={() => navigate("/list-todos")} className="nav-btn">
              Todos
            </button>
          </>
        )}
      </nav>

      <div className="nav-right">
        {isAuthenticated ? (
          <button className="auth-btn logout" onClick={() => {
            navigate('/logout');
            authContext.logout();
          }}>
            Logout
          </button>
        ) : (
          <button className="auth-btn login" onClick={() => navigate("/")}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;