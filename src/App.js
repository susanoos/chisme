import React, { useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import "./styles.css";
import Nav from "./components/Nav/Nav";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";

function App() {
  // TODO change 'isLoggedIn' back to false, use localstorage api
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const login = () => setIsLoggedIn(true);

  return (
    <>
      {!isLoggedIn &&
        createPortal(
          <Login onGetUsername={setUser} onLogin={login} />,
          document.getElementById("login-page")
        )}
      {isLoggedIn && <Nav onLogout={setIsLoggedIn} />}
      {isLoggedIn && <Feed user={user} />}
    </>
  );
}

export default App;
