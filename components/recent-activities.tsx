import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: "Christian Wood",
      action: "Sent Message to Nisha Houston",
      time: "1 min ago",
      avatar: "CW",
      avatarColor: "bg-orange-500",
      type: "message",
    },
    {
      id: 2,
      user: "Nisha Houston",
      action: 'Reply your message "Hello"',
      time: "1 min ago",
      avatar: "NH",
      avatarColor: "bg-blue-500",
      type: "reply",
    },
    {
      id: 3,
      user: "Christian Wood",
      action: "Accept Order from Ebay",
      time: "1 min ago",
      avatar: "CW",
      avatarColor: "bg-orange-500",
      type: "order",
    },
    {
      id: 4,
      user: "Rohan Walker",
      action: "Reply your message Ebay",
      time: "1 min ago",
      avatar: "RW",
      avatarColor: "bg-green-500",
      type: "reply",
    },
    {
      id: 5,
      user: "Rohan Walker",
      action: "Reply your message Ebay",
      time: "1 min ago",
      avatar: "RW",
      avatarColor: "bg-green-500",
      type: "reply",
    },
  ]

  const yesterdayActivities = [
    {
      id: 6,
      user: "Christian Wood",
      action: "Accept Order from Amazon",
      time: "12:30PM",
      avatar: "CW",
      avatarColor: "bg-orange-500",
      type: "order",
    },
  ]

  const olderActivities = [
    {
      id: 7,
      user: "Christian Wood",
      action: "Accept Order from Walmart",
      time: "11:20AM",
      avatar: "CW",
      avatarColor: "bg-orange-500",
      type: "order",
    },
  ]

  const ActivityItem = ({ activity }: { activity: any }) => (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
      <Avatar className={`h-8 w-8 text-white text-xs ${activity.avatarColor} ring-2 ring-white dark:ring-gray-800`}>
        <AvatarFallback className={activity.avatarColor}>{activity.avatar}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-white">
          <span className="font-medium">{activity.user}</span> {activity.action}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
      </div>
    </div>
  )

  return (
    <div className="space-y-6 max-h-96 overflow-y-auto">
      <div>
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">TODAY</h4>
        <div className="space-y-1">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          YESTERDAY
        </h4>
        <div className="space-y-1">
          {yesterdayActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          25 MAY 2024
        </h4>
        <div className="space-y-1">
          {olderActivities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  )
}
