import { IconButton, Typography, Box, Stack, Paper, Grid } from '@mui/material'
import AutoFixOffOutlinedIcon from '@mui/icons-material/AutoFixOffOutlined'
import Tooltip from '@mui/material/Tooltip'
import Slider from '@mui/material/Slider'
import '../../App.css'
import TOOLS from '../../assets/constants'

export default function EraseTool(props) {
  const setTool = props.setTool

  const handleClick = () => {
    setTool(TOOLS.eraser)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tooltip
        title={
          <Paper sx={{ p: 2, backgroundColor: 'white', color: 'black' }}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="subtitle2">Choose size:</Typography>
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
            <AutoFixOffOutlinedIcon fontSize="small" className="tool-icons" />
          </IconButton>
          <Typography className="tool-icons">
            <small>Eraser</small>
          </Typography>
        </Stack>
      </Tooltip>
    </Box>
  )
}
