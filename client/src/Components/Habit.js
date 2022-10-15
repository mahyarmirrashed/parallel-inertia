import { Button, Checkbox, Typography, Grid, Card, CardHeader, CardContent } from "@mui/material" 

const Habit = ({habit, onDelete}) => {
  return (

    <div className={`habit`}>
      <Card style={{padding: 8, marginTop: 16, marginBottom: 16}}>
        <CardHeader title={habit.text}/>
        <CardContent>
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
              <Button variant="text" onClick = {() => onDelete(habit.text)} >Delete</Button>
            </Grid>
            </Typography>
          <Typography>Time: {habit.time}</Typography>
          <Typography>Description: {habit.description}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Habit