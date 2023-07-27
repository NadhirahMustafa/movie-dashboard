import React from 'react';
import { Grid, Table } from '@mui/material';

interface movieListProps {
    list: string[];
}

const MovieTable: React.FC<movieListProps> = ({ list }) => {

    return (
        <Grid className='table--border'>
            <Table className='table--data'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Runtime</th>
                        <th>Genres</th>
                        <th>Director</th>
                        <th>Actor</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((row: any) => (
                        <tr key={row.id}>
                            <td>{row.title}</td>
                            <td>{row.year}</td>
                            <td>{row.runtime}</td>
                            <td>{row.genres.toString()}</td>
                            <td>{row.director}</td>
                            <td>{row.actors}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Grid>
    );
}

export default MovieTable;
