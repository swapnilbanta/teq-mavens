"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function RevenueChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = 400
    ctx.scale(2, 2)

    const data = [
      { month: "Jan", value: 389.12 },
      { month: "Feb", value: 840.3 },
      { month: "Mar", value: 898.0 },
      { month: "Apr", value: 203.0 },
      { month: "May", value: 400.01 },
      { month: "Jun", value: 920.12 },
      { month: "Jul", value: 398.0 },
      { month: "Aug", value: 582.0 },
      { month: "Sep", value: 330.0 },
      { month: "Oct", value: 910.0 },
      { month: "Nov", value: 410.12 },
      { month: "Dec", value: 840.3 },
    ]

    const maxValue = Math.max(...data.map((item) => item.value))
    const padding = 50
    const chartWidth = canvas.width / 2 - padding * 2
    const chartHeight = canvas.height / 2 - padding * 2
    const barWidth = chartWidth / data.length - 8

    ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2)

    // Draw grid lines
    const gridLines = 5
    for (let i = 0; i <= gridLines; i++) {
      const y = padding + (chartHeight / gridLines) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(padding + chartWidth, y)
      ctx.strokeStyle = theme === "dark" ? "#374151" : "#f3f4f6"
      ctx.lineWidth = 1
      ctx.stroke()

      // Y-axis labels
      const value = Math.round((maxValue / gridLines) * (gridLines - i))
      ctx.fillStyle = theme === "dark" ? "#9ca3af" : "#6b7280"
      ctx.font = "12px Arial"
      ctx.textAlign = "right"
      ctx.fillText(value.toString(), padding - 10, y + 4)
    }

    // Draw bars
    data.forEach((item, index) => {
      const x = padding + index * (barWidth + 8)
      const barHeight = (item.value / maxValue) * chartHeight
      const y = padding + chartHeight - barHeight

      // Create gradient
      const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight)
      gradient.addColorStop(0, "#8b5cf6")
      gradient.addColorStop(1, "#6366f1")

      // Draw bar
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw value on top
      ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#4b5563"
      ctx.font = "10px Arial"
      ctx.textAlign = "center"
      ctx.fillText(`$${item.value.toFixed(0)}`, x + barWidth / 2, y - 5)

      // Draw month label
      ctx.fillStyle = theme === "dark" ? "#9ca3af" : "#6b7280"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText(item.month, x + barWidth / 2, padding + chartHeight + 20)
    })

    // Draw year indicator
    ctx.fillStyle = theme === "dark" ? "#6b7280" : "#9ca3af"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"
    ctx.fillText("• 2023", canvas.width / 4, padding + chartHeight + 40)
  }, [theme])

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full h-48 rounded-lg" style={{ maxHeight: "200px" }} />
    </div>
  )
}
