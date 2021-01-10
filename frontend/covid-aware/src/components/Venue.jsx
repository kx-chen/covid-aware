import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <h1><b>Is this where you are at?</b></h1>
        <p><b>Venue ID: </b></p>
        <p><b>Address: </b></p>
        <p><b>Email: </b></p>
        <p><b>Phone number: </b></p>
      <Button variant="contained" color="primary">
        Yes
      </Button>
      <Button variant="contained" color="secondary">
        No
      </Button>
    </div>
  );
}
