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



const Home = () => {
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
            
        </Paper>
    </Container>
    )
  };
  
  export default Home;