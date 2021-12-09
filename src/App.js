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
      <div
        style={{
          width: '80%',
          marginLeft: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} mt={1}>
          <Grid item xs={8} md={8}>
            <Search />
          </Grid>
          <Grid item xs={2} md={8}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container spacing={2} mt={1}>
          {artist && artist.length > 0
            ? artist.slice(0, 5).map((item) => {
                return (
                  <Grid item xs={12} md={2}>
                    <CardTemplate item={item} />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </div>
    </artistContext.Provider>
  );
}

export default App;
