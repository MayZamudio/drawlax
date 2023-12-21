import { IconButton, Typography, Box, Stack } from '@mui/material'
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined'
import Tooltip from '@mui/material/Tooltip'
import '../../App.css'

export default function UndoTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <UndoOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Undo</small>
        </Typography>
      </Stack>
    </Box>
  )
}
