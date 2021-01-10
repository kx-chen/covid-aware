import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FilledInput from '@material-ui/core/FilledInput';
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import IconButton from '@material-ui/core/IconButton';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import InputAdornment from '@material-ui/core/InputAdornment';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import clsx from 'clsx';

import About from "./About.jsx";
import Navbar from "./components/Navbar.jsx";
import User from "./components/User.jsx";
import Success from "./components/Success.jsx";
import Search from "./components/Search.jsx";
import Venue from "./components/Venue.jsx";

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

export default function App() {
  return (
    <Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar>
                <Switch>
                    <Route path="/user">
                        <User />
                    </Route>
                    <Route path="/success">
                        <Success />
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/venue">
                        <Venue />
                    </Route>
                    <Route path="/">
                        <Search />
                    </Route>
                </Switch>
            </Navbar>
        </div>
    </Router>
  );
}
