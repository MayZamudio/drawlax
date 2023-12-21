import { IconButton, Typography, Box, Stack } from '@mui/material'
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined'
import '../../App.css'

export default function RedoTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <RedoOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Redo</small>
        </Typography>
      </Stack>
    </Box>
  )
}
