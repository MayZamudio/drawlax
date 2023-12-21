import { IconButton, Typography, Box, Stack } from '@mui/material'
import CropFreeIcon from '@mui/icons-material/CropFree'
import '../../App.css'

export default function SelectTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <CropFreeIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Select</small>
        </Typography>
      </Stack>
    </Box>
  )
}
