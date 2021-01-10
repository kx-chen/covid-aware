import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CenterFocusStrongIcon from "@material-ui/icons/CenterFocusStrong";

export default (props) => {
    return (
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
                        <IconButton>
                            <CenterFocusStrongIcon/>
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}
