// found this awesome library: https://konvajs.org/docs/react/index.html
// this code was inspired by their free drawing demo: https://konvajs.org/docs/react/Free_Drawing.html

import React from 'react'
import { Stage, Layer, Line, Text, Circle } from 'react-konva'
import TOOLS from '../assets/constants'

export default function DrawingCanvas(props) {
  const tool = props.tool
  const toolColor = props.toolColor
  const isFilled = props.isFilled
  const [lines, setLines] = React.useState([])
  const isDrawing = React.useRef(false)
  const stageRef = React.useRef()

  const handleMouseDown = (e) => {
    isDrawing.current = true
    const pos = e.target.getStage().getPointerPosition()
    setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    const point = stage.getPointerPosition()
    let lastLine = lines[lines.length - 1]
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // replace last
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  const handleFilledCircle = (color) => {
    return (
      <>
      <Circle x={200} y={100} radius={50} fill={color} />
      </>
    )
  };

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        style={{
          border: '1px solid #BEBEBE',
          backgroundColor: 'white',
          margin: '50px 50px 50px 50px',
        }}
        ref={stageRef}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={toolColor}
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === TOOLS.eraser ? 'destination-out' : 'source-over'
              }
            />
          ))}
        {tool === TOOLS.filledCircle ? (<Circle x={200} y={100} radius={50} fill={toolColor} />) : null}
        {tool === TOOLS.outlinedCircle ? <Circle x={200} y={300} radius={50} stroke={toolColor} /> : null}
        </Layer>
      </Stage>
    </>
  )
}
