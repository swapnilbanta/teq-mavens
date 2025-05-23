import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RecentOrders() {
  const orders = [
    {
      id: "275936",
      quantity: "x1",
      product: "iPhone 15 pro max",
      channel: "eBay",
      channelColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      customer: "Gabriela Golden",
      customerAvatar: "GG",
      total: "$400.00",
      delivery: "Today",
      status: "confirmed",
    },
    {
      id: "415368",
      quantity: "x1",
      product: "White Denim Tank Men",
      channel: "Walmart",
      channelColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      customer: "Harris Santana",
      customerAvatar: "HS",
      total: "$151.00",
      delivery: "Today",
      status: "confirmed",
    },
    {
      id: "275063",
      quantity: "x2",
      product: "David Beckham classic",
      channel: "Facebook",
      channelColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      customer: "Lila Ponce",
      customerAvatar: "LP",
      total: "$167.00",
      delivery: "Tomorrow",
      status: "pending",
    },
    {
      id: "274778",
      quantity: "x3",
      product: "Samsung I-20 series",
      channel: "Amazon",
      channelColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      customer: "Rehan Chase",
      customerAvatar: "RC",
      total: "$267.00",
      delivery: "Tomorrow",
      status: "pending",
    },
    {
      id: "638032",
      quantity: "x5",
      product: "Nykaa Red lipstick",
      channel: "Etsy",
      channelColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      customer: "Maxim Bray",
      customerAvatar: "MB",
      total: "$319.00",
      delivery: "05/01/2023",
      status: "delivered",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Order ID
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Products
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Customer
              </th>
              <th className="text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Channel
              </th>
              <th className="text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Total
              </th>
              <th className="text-right text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-3 px-4">
                Delivery
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="py-4 px-4">
                  <span className="font-medium text-gray-900 dark:text-white">{order.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt={order.product}
                        width={32}
                        height={32}
                        className="rounded"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{order.quantity}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-32">{order.product}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-gray-200 dark:bg-gray-700">
                        {order.customerAvatar}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{order.customer}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <Badge variant="secondary" className={`${order.channelColor} font-medium`}>
                    {order.channel}
                  </Badge>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-semibold text-gray-900 dark:text-white">{order.total}</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{order.delivery}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          variant="outline"
          size="sm"
          className="text-purple-600 border-purple-200 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-800 dark:hover:bg-purple-900/20"
        >
          View 256 more orders
          <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full">
            →
          </span>
        </Button>
      </div>
    </div>
  )
}
