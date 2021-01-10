import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from "firebase";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function saveVisit(user, venueId, history) {
    console.log(user);
    firebase.firestore().collection("Check-ins").add({
        user: user.uid,
        venue: venueId,
        timestamp: new Date().getTime(),
    }).then((doc) => {
        history.push('/dashboard');
    });
}

export default function Venue(props) {
    const history = useHistory();
    const classes = useStyles();
    const [items, setItems] = useState({});
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("Venues").doc(props.match.params.venueId);

    function getSchools() {
        setLoading(true);
        ref.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setItems(doc.data());
                setLoading(false);
            } else {
                // doc.data() will be undefined in this case
                setLoading(false);
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    useEffect(() => {
        getSchools();
    }, []);

    if(loading) {
        return <h1>Loading...</h1>;
    }

    if(!items) {
        return <h1>Item {props.match.params.venueId} not found.</h1>;
    }
    console.log(items);

  return (
      <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
             return <div className={classes.root}>
                  <h1><b>Is this where you are at?</b></h1>
                  <p><b>Address: {items.address}</b></p>
                  <p><b>Email: {items.email}</b></p>
                  <p><b>Phone number: {items.phone_number}</b></p>
                  <Button variant="contained" color="primary" onClick={ () =>
                      saveVisit(user, props.match.params.venueId, history)}>
                      Yes
                  </Button>
                  <Button variant="contained" color="secondary">
                      No
                  </Button>
              </div>;
          }}
  </FirebaseAuthConsumer>
  );
}
