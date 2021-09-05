import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { Album } from "../../interfaces/Album";
import ImageAvatars from "./ImageAvatars";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
          {" "}
          {params.formattedValue}
        </a>
      );
    },
    width: 600,
  },
  {
    field: "totalTrack",
    headerName: "No. of Tracks",
    width: 200,
  },
  {
    field: "totalPrice",
    headerName: "Price",
    width: 110,
  },
  {
    field: "explicit",
    headerName: "Explicit",
    width: 130,
  },
];

interface Data {
  albums: Album[];
}
export default function AlbumTable(props: Data) {
  const classes = useStyles();
  return (
    <div>
      <DataGrid
        className={classes.row}
        rows={props.albums}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
      />
    </div>
  );
}
