import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Camera</DialogTitle>
        Test Camera
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default (props) => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("camera");

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    };
    return (
        <>
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
                            <IconButton onClick={handleClickOpen}>
                                <CenterFocusStrongIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        ,</>
    )
}
