import { Checkbox, Grid, TextField } from "@mui/material"
import { useState } from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AddHabit = ({onAdd}) => {

  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState(new Array(7).fill(false))
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [time, setTime] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('Please add a habit')
      return
    }

    onAdd({text, description, monday, tuesday, wednesday, thursday, friday, saturday, sunday, time})

    
    setText('')
    setDescription('')
    setMonday(false)
    setTuesday(false)
    setWednesday(false)
    setThursday(false)
    setFriday(false)
    setSaturday(false)
    setSunday(false)
    setTime('')
    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <TextField id="Habit" label="Habit Name" margin='normal' MarginLeft={10} value = {text} onChange = 
        {(e) => setText(e.target.value)}/><br/>
      <TextField id="Description" label="Description" margin='normal' value = {description} onChange = 
        {(e) => setDescription(e.target.value)}/><br/><br/>
      <Grid container spacing={2}>
        <Typography variant='p'>
          &emsp; Select Days:  
        </Typography>
        <p> M:</p>
        <Checkbox label = 'monday' onChange = {(e) => setMonday(e.target.checked)}/>
        <p>T:</p>
        <Checkbox label = 'tuesday' onChange = {(e) => setTuesday(e.target.checked)}/>
        <p>W:</p>
        <Checkbox label = 'wednesday ' onChange = {(e) => setWednesday(e.target.checked)}/>
        <p>R:</p>
        <Checkbox label = 'thursday' onChange = {(e) => setThursday(e.target.checked)}/>
        <p>F:</p>
        <Checkbox label = 'friday' onChange = {(e) => setFriday(e.target.checked)}/>
        <p>S:</p>
        <Checkbox label = 'saturday' onChange = {(e) => setSaturday(e.target.checked)}/>
        <p>U:</p>
        <Checkbox label = 'sunday' onChange = {(e) => setSunday(e.target.checked)}/>
      </Grid>
      <TextField id="Time" label="Time" margin='normal' value = {time} onChange = 
        {(e) => setTime(e.target.value)}/><br/>
      
      <Button type='submit' value='Save Habit' variant="contained" onclick={onSubmit}>Save Habit</Button>
    </form>
  )
}

export default AddHabit