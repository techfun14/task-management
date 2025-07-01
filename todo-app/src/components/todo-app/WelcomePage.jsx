import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/Authcontext";
import { useState } from "react";
import {
  retrieveHelloWorldBean,
  retrieveHelloWorldPathVariable,
} from "./api/HelloWorldApiService";
import "./WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();
  const authContext = useAuth();
  const username = authContext.usrname;
  const [message, setMessage] = useState(null);

  function callHelloWorldRestApi() {
    retrieveHelloWorldBean()
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error));

    retrieveHelloWorldPathVariable(username)
      .then((response) => successfulResponse(response))
      .catch((error) => errorResponse(error));
  }

  function successfulResponse(response) {
    setMessage(response.data.message);
  }

  function errorResponse(error) {
    console.log(error);
  }

  return (
    <div className="WelcomePageContainer">
      <div className="welcome-box">
        <h1 className="welcome-title">Welcome, <span className="username">{username}</span></h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/list-todos")}
        >
          View Your Todos
        </button>

        <button className="secondary-btn" onClick={callHelloWorldRestApi}>
          Call Hello World API
        </button>

        {message && <p className="api-message">{message}</p>}
      </div>
    </div>
  );
}

export default WelcomePage;
