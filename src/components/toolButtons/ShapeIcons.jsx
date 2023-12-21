import {
  IconButton,
  Typography,
  Box,
  Stack,
  Paper,
  Grid,
  Icon,
} from '@mui/material'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import Colorful from '@uiw/react-color-colorful'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import '../../App.css'
//
export default function ShapeIcons() {
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="subtitle2">Choose Color:</Typography>
      </Grid>
      <Grid item>
        <Colorful
          color={selectedColor}
          disableAlpha
          onChange={(color) => setSelectedColor(color.hex)}
        />
      </Grid>
      <Grid item mt={1}>
        <Typography variant="body2">Choose shape:</Typography>
        <Grid item>
          <IconButton>
            <CircleOutlinedIcon className="tool-icons" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <CircleOutlinedIcon className="tool-icons" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}
