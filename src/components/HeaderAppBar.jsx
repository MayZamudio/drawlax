import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton' // this for the logo picture
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import logo from '../assets/drawlax-logo.png'
import { useNavigate } from 'react-router-dom'

export default function HeaderAppBar() {
  const navigate = useNavigate()

  function handleClick(event) {
    navigate('/')
  }

  return (
    <AppBar
      style={{ backgroundColor: '#F0F2F3', boxShadow: 'none' }}
      position="sticky"
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            <Button onClick={handleClick} variant="text">
              <img src={logo} style={{ width: '50px', height: 'auto' }} />
            </Button>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
