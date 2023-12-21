import { IconButton, Typography, Box, Stack } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { useNavigate } from 'react-router-dom'
import '../../App.css'

export default function HomeTool() {
  const navigate = useNavigate()

  function handleClick(event) {
    navigate('/')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={-1}>
        <IconButton onClick={handleClick}>
          <ArrowBackIosNewOutlinedIcon
            fontSize="small"
            className="tool-icons"
          />
        </IconButton>
        <Typography className="tool-icons">
          <small>Home</small>
        </Typography>
      </Stack>
    </Box>
  )
}
