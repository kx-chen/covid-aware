import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export default (props) => {
    return (<AppBar
        position="fixed"
        className={clsx(props.classes.appBar, {
            [props.classes.appBarShift]: props.open,
        })}
            >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                className={clsx(props.classes.menuButton, props.open && props.classes.hide)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                COVID Aware
            </Typography>
        </Toolbar>
    </AppBar>)
}
