import {
  IconButton,
  Typography,
  Box,
  Stack,
  Paper,
  Grid,
  Icon,
  Switch,
} from '@mui/material'
import InterestsIcon from '@mui/icons-material/Interests'
import Tooltip from '@mui/material/Tooltip'
import { teal } from '@mui/material/colors'
import { alpha, styled } from '@mui/material/styles'
import Colorful from '@uiw/react-color-colorful'
import { useState } from 'react'
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined'
import SquareIcon from '@mui/icons-material/Square'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import SignalCellular0BarOutlinedIcon from '@mui/icons-material/SignalCellular0BarOutlined'
import SignalCellular4BarOutlinedIcon from '@mui/icons-material/SignalCellular4BarOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined'
import HexagonIcon from '@mui/icons-material/Hexagon'
import PentagonOutlinedIcon from '@mui/icons-material/PentagonOutlined'
import PentagonIcon from '@mui/icons-material/Pentagon'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ModeCommentIcon from '@mui/icons-material/ModeComment'

import '../../App.css'
import TOOLS from '../../assets/constants'

export default function ShapeTool(props) {
  const setTool = props.setTool
  const setIsFilled = props.setIsFilled

  // const setToolColor = props.setToolColor 
  const [selectedColor, setSelectedColor] = useState('#026E78')
  const [solidIcons, setSolidIcons] = useState(false)

  // Source for PinkSwitch https://stackblitz.com/run?file=Demo.tsx,node_modules%2F%40mui%2Fmaterial%2Fcolors%2Findex.d.ts
  const TealSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: teal[800],
      '&:hover': {
        backgroundColor: alpha(teal[800], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: teal[800],
    },
  }))
  const handleIconToggle = () => {
    setSolidIcons((prevState) => !prevState)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tooltip
        title={
          <Paper sx={{ p: 2, backgroundColor: 'white', color: 'black' }}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="subtitle2">Choose color:</Typography>
              </Grid>
              <Grid item>
                <Colorful
                  color={selectedColor}
                  disableAlpha
                  onChange={(color) => {
                    setSelectedColor(color.hex)
                  }}
                />
              </Grid>
              <Grid item mt={1}>
                <Typography variant="body2">Choose shape:</Typography>
                <Stack direction="row" spacing={0} alignItems="center">
                  <Typography variant="caption">Stroke</Typography>
                  <TealSwitch
                    checked={solidIcons}
                    onChange={handleIconToggle}
                    inputProps={{ 'aria-label': 'toggle outlined/solid icons' }}
                  />
                  <Typography variant="caption">Fill</Typography>
                </Stack>

                {/* First Row */}
                <Grid item>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'SquareOutlinedIcon' with 'SquareIcon' */}
                        <SquareIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <SquareOutlinedIcon
                        fontSize="large"
                        className="tool-icons"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>

                  <IconButton onClick={() => {solidIcons ? setTool(TOOLS.filledCircle) : setTool(TOOLS.outlinedCircle)}}>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'CircleOutlinedIcon' with 'CircleIcon' */}
                        <CircleIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <CircleOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'SignalCellular0BarOutlinedIcon' with 'SignalCellular4BarOutlinedIcon' */}
                        <SignalCellular4BarOutlinedIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <SignalCellular0BarOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'FavoriteBorderIcon' with 'FavoriteIcon' */}
                        <FavoriteIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <FavoriteBorderIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                </Grid>

                {/* Second Row */}
                <Grid item>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'PentagonOutlinedIcon' with 'PentagonIcon' */}
                        <PentagonIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <PentagonOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'HexagonOutlinedIcon' with 'HexagonIcon' */}
                        <HexagonIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <HexagonOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'StarOutlineOutlinedIcon' with 'StarOutlinedIcon' */}
                        <StarOutlinedIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <StarOutlineOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                  <IconButton>
                    {solidIcons ? (
                      <Icon fontSize="large">
                        {/* Replace 'ModeCommentOutlinedIcon' with 'ModeCommentIcon' */}
                        <ModeCommentIcon
                          fontSize="large"
                          style={{ color: selectedColor }}
                        />
                      </Icon>
                    ) : (
                      <ModeCommentOutlinedIcon
                        fontSize="large"
                        style={{ color: selectedColor }}
                      />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        }
        arrow
      >
        <Stack spacing={-1}>
          <IconButton>
            <InterestsIcon fontSize="small" className="tool-icons" />
          </IconButton>
          <Typography className="tool-icons">
            <small>Shapes</small>
          </Typography>
        </Stack>
      </Tooltip>
    </Box>
  )
}
