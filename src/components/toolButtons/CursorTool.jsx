import { IconButton, Typography, Box, Stack } from '@mui/material'
import PanToolIcon from '@mui/icons-material/PanTool'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined'
import '../../App.css'

export default function CursorTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <PanToolOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Pan</small>
        </Typography>
      </Stack>
    </Box>
  )
}
