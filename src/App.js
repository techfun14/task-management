import './App.css';
import Header from './components/todo-app/Header';
import TodoApp from './components/todo-app/TodoApp';
import { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import AuthProvider from './components/todo-app/security/Authcontext';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">
      <AuthProvider>
        <HashRouter >
          <Header isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
          <TodoApp onLogin={handleLogin} onLogout={handleLogout} />
        </HashRouter>
      </AuthProvider>
    </div>
  );
}

export default App;