import { Button } from "@mui/material"
import Typography from '@mui/material/Typography';
import { useState } from 'react';
const Header = ({title, onAdd}) => {
  const[shown, setShown] = useState(false)

  const onClick = (e) => {
    e.preventDefault();
    setShown(!shown);
    onAdd();
  }

  return (
    <header className = 'header'>
      <Typography variant='h3'>{title}</Typography>
      <Button variant="contained" onClick = {onClick} >{shown?"Collapse":"Expand"}</Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Habit Tracker',
}


export default Header