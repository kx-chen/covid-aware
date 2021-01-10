import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScannerIcon from '@material-ui/icons/Scanner';
import CameraIcon from '@material-ui/icons/Camera';
import InfoIcon from '@material-ui/icons/Info';

export default (props) => {
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
            <ListItem button key="Scan">
                <ListItemIcon>
                    <CameraIcon />
                </ListItemIcon>
                <ListItemText primary="Scan" />
            </ListItem>
            <ListItem button key="My Scans">
                <ListItemIcon>
                    <ScannerIcon />
                </ListItemIcon>
                <ListItemText primary="My Scans" />
            </ListItem>
            <ListItem button key="About">
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
            </ListItem>
        </List>
        <Divider />
    </Drawer>)
};
