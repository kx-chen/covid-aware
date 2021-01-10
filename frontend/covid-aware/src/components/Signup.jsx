import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";
import GoogleButton from 'react-google-button'


export default (props) => {
    return (
    <>
        <Typography variant="h3" gutterBottom>
            Signup
        </Typography>
        <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
        />
        <Link variant="subtitle1" to="/signup">
            I do not have an account.
        </Link>
    </>
    )
}
