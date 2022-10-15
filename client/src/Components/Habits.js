import Habit from "./Habit"

const Habits = ({habits, onDelete, onToggle}) => {
  
  return (
    <>
      {habits.map((habit) => (
        <Habit key = {habit.id} task={habit} 
        onDelete = {onDelete} 
        onToggle = {onToggle}/>))
      }
    </>
  )
}

export default Habits