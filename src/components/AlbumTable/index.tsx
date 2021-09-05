import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { Album } from "../../interfaces/Album";
import ImageAvatars from "./ImageAvatars";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Currency } from "../../interfaces/Country";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      height: "500px",
      "& .MuiDataGrid-cell--withRenderer": {
        minHeight: "100px",
      },
    },
  })
);

interface Data {
  albums: Album[];
  currency?: Currency;
  symbol?: string;
}
export default function AlbumTable(props: Data) {
  const classes = useStyles();
  let { currency, albums } = props;

  if (!currency)
    currency = { name: "United States Dollar", code: "USD", symbol: "$" };
  const columns: GridColDef[] = [
    {
      field: "image",
      renderCell: (params) => {
        return <ImageAvatars image={params.formattedValue} />;
      },
      width: 200,
    },
    {
      field: "albumName",
      headerName: "Album name",
      renderCell: (params) => {
        return (
          <a href={params.row.url} target="_blank">
            {params.formattedValue}
          </a>
        );
      },
      width: 500,
    },
    {
      field: "totalTrack",
      headerName: "No. of Tracks",
      width: 180,
    },
    {
      field: "totalPrice",
      headerName: "Price",
      renderCell: (params) => {
        return (
          <div>{`${currency?.symbol} ${params.formattedValue} ${currency?.name}`}</div>
        );
      },
      width: 250,
    },
    {
      field: "explicit",
      headerName: "Explicit",
      width: 130,
    },
  ];
  return (
    <div>
      <DataGrid
        className={classes.row}
        rows={albums}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
      />
    </div>
  );
}
