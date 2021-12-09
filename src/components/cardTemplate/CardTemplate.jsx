import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Details from '../details/Details';

const CardTemplate = ({ item }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };
  useEffect(() => {}, [item]);

  return (
    <>
      <Card
        sx={{ maxWidth: 345 ,}}
        onClick={() => {
          setOpenDetails(true);
        }}
      >
        {item ? (
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={item.artist.picture}
              alt='green iguana'
            />
            <CardContent>
              <Box
                style={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography gutterBottom variant='h5' component='div'>
                  Artist
                </Typography>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  style={{
                    marginLeft:15,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.artist.name}
                </Typography>
              </Box>
              <Box
                style={{
                  justifyContent: 'space-between',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Typography gutterBottom variant='h5' component='div'>
                  Fans
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.rank > 1000
                    ? item.rank
                        .toString()
                        .substring(0, item.rank.toString().length - 3) + 'K'
                    : item.rank}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        ) : null}
      </Card>
      <Details open={openDetails} onClose={handleCloseDetails} data={item} />
    </>
  );
};

export default CardTemplate;
