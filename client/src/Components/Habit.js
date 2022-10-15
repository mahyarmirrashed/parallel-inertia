import { Button, Checkbox, Typography, Grid } from "@mui/material" 

const Habit = ({habit, onDelete}) => {
  return (
    
    <div className={`habit`}>
      <Typography variant="h5">{habit.text}</Typography>
      <Typography variant="h6">
        <Grid>
          M:
          <Checkbox checked = {habit.monday}></Checkbox>
          T:
          <Checkbox checked = {habit.tuesday}></Checkbox>
          W:
          <Checkbox checked = {habit.wednesday}></Checkbox>
          R:
          <Checkbox checked = {habit.thursday}></Checkbox>
          F:
          <Checkbox checked = {habit.friday}></Checkbox>
          S:
          <Checkbox checked = {habit.saturday}></Checkbox>
          U:
          <Checkbox checked = {habit.sunday}></Checkbox>
          <Button variant="text" onClick = {onDelete} >Delete</Button>
        </Grid>
        </Typography>
      <Typography>{habit.time}</Typography>
      <Typography>{habit.description}</Typography>
    </div>
  )
}

export default Habit