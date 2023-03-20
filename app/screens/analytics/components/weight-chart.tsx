import React from "react"
import { VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from "victory-native"

export const WeightChart = () => {
  return (
    <VictoryChart
      theme={{
        ...VictoryTheme.grayscale,
        axis: {
          ...VictoryTheme.grayscale.axis,
          style: {
            ...VictoryTheme.grayscale.axis.style,
            axis: {
              ...VictoryTheme.grayscale.axis.style.axis,
              stroke: "#fff",
            },
            // @ts-ignore
            tickLabels: {
              ...VictoryTheme.grayscale.axis.style.tickLabels,
              fill: "#fff",
            },
          },
        },
      }}
    >
      <VictoryLabel text="Weight progress" style={$chartTitle} x={10} y={10} />
      <VictoryLine
        style={{
          data: { stroke: "#ffffff" },
          parent: { border: "1px solid #fff" },
        }}
        data={[
          { x: 1, y: 65 },
          { x: 2, y: 64 },
          { x: 3, y: 63.5 },
          { x: 4, y: 62 },
          { x: 5, y: 61 },
          { x: 6, y: 62 },
          { x: 7, y: 62 },
        ]}
      />
    </VictoryChart>
  )
}

const $chartTitle = { fill: "#fff" }
