
const Habit = ({habit, onDelete, onToggle}) => {
  return (
    <div className={`habit ${habit.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(habit.id)}>
      <h3>{habit.text}</h3>
      <p>{habit.day}</p>
    </div>
  )
}

export default Habit