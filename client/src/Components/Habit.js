
const Habit = ({habit, onDelete}) => {
  return (
    <div className={`habit`}>
      <h3>{habit.text}</h3>
      <h4>{habit.day} at { habit.time}</h4>
      <p>{habit.description}</p>
    </div>
  )
}

export default Habit