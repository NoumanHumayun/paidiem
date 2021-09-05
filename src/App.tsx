import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import Countries from "./containers/Countries";
import { SEARCH } from "./http/api";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import A from "./components/A";
import AlbumTable from "./components/AlbumTable";
import { Album } from "./interfaces/Album";
import { Country } from "./interfaces/Country";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        marginTop: "20px",
      },
    },
  })
);

function App() {
  const classes = useStyles();
  const [artistId, setArtistId] = useState(0);
  const [country, setCountry] = useState<Country>();
  const [artist, setArtist] = useState<any>();
  const [artistError, setArtistError] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);

  const formatAlbumData = (albumData: []) => {
    const formatted = albumData.map((album: any) => {
      return {
        id: album.collectionId,
        albumName: album.collectionName,
        totalTrack: album.trackCount,
        totalPrice: album.collectionPrice,
        url: album.collectionViewUrl,
        image: album.artworkUrl100,
        explicit: album.collectionExplicitness === "notExplicit" ? "NO" : "YES",
      };
    });
    setAlbums(formatted);
  };

  const handleArtist = (e: any) => {
    if (isNaN(e.target.value)) {
      setArtistError(true);
    } else {
      setArtistId(e.target.value);
      setArtistError(false);
    }
  };
  const handleCountry = (e: any, val: any) => {
    setCountry(val);
  };

  const handleSubmit = () => {
    SEARCH(artistId, country?.alpha2Code).then((items) => {
      if (items.resultCount) {
        setArtist(items.results.shift());
        formatAlbumData(items.results);
      }
    });
  };

  return (
    <div className="App">
      <main className={classes.root}>
        <TextInput
          label="Artist Id"
          id="artist"
          type="artist"
          error={artistError}
          onChange={handleArtist}
        />

        <Countries onChange={handleCountry} />
        <Button onClick={handleSubmit} />
      </main>

      {artist && (
        <main className={classes.root}>
          <A href={artist.artistLinkUrl} target="_blank">
            {artist.artistName}
          </A>
        </main>
      )}

      {albums && (
        <main className={classes.root}>
          <AlbumTable albums={albums} currency={country?.currencies[0]} />
        </main>
      )}
    </div>
  );
}

export default App;
