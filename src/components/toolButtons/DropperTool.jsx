import { IconButton, Typography, Box, Stack } from '@mui/material'
import ColorizeOutlinedIcon from '@mui/icons-material/ColorizeOutlined'
import '../../App.css'

export default function DropperTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <ColorizeOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Dropper</small>
        </Typography>
      </Stack>
    </Box>
  )
}
