import Habit from "./Habit"

const Habits = ({habits, onDelete}) => {
  
  return (
    <>
      {habits.map((habit) => (
        <Habit key = {habit.id} habit={habit} 
        onDelete = {onDelete} 
        />))
      }
    </>
  )
}

export default Habits