import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Country } from "../../interfaces/Country";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline-flex",
      "& > *": {
        marginTop: "10px",
      },
    },
  })
);

interface Data {
  countries: Country[];
  onChange: any;
}
export default function AutoComplete(props: Data) {
  const classes = useStyles();
  const [country, setCountry]: any = useState(null);
  const { countries } = props;

  return (
    <Autocomplete
      className={classes.root}
      loading={!countries}
      value={country}
      id="countries"
      options={countries}
      getOptionLabel={(option) => option.name}
      onChange={props.onChange}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
}
