"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function OrderStatus() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  const data = [
    { label: "All", value: 50, color: "#6366f1", icon: "📊" },
    { label: "New", value: 50, color: "#3b82f6", icon: "🆕" },
    { label: "Pending", value: 50, color: "#8b5cf6", icon: "⏳" },
    { label: "Dispatched", value: 50, color: "#ec4899", icon: "🚚" },
    { label: "Delivered", value: 123, color: "#10b981", icon: "✅" },
    { label: "Cancelled", value: 50, color: "#ef4444", icon: "❌" },
  ]

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 200
    canvas.height = 200

    const total = data.reduce((sum, item) => sum + item.value, 0)
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 80
    const innerRadius = 50

    let startAngle = 0

    // Draw segments
    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center text
    ctx.fillStyle = theme === "dark" ? "#ffffff" : "#000000"
    ctx.font = "bold 28px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(total.toString(), centerX, centerY)
  }, [theme])

  return (
    <div className="space-y-6">
      {/* Chart */}
      <div className="flex justify-center">
        <canvas ref={canvasRef} className="max-w-full h-auto"></canvas>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
            <div className="w-4 h-4 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }}></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
