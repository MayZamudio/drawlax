import * as React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderAppBar from './components/HeaderAppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import ToolBox from './components/ToolBox'
import CursorTool from './components/toolButtons/CursorTool'
import DrawingCanvas from './components/DrawingCanvas'
import Typography from '@mui/material/Typography'
import TOOLS from './assets/constants'

function Canvas() {
  // this is to keep track of the selected tool from the tool bar
  // we can pass in the setTool fn as part of the props for the ToolBox component to use and update whatever tool was selected
  // we can pass in the tool state as part of the props for the DrawingCanvas component to use
  const [tool, setTool] = useState(TOOLS.cursor)
  const [toolColor, setToolColor] = useState('#026E78')
  const [isFilled, setisFilled] = useState('false')

  return (
    <div
      style={{
        backgroundColor: '#D9D9D9',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <CssBaseline />
      <HeaderAppBar />
      <Grid container style={{ height: 'calc(100vh - 64px)' }}>
        <Grid item xs={12}>
          <ToolBox setTool={setTool} isFilled={isFilled} />
        </Grid>
        <Grid item xs={12}>
          <DrawingCanvas tool={tool} toolColor={toolColor} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Canvas
