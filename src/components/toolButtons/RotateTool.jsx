import { IconButton, Typography, Box, Stack } from '@mui/material'
import CropRotateOutlinedIcon from '@mui/icons-material/CropRotateOutlined'
import '../../App.css'

export default function ShapeTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <CropRotateOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Rotate</small>
        </Typography>
      </Stack>
    </Box>
  )
}
