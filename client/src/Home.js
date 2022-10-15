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
import AddHabit from './Components/AddHabit';
import Habits from './Components/Habits';
import Header from './Components/Header';



const Home = () => {
  const[showAddHabit, setShowAddHabit] = useState(false)
  const [habits, setHabits] = useState([
  ])

  const addHabit = (habit) =>{
    var setHabit = true
    habits.forEach((e) => {
      if(habit.text === e.text){
        alert("Habits must have unique names")
        setHabit = false
      }
    })
    if(setHabit)
      setHabits([...habits, habit])
  }

  const deleteHabit = (text) => {
    setHabits(habits.filter((habits) => habits.text !== text))
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
        <Paper elevation = {10} style={{padding: 8, marginTop: 16, marginBottom: 16}}>
            <Header onAdd={() => setShowAddHabit(!showAddHabit)}
            showAdd = {showAddHabit}/>
            {showAddHabit ?
            <AddHabit onAdd = {addHabit}/>:''}
        </Paper>
        <Paper elevation = {10} style={{padding: 8, marginTop: 16, marginBottom: 16}}>
            <Habits habits = {habits}
            onDelete = {deleteHabit}/>
        </Paper>
    </Container>
    )
  };
  
  export default Home;