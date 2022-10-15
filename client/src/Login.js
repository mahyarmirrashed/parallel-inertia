import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { maxHeight, padding, spacing } from '@mui/system';
//import axios from 'axios';
//import https from 'https';

const http = require('http');
//const axios = require('axios').default;
//var crypto = require('crypto');

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        let clean_username = username.trim();
        let clean_password = password.trim();

        //clean_password = crypto.createHash('sha256').update(clean_password).digest('base64')
        console.log(clean_password)
        const options = {
            hostname: 'localhost',
            port: 4000,
            path: '/login',
            method: 'POST',
            data: {
                username: clean_username,
                password: clean_password
            }
        }
        //Axios post
        /*axios.post('http://localhost:4000/login', {
              username: clean_username,
              password: clean_password
          })
          .then((response) => (console.log(response.data)))
        console.log("got here")*/

        // HTTP post
        /*http.request(options, (resp) => {
            console.log(resp)
        })*/
        window.close()
        window.open("/")
    }

    return (
    <Container maxWidth='lg'>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h3'>
              Parallel Inertia
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper elevation = {20}>
        <Box id='form' noValidate autoComplete='off' margin={2} padding={2}>
            <Typography variant='h4'>
              Login/Register Below
            </Typography>
            <div>
            <TextField
            id='username'
            label='Username'
            variant='outlined'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin='normal'
            />
            </div>
            <div>
            <TextField
            id='password'
            label='Password'
            variant='outlined'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
            />
            </div>
            <Button
            type='submit'
            variant='contained'
            margin='normal'
            onClick={onClick}>
            Go!
            </Button>
          </Box>
        </Paper>
    </Container>
    )
  };
  
  export default Login;