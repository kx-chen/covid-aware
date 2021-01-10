import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

import Topbar from "./components/Topbar.jsx";
import Sidebar from "./components/Sidebar.jsx";

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

export default function PersistentDrawerLeft() {
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

                <TextField
                    id="filled-password-input"
                    label="Venue ID"
                    helperText="Enter the displayed ID by the venue or scan the QR code"
                    type="text"
                    autoComplete="current-password"
                    variant="filled"
                    style={{
                        width: "100%",
                    }}
                />
            </Container>
        {/* <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                  facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                  gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                  donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                  adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                  Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                  imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                  arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                  donec massa sapien faucibus et molestie ac.
                  </Typography>
                  <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                  facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                  consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                  vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                  hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                  tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                  nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                  accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography> */}
      </main>
    </div>
  );
}
