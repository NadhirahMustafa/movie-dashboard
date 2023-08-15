import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/Dashboard.scss';
import { Grid, TextField } from '@mui/material';
import Button from '../component/Button';

// Define the type for the props (if your modal needs any).
interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Set the app element to support accessibility (for screen readers).
Modal.setAppElement('#root');

const LoginPopup: React.FC<PopupModalProps> = ({ isOpen, onClose }) => {
  // const fs = require('fs-extra');

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useState([]);

  useEffect(() => {
    const fetchCredentials = async () => {
      try {
        const resp = await fetch('/dummy-data/admin.json');
        const data = await resp.json();
        setCredential(data);
      } catch (err) {
        console.error('Error: ', err);
      }
    };

    fetchCredentials();
  }, []);

  const handleUsername = (e: any) => {
    setInputUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setInputPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('check credentials');
    /* TODO: check credentials */
  };

  const handleAdd = () => {
    console.log('credential list: ', credential);
    if (credential.find((x: any) => x.username === inputUsername)) {
      alert('Username already exist!');
    } else {
      let newCred: any = credential;
      newCred.push({
        username: inputUsername,
        password: inputPassword
      })
      setCredential(newCred);
      console.log('new cred: ', credential);
      /* TODO: overwrite JSON */
      // var newData = JSON.stringify(credential);
      // fs.writeFile('data.json', newData, (err: any) => {
      //   // error checking
      //   if (err) throw err;

      //   console.log("New data added");
      // });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Modal"
    >
      <Grid className='search--padding'>
        <Grid container className='search--justify'>
          <Grid item className='search--textfield-padding'>
            Username:
            <TextField
              type="text"
              value={inputUsername}
              onChange={handleUsername}
              placeholder="username"
              size='small'
            />
            Password:
            <TextField
              type="password"
              value={inputPassword}
              onChange={handlePassword}
              placeholder="password"
              size='small'
            />
          </Grid>
          <Grid item className='search--button-padding'><Button className='search--button' onClick={handleLogin}>Login</Button></Grid>
          <Grid item><Button className='search--button' onClick={onClose}>Cancel</Button></Grid>
          <Grid item><Button className='search--button' onClick={handleAdd}>Add admin</Button></Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default LoginPopup;
