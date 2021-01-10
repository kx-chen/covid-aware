import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FilledInput from '@material-ui/core/FilledInput';
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import clsx from 'clsx';


export default props => {
    return (
        <>
            <Typography variant="h3" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="h5" style={{marginBottom: 30}} gutterBottom>
                Your info
            </Typography>
            <Typography variant="body1" style={{marginBottom: 30}} gutterBottom>
                Name: Johnny Appleseed
                Email: example@example.com
                Phone number: +1 (000) 000-0000
            </Typography>
            <Typography variant="h5" style={{marginBottom: 30}} gutterBottom>
               Options
            </Typography>
            <Button variant="contained" color="secondary" style={{marginRight: 10}}>
               LOG A VISIT
            </Button>
            {/*<Button variant="contained" color="primary">*/}
            {/*    Edit*/}
            {/*</Button>*/}
        </>
    )
}
