import { IconButton, Typography, Box, Stack } from '@mui/material'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import '../../App.css'

export default function ExportTool() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton>
          <FileUploadOutlinedIcon fontSize="small" className="tool-icons" />
        </IconButton>
        <Typography className="tool-icons">
          <small>Export</small>
        </Typography>
      </Stack>
    </Box>
  )
}
