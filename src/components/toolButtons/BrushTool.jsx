import { IconButton, Typography, Box, Stack, Paper, Grid } from '@mui/material'
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import Colorful from '@uiw/react-color-colorful'
import Slider from '@mui/material/Slider'
import '../../App.css'
import TOOLS from '../../assets/constants'
// Source for color picker https://uiwjs.github.io/react-color/
//https://codesandbox.io/embed/react-color-example-rev1n?fontsize=14&hidenavigation=1&theme=dark
export default function BrushTool(props) {
  const setTool = props.setTool

  const handleClick = () => {
    setTool(TOOLS.brush)
  }
  const [selectedColor, setSelectedColor] = useState('#026E78')
  return (
    <Box sx={{ width: '100%' }}>
      <Tooltip
        title={
          <Paper sx={{ p: 2, backgroundColor: 'white', color: 'black' }}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="subtitle2">Choose color:</Typography>
              </Grid>
              <Grid item>
                <Colorful
                  color={selectedColor}
                  disableAlpha
                  onChange={(color) => setSelectedColor(color.hex)}
                />
              </Grid>
              <Grid item mt={1}>
                <Typography variant="body2">Choose thickness:</Typography>
                <Box sx={{ width: 200 }}>
                  <Slider
                    id="slider-color"
                    aria-label="Pressure"
                    defaultValue={10}
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={50}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        }
        arrow
      >
        <Stack spacing={-1}>
          <IconButton onClick={handleClick}>
            <BrushOutlinedIcon fontSize="small" className="tool-icons" />
          </IconButton>
          <Typography className="tool-icons">
            <small>Brush</small>
          </Typography>
        </Stack>
      </Tooltip>
    </Box>
  )
}
