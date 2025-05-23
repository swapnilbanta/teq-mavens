import { Mail, Phone, MessageSquare, Calendar, Save } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function AccountSidebar() {
  return (
    <div className="p-6 space-y-6">
      {/* Profile Section */}
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 ring-2 ring-purple-100 dark:ring-purple-900">
            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold">
              TG
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-semibold text-gray-900 dark:text-white">Truck Grear</h2>
              <Badge
                variant="secondary"
                className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-xs"
              >
                BUSINESS
              </Badge>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">info@onechanneladmin.com</p>
            <Button variant="link" size="sm" className="h-auto p-0 text-xs text-blue-600 dark:text-blue-400 mt-1">
              Change Status
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Mail, label: "Email", color: "text-blue-600" },
            { icon: Phone, label: "Call", color: "text-green-600" },
            { icon: MessageSquare, label: "Message", color: "text-purple-600" },
            { icon: Calendar, label: "Calendar", color: "text-orange-600" },
          ].map(({ icon: Icon, label, color }) => (
            <Button
              key={label}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center p-3 h-auto hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              <Icon className={`h-5 w-5 mb-1 ${color}`} />
              <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Business Details Form */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white">Business Details</h3>
          <Button size="sm" className="h-8 bg-green-600 hover:bg-green-700 text-white">
            <Save className="h-3 w-3 mr-1" />
            Save
          </Button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Account Name</label>
            <Input
              defaultValue="TRUCK GREAR"
              className="h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <Input
              defaultValue="Info@Onechanneladmin.Com"
              className="h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Numbers</label>
            <div className="space-y-3">
              {[1, 2].map((index) => (
                <div key={index} className="flex gap-2">
                  <Select defaultValue="us">
                    <SelectTrigger className="w-20 h-10 bg-gray-50 dark:bg-gray-800">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">🇺🇸 US</SelectItem>
                      <SelectItem value="uk">🇬🇧 UK</SelectItem>
                      <SelectItem value="ca">🇨🇦 CA</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    defaultValue="+1 344 434 4455"
                    className="h-10 flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-10 px-3 text-xs text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Owner</label>
            <Select defaultValue="suchit">
              <SelectTrigger className="h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suchit">Suchitkumar@Onechanneladmin.Com</SelectItem>
                <SelectItem value="other">Other Contact</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
