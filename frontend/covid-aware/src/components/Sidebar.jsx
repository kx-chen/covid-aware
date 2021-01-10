import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import InfoIcon from '@material-ui/icons/Info';
import { IfFirebaseAuthed, IfFirebaseUnAuthed } from "@react-firebase/auth";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from "react";
import firebase from "firebase";

export default (props) => {
    const history = useHistory();
    const goLogin = () => history.push('login');
    return (<Drawer
        className={props.classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
            paper: props.classes.drawerPaper,
        }}
            >
        <div className={props.classes.drawerHeader}>
            <IconButton onClick={props.handleDrawerClose}>
                {props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            <Link to="/dashboard" onClick={props.handleDrawerClose}>
                <ListItem button key="Home"
                >
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </Link>
            <Link to="/history" onClick={props.handleDrawerClose}>
                <ListItem button key="History">
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="History" />
                </ListItem>
            </Link>
            <Link to="/about" onClick={props.handleDrawerClose}>
                <ListItem button key="About">
                    <ListItemIcon>
                        <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
            </Link>
            {/*TODO: Move into its own component*/}
            {/*Selects between Login and log out buttons*/}
            <IfFirebaseAuthed>
                {() => {
                    return <ListItem button key="Logout"
                                     onClick={() => {
                                         firebase.auth().signOut().then(() => {
                                             goLogin();
                                             props.handleDrawerClose();
                                         });
                                     }}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>;
                }}
            </IfFirebaseAuthed>
            <IfFirebaseUnAuthed>
                {() => {
                    return <ListItem button key="Login"
                                     onClick={() => {
                                         const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                         firebase.auth().signInWithPopup(googleAuthProvider);
                                         props.handleDrawerClose();
                                     }}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>;
                }}
            </IfFirebaseUnAuthed>
        </List>
        <Divider />
    </Drawer>)
};
