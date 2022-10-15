import { useState } from "react"

const AddHabit = ({onAdd}) => {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text){
      alert('Please add a habit')
      return
    }

    //onAdd({text, description, day, time})

    console.log(text)
    console.log(description)
    console.log(day)
    console.log(time)
    setText('')
    setDescription('')
    setDay('')
    setTime('')
    



  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Habit</label>
        <input type='text' placeholder='Add Habit' value = {text} onChange = 
        {(e) => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input type='text' placeholder='Add Description' value = {description} onChange = 
        {(e) => setDescription(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day</label>
        <input type='text' placeholder='Add Day' value = {day} onChange = 
        {(e) => setDay(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Time</label>
        <input type='text' placeholder='AddTime' value = {time} onChange = 
        {(e) => setTime(e.target.value)}/>
      </div>
      <input type='submit' value='Save Habit' className='btn btn-block'/>
    </form>
  )
}

export default AddHabit