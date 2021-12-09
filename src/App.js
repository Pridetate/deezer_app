import Header from './components/header/Header';
import CardTemplate from './components/cardTemplate/CardTemplate';
import Search from './components/search/Search';
import Grid from '@mui/material/Grid';
import { artistContext } from './context/Context';
import { useState } from 'react';

function App() {
  const [artist, setArtist] = useState([]);
  return (
    <artistContext.Provider value={{ artist, setArtist }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={6}>
          <Search />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      {artist && artist.length > 0
        ? artist.slice(0, 5).map((item) => {
            return (
              <Grid container spacing={2} mt={1}>
                <Grid item xs={1} md={0}></Grid>
                <Grid item xs={10} md={2}>
                  <CardTemplate item={item} />
                </Grid>
                <Grid item xs={1} md={0}></Grid>
              </Grid>
            );
          })
        : null}
    </artistContext.Provider>
  );
}

export default App;
