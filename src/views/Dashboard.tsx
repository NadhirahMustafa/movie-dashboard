import React, { useEffect, useState }  from 'react';
import MovieTable from './MovieTable';
import Search from './Search';
import '../styles/Dashboard.scss';
import { Grid } from '@mui/material';

//test
  
const Dashboard: any = () => {
  
  const [list, setList] = useState([]);
  const [initList, setInitList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('/dummy-data/movie.json');
                const data = await resp.json();
                setList(data.movies);
                setInitList(data.movies);
            } catch (err) {
                console.error('Error: ', err);
            }
        };

        fetchData();
    }, []);

    const setListNew = (s:any) => {
      setList(s);
    };

  return (
    <Grid>
      <Grid className='dashboard--page-title'>Movie dashboard by Nanad</Grid>
      <Search init={initList}  list={list} onSearch={setListNew}/>
      <MovieTable list={list} />
    </Grid>
  );
}

export default Dashboard;