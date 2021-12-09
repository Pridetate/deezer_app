import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    height: '800px',
  },
}));

const Details = ({ open, onClose, data }) => {
  const classes = useStyles();
  const [tracklist, setTracklist] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        let albumString = data.album.id.toString();
        const response = fetch(
          'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' +
            albumString,
          {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        const result = await (await response).json();
        console.log(result);
        setAlbumData(result);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchTracks = async () => {
      let tracklistTopFifty = data.artist.tracklist;
      let tracklistTopFive =
        tracklistTopFifty.substring(0, tracklistTopFifty.length - 2) + '5';
      try {
        const response = fetch(
          'https://cors-anywhere.herokuapp.com/' + tracklistTopFive,
          {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        const result = await (await response).json();
        setTracklist(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (data) {
      fetchTracks();
    }
    if (data) {
      fetchAlbum();
    }
  }, [data]);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth='lg'
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      classes={{ paper: classes.dialogPaper }}
    >
      {' '}
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Typography style={{ color: 'black', fontSize: 25 }}>
              Artist Details
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <div style={{ width: '80%', marginLeft: '10%', marginBottom: 20 }}>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={8} md={8}>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              style={{ color: 'blue', fontSize: 'bold' }}
            ></Typography>
            <Card sx={{ maxWidth: 345 }}>
              {data ? (
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='180'
                    image={data.artist.picture}
                    alt='green iguana'
                  />
                  <CardContent></CardContent>
                </CardActionArea>
              ) : null}
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              style={{ color: 'blue', fontSize: 'bold' }}
            >
              Top Tracks
            </Typography>
            {tracklist &&
              tracklist.map((track, index) => {
                return (
                  <Box
                    key={track.id}
                    style={{
                      justifyContent: 'space-between',
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Box
                      style={{
                        justifyContent: 'left',
                        display: 'flex',
                        flexDirection: 'row',
                      }}
                    >
                      <Typography gutterBottom variant='h6' component='div'>
                        {index + 1}.
                      </Typography>
                      <Typography variant='h6'>{track.title}</Typography>
                    </Box>
                    <Typography variant='h6' color='text.secondary'>
                      {track.duration}
                    </Typography>
                  </Box>
                );
              })}
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography style={{ color: 'blue', fontSize: 20 }}>
                Albums
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {tracklist &&
              tracklist.map((track, index) => {
                return (
                  <Grid key={track.id} item xs={12} md={2}>
                    <Card sx={{ maxWidth: 400 }}>
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          height='140'
                          image={track.album.cover}
                          alt='green iguana'
                        />
                        <CardContent>
                          <Box>
                            <Typography
                              gutterBottom
                              variant='h6'
                              component='div'
                              style={{
                                width: '200px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {track.album.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                              {albumData && albumData.release_date
                                ? albumData.release_date.substring(0, 4)
                                : 'no date'}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </div>
      <Button onClick={onClose} style={{ color: 'blue', fontSize: 25 }} mt={5}>
        Close
      </Button>
    </Dialog>
  );
};

export default Details;
