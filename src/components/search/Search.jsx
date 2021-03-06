import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { artistContext } from '../../context/Context';
import LoadingSpinner from '../../spinner/LoadingSpinner'

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [loading,setLoading] = useState(false)

  const { setArtist } = useContext(artistContext);
  const handleTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearch = async () => {
    setLoading(true)
    try {
      const response = fetch(
        'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' +
          searchText,
        {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await (await response).json();
      setArtist(result.data);
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err);
    }
  };
  useEffect(() => {}, []);
  return (
    <div>
      <TextField
        id='filled-search'
        label='Search artist'
        type='search'
        variant='outlined'
        placeholder='type artist and click search icon'
        value={searchText}
        onChange={handleTextChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon
                style={{ cursor: 'pointer' }}
                onClick={handleSearch}
              />
            </InputAdornment>
          ),
        }}
      />
      {
        loading?( 
          <LoadingSpinner />
        ):null
      }
    </div>
  );
};

export default Search;
