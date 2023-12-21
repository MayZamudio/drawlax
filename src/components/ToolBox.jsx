import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton' // this for the logo picture
import { Grid } from '@mui/material'
import CursorTool from './toolButtons/CursorTool'
import SelectTool from './toolButtons/SelectTool'
import PencilTool from './toolButtons/PencilTool'
import BrushTool from './toolButtons/BrushTool'
import EraseTool from './toolButtons/EraseTool'
import FillTool from './toolButtons/FillTool'
import ShapeTool from './toolButtons/ShapeTool'
import RotateTool from './toolButtons/RotateTool'
import UndoTool from './toolButtons/UndoTool'
import RedoTool from './toolButtons/RedoTool'
import ExportTool from './toolButtons/ExportTool'
import HomeTool from './toolButtons/HomeTool'

export default function ToolBox(props) {
  const setTool = props.setTool
  const setIsFilled = props.setisFilled


  return (
    <AppBar
      style={{
        backgroundColor: '#EAEAEA',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
      position="relative"
    >
      <Toolbar>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs>
            <HomeTool />
          </Grid>
          <Grid item xs>
            <CursorTool />
          </Grid>
          <Grid item xs>
            <SelectTool />
          </Grid>
          <Grid item xs>
            <PencilTool setTool={setTool} />
          </Grid>
          <Grid item xs>
            <BrushTool setTool={setTool} />
          </Grid>
          <Grid item xs>
            <EraseTool setTool={setTool} />
          </Grid>
          <Grid item xs>
            <FillTool />
          </Grid>
          <Grid item xs>
            <ShapeTool setTool={setTool} setIsFilled={setIsFilled} />
          </Grid>
          <Grid item xs>
            <RotateTool />
          </Grid>
          <Grid item xs>
            <UndoTool />
          </Grid>
          <Grid item xs>
            <RedoTool />
          </Grid>
          <Grid item xs>
            <ExportTool />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
