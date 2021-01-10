import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import GoogleButton from 'react-google-button'


export default (props) => {
    return (
    <>
        <Typography variant="h3" gutterBottom>
            Login
        </Typography>
        <GoogleButton
            onClick={() => { console.log('Google button clicked') }}
        />
        <Typography variant="subtitle1">
            I do not have an account.
        </Typography>
    </>
    )
}
