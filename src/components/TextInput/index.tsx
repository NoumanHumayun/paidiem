import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    artist: {
      "& > *": {
        marginTop: "10px",
      },
    },
  })
);

interface InputProps {
  error: boolean;
  id: string;
  label: string;
  type: string;
  onChange: any;
}

export default function TextInput(props: InputProps) {
  const classes = useStyles();
  const { error, id, label, type } = props;
  const helperText = error
    ? type === "artist"
      ? "Numbers only"
      : "3 Characters Only"
    : "";

  return (
    <TextField
      className={classes.artist}
      type="number"
      error={error}
      id={id}
      label={label}
      helperText={helperText}
      variant="outlined"
      onChange={props.onChange}
    />
  );
}
