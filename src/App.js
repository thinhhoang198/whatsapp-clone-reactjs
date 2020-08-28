import React, { useState } from "react";
import "./App.css";

import Chat from "./components/Chats.js/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar user={user} />

            <Switch>
              <Route path="/rooms/:roomId">
                <Chat user={user} />
              </Route>
              <Route path="/"></Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
