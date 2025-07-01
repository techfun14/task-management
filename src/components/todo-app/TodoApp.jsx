import { Navigate, Route, Routes } from "react-router-dom";
import LogoutComponent from "./logoutComponent";
import ListTodos from "./Listtodospage";
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import ErrorPage from './ErrorPage';
import TodoUpdateComponent from './TodoUpdatePage';
import TodoAddUpdateComponent from './addTodoComponent';
import './TodoApp.css';
import { useAuth } from "./security/Authcontext";


export default function TodoApp() {
  function AuthenticatedRoute({children}) {
    const authContext=useAuth();
    if(authContext.isAuthenticated)
      return children;
    return <Navigate to='/'/>
  }
  return (
    <Routes>
      <Route path='/' element={<LoginPage  />} />
      
      <Route path='/welcome/:username' element={
        <AuthenticatedRoute>
          <WelcomePage />
        </AuthenticatedRoute>
        } 
      />
      <Route path='/list-todos' element={
        <AuthenticatedRoute>
          <ListTodos />
        </AuthenticatedRoute>
        } 
      />
      <Route path='/list-todos/:id' element={
        <AuthenticatedRoute>
          <TodoUpdateComponent/>
        </AuthenticatedRoute>
        }
      />
      <Route path='/add-todos' element={
        <AuthenticatedRoute>
          <TodoAddUpdateComponent/>
        </AuthenticatedRoute>
        }
      />
      <Route path='/logout' element={
        <AuthenticatedRoute>
          <LogoutComponent/>
        </AuthenticatedRoute>
        } 
      />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}
