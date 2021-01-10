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

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Success from './success';

import clsx from 'clsx';



export default function App() {
  return (
    <Router>
        <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/">
                    <NavBar/>
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function NavBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
        <CssBaseline />
        <Topbar
            classes={classes}
            open={open}
            handleDrawerOpen={handleDrawerOpen}
        />
        <Sidebar
            classes={classes}
            open={open}
            handleDrawerClose={handleDrawerClose}
            theme={theme}
        />
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <Container
                maxWidth="sm"
                style={{
                    height: "100%",
                    paddingLeft: 40,
                    paddingRight: 40,
                    paddingTop: "10rem",
                }}
            >
                <FormControl variant="filled">
                    <InputLabel htmlFor="venueIdInput">Venue ID</InputLabel>
                    <FilledInput
                        id="venueIdInput"
                        label="Venue ID"
                        style={{width: "100%"}}
                        placeholder="Enter the displayed ID by the venue or scan the QR code"
                        autoFocus={true}
                        autoComplete="current-password"
                        variant="filled"
                        style={{
                            width: "100%",
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton>
                                    <CenterFocusStrongIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Container>
      </main>
    </div>
  );
}
