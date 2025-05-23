import { TrendingUp, TrendingDown } from "lucide-react"

export default function StatsCards() {
  const stats = [
    {
      title: "Total Orders",
      value: "123",
      change: "+25%",
      trend: "up",
      period: "From The Last Month",
      icon: "📦",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Total Taken",
      value: "123",
      change: "+15%",
      trend: "up",
      period: "From The Last Month",
      icon: "👥",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Total Revenue",
      value: "$1,234.99",
      change: "+28%",
      trend: "up",
      period: "From The Last Month",
      icon: "💰",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Pending Orders",
      value: "$1,234.99",
      change: "+28%",
      trend: "up",
      period: "From The Last Month",
      icon: "⏳",
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Pending Returns",
      value: "$1,234.99",
      change: "-5%",
      trend: "down",
      period: "From The Last Month",
      icon: "🔄",
      color: "from-red-500 to-red-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl border-0 shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm`}
            >
              <span className="text-xl">{stat.icon}</span>
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === "up"
                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              {stat.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {stat.change}
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{stat.period}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
