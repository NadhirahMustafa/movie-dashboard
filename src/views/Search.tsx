import React, { useState } from 'react';
import Button from '../component/Button';
import '../styles/Dashboard.scss';
import { Grid, TextField } from '@mui/material';

interface movieListProps {
    init: string[];
    onSearch: (searchTerm: string[]) => void;
}

const Search: React.FC<movieListProps> = ({ init, onSearch }) => {

    const [value, setValue] = useState('');

    const handleInputChange = (e: any) => {
        setValue(e.target.value);
    };

    const handleClick = () => {
        filteredData();
    };

    const handleReset = () => {
        setValue('');
        onSearch(init);
    };

    const filteredData = () => {
        let result = value !== '' ? init.filter(
            (movie: any) =>
                movie.title.toLowerCase().includes(value.toString().toLowerCase())
                || movie.genres.toString().toLowerCase().includes(value.toString().toLowerCase())
                || movie.year.toLowerCase().includes(value.toString().toLowerCase())
                || movie.runtime.toLowerCase().includes(value.toString().toLowerCase())
                || movie.actors.toLowerCase().includes(value.toString().toLowerCase())
                || movie.director.toLowerCase().includes(value.toString().toLowerCase())
        ) : init
        onSearch(result);
    };

    return (
        <Grid className='search--padding'>
            <Grid container className='search--justify'>
                <Grid item className='search--textfield-padding'>
                    <TextField
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        placeholder="Search movie"
                        size='small'
                    />
                </Grid>
                <Grid item className='search--button-padding'><Button className='search--button' onClick={handleClick}>Search</Button></Grid>
                <Grid item><Button className='search--button' onClick={handleReset}>Reset</Button></Grid>
            </Grid>
        </Grid>
    );
}

export default Search;
