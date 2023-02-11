import React, { useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import "./styles.css";
import Nav from "./Nav/Nav";
import Feed from "./Feed/Feed";
import Login from "./Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const login = () => setIsLoggedIn(true);

  return (
    <>
      {!isLoggedIn &&
        createPortal(
          <Login onGetUsername={setUser} onLogin={login} />,
          document.getElementById("login-page")
        )}
      {isLoggedIn && <Nav />}
      {isLoggedIn && <Feed user={user} />}
    </>
  );
}

export default App;
