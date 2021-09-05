import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: "100px",
      height: "100px",
    },
  })
);

export default function ImageAvatars(props: any) {
  const classes = useStyles();
  return (
    <Avatar
      variant="rounded"
      alt={props.alt}
      src={props.image}
      className={classes.large}
    />
  );
}
