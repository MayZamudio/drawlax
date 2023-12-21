import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './assets/drawlax-logo.png'
import { Icon } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import './App.css'
//   Importing a logo source:
//   https://create-react-app.dev/docs/adding-images-fonts-and-files/
function Home() {
  const navigate = useNavigate()

  function handleClick(event) {
    navigate('/canvas')
  }

  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="gradient_background wrapper"
    >
      <img
        id="image"
        src={logo}
        alt="DrawLax Logo"
        style={{
          position: 'absolute',
          margin: 'auto',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
        }}
      />
      <button
        type="button"
        onClick={handleClick}
        style={{
          backgroundColor: '#026E78',
          color: 'white',
          borderRadius: '30px',
          width: '200px',
          boxShadow:
            '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
        }}
        className="myLayer"
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          Start Relaxing{' '}
          <Icon component={ArrowForwardIcon} style={{ marginLeft: '10px' }} />
        </span>
      </button>
    </div>
  )
}

export default Home
