import React, { useEffect, useState } from 'react';
import MovieTable from './MovieTable';
import Search from './Search';
import Login from './Login';
import '../styles/Dashboard.scss';
import { Grid } from '@mui/material';
import { dashboard } from '../constants/message';

const Dashboard: any = () => {

  const [list, setList] = useState([]);
  const [initList, setInitList] = useState([]);
  const [numResult, setNumResult] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/dummy-data/movie.json');
        const data = await resp.json();
        setList(data.movies);
        setInitList(data.movies);
        setNumResult(data.movies.length);
      } catch (err) {
        console.error('Error: ', err);
      }
    };

    fetchData();
  }, []);

  const setListNew = (s: any) => {
    setList(s);
    setNumResult(s.length)
  };

  const noResult = () => {
    return (
      <>
        <Grid className='dashboard--no-result-alert'>{dashboard.no_result}</Grid>
        <Grid className='dashboard--no-result-message'>{dashboard.error_message}</Grid>
      </>
    );
  };

  const hasResult = () => {
    return (
      <>
        <Grid>{numResult} {dashboard.result_found}</Grid>
        <MovieTable list={list} />
      </>
    );
  };

  return (
    <Grid>
      <Grid className='dashboard--page-title'>{dashboard.title}</Grid>
      <Search init={initList} onSearch={setListNew} />
      {numResult !== 0 ? hasResult() : noResult()}
      <Login />
    </Grid>
  );
}

export default Dashboard;