import { Button } from "@mui/material"
const Header = ({title, onAdd}) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button variant="text" onClick = {onAdd} >Add</Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Habit Tracker',
}


export default Header