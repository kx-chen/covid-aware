import React from "react";
import Icon from '@material-ui/core/Icon';
import CloudDoneRoundedIcon from '@material-ui/icons/CloudDoneRounded';
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Success() {
    


    
    return <div>
        <center><CloudDoneRoundedIcon></CloudDoneRoundedIcon></center>
        <center><h1>Success!</h1></center>
        <center><h2>Thanks for checking in!</h2></center>
    </div>;
}