import React, { useState } from 'react';
import Button from '../component/Button';
import '../styles/Dashboard.scss';
import { Grid } from '@mui/material';
import LoginPopup from './LoginPopup';

const Login = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <Grid className='search--padding'>
            <Grid container className='search--justify'>
                <Grid item><Button className='search--button' onClick={openModal}>Login</Button></Grid>
                <LoginPopup isOpen={isModalOpen} onClose={closeModal} />
            </Grid>
        </Grid>
    );
}

export default Login;
