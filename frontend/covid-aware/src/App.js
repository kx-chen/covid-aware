import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
    Redirect,
} from "react-router-dom";


import About from "./About.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Success from "./components/Success.jsx";
import Search from "./components/Search.jsx";
import Venue from "./components/Venue.jsx";
import Login from './components/Login.jsx';
import Signup from "./components/Signup.jsx";
import Auth from "./components/Auth.jsx";
import { FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { config } from "./config";
import firebase from "firebase";

export default function App() {
  return (
  <FirebaseAuthProvider {...config} firebase={firebase}>
      <Router>
          <div>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              {/*TODO: DRY!!!! IfFirebaseAuth/Unauth should be removed*/}
              <Navbar>
                  <Switch>
                      <Route path="/signup">
                          <Signup/>
                      </Route>
                      <Route path="/dashboard">
                          <IfFirebaseAuthed>
                              {() => {
                                  return <Dashboard />;
                              }}
                          </IfFirebaseAuthed>
                          <IfFirebaseUnAuthed>
                              {() => {
                                  return <Login />;
                              }}
                          </IfFirebaseUnAuthed>
                      </Route>

                      <Route path="/login">
                          <div>
                              <IfFirebaseAuthed>
                                  {() => {
                                      return <Redirect to="/about" />;
                                  }}
                              </IfFirebaseAuthed>
                              <IfFirebaseUnAuthed>
                                  {() => {
                                      return <Login />;
                                  }}
                              </IfFirebaseUnAuthed>
                          </div>
                      </Route>
                      <Route path="/success">
                          <Success />
                      </Route>
                      <Route path="/about">
                          <About/>
                      </Route>
                      <Route path="/venue/:venueId" component={Venue}/>
                      <Route path="/auth">
                          <Auth />
                      </Route>
                      <Route exact path="/">
                          <Search />
                      </Route>
                      <Route path="/404">
                          <div>
                              <h1>Page not found.</h1>
                              <Link to="/dashboard">Return Home.</Link>
                          </div>
                      </Route>
                      {/* <Redirect from='*' to='/404' /> */}
                  </Switch>
            </Navbar>
        </div>
    </Router>
  </FirebaseAuthProvider>
  );
}
