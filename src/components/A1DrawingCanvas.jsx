// followed this useful tutorial on how to use the HTML Canvas element with React: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import React, { useRef, useEffect, useState } from 'react'

export default function DrawingCanvas(props) {
  const [mouseData, setMouseData] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)
  const [canvasCTX, setCanvasCTX] = useState(null)
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState(10)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    setCanvasCTX(ctx)
  }, [canvasRef])

  const SetPos = (e) => {
    setMouseData({
      x: e.clientX,
      y: e.clientY,
    })
  }

  const Draw = (e) => {
    if (e.buttons !== 1) return
    const ctx = canvasCTX
    ctx.beginPath()
    ctx.moveTo(mouseData.x, mouseData.y)
    setMouseData({
      x: e.clientX,
      y: e.clientY,
    })
    ctx.lineTo(e.clientX, e.clientY)
    ctx.strokeStyle = color
    ctx.lineWidth = size
    // Set the line cap to round
    ctx.lineCap = 'round'
    ctx.stroke()
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseEnter={(e) => SetPos(e)}
        onMouseMove={(e) => {
          SetPos(e)
          Draw(e)
        }}
        onMouseDown={(e) => SetPos(e)}
      ></canvas>

      <div
        className="controlpanel"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
        }}
      >
        <input
          type="range"
          value={size}
          max={40}
          onChange={(e) => {
            setSize(e.target.value)
          }}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
          }}
        />
        <button
          onClick={() => {
            const ctx = canvasCTX
            ctx.clearRect(
              0,
              0,
              canvasRef.current.width,
              canvasRef.current.height
            )
          }}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
