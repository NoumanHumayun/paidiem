import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginTop: "-10px",
    },
  })
);

export default function ContainedButtons(props: any) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={props.onClick}
      className={classes.button}
    >
      Search
    </Button>
  );
}
