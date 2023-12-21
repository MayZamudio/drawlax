import { IconButton, Typography, Box, Stack, Paper, Grid } from '@mui/material'
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'
import Colorful from '@uiw/react-color-colorful'
import '../../App.css'

export default function FillTool() {
  const [selectedColor, setSelectedColor] = useState('#026E78')
  return (
    <Box sx={{ width: '100%' }}>
      <Tooltip
        title={
          <Paper sx={{ p: 2, backgroundColor: 'white', color: 'black' }}>
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
            </Grid>
          </Paper>
        }
        arrow
      >
        <Stack spacing={-1}>
          <IconButton>
            <FormatColorFillOutlinedIcon
              fontSize="small"
              className="tool-icons"
            />
          </IconButton>
          <Typography className="tool-icons">
            <small>Fill</small>
          </Typography>
        </Stack>
      </Tooltip>
    </Box>
  )
}
