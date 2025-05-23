"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Bell, ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import StatsCards from "@/components/stats-cards"
import OrderStatus from "@/components/order-status"
import RecentActivities from "@/components/recent-activities"
import RecentOrders from "@/components/recent-orders"
import RevenueChart from "@/components/revenue-chart"
import AccountSidebar from "@/components/account-sidebar"
import { useMobile } from "@/hooks/use-mobile"

export default function CrmDashboard() {
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="flex h-16 items-center px-4 lg:px-6">
          <div className="flex items-center gap-3 mr-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-2 rounded-lg shadow-sm">
                <span className="font-bold text-sm">Q</span>
              </div>
              <span className="font-semibold text-xl text-gray-900 dark:text-white hidden md:inline-block">
                Quotient
              </span>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-start max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full bg-gray-50 dark:bg-gray-800 rounded-lg border-0 pl-10 pr-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:bg-white dark:focus:bg-gray-700 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </Button>

            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
              <Avatar className="h-9 w-9 ring-2 ring-purple-100 dark:ring-purple-900">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white font-medium">
                  MS
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Manu Sharma</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Super Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b px-4 lg:px-6 py-3">
        <div className="flex items-center text-sm">
          <span className="text-gray-500 dark:text-gray-400">CRM</span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">/</span>
          <span className="text-gray-500 dark:text-gray-400">Account</span>
          <span className="mx-2 text-gray-300 dark:text-gray-600">/</span>
          <span className="font-medium text-gray-900 dark:text-white">Account Details</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Sidebar Overlay for Mobile */}
        {sidebarOpen && isMobile && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <div
          className={`
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          fixed lg:relative z-50 lg:z-auto
          w-80 lg:w-80 h-full lg:h-auto
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
          transition-transform duration-300 ease-in-out
          overflow-y-auto
        `}
        >
          <div className="lg:hidden flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold text-gray-900 dark:text-white">Account Details</h2>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <AccountSidebar />
        </div>

        {/* Main Dashboard */}
        <div className="flex-1 p-4 lg:p-6 overflow-auto">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              <TabsTrigger
                value="dashboard"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
              >
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="credit-history">Credit History</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <StatsCards />

              {/* Charts Section */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Order Status */}
                <Card className="xl:col-span-1 shadow-sm border-0 bg-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        Order Status
                      </CardTitle>
                      <Select defaultValue="2023">
                        <SelectTrigger className="w-24 h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">2023</SelectItem>
                          <SelectItem value="2022">2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <OrderStatus />
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="xl:col-span-2 shadow-sm border-0 bg-white dark:bg-gray-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                        Recent Activities
                      </CardTitle>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          Message
                        </Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs">
                          Email
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <RecentActivities />
                  </CardContent>
                </Card>
              </div>

              {/* Recent Orders */}
              <Card className="shadow-sm border-0 bg-white dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</CardTitle>
                </CardHeader>
                <CardContent>
                  <RecentOrders />
                </CardContent>
              </Card>

              {/* Revenue Chart */}
              <Card className="shadow-sm border-0 bg-white dark:bg-gray-800">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-6">
                      <Button
                        variant="ghost"
                        className="text-sm font-medium border-b-2 border-purple-500 rounded-none px-0"
                      >
                        Revenue
                      </Button>
                      <Button variant="ghost" className="text-sm text-gray-500 rounded-none px-0">
                        Orders
                      </Button>
                      <Button variant="ghost" className="text-sm text-gray-500 rounded-none px-0">
                        Customers
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Select defaultValue="all">
                        <SelectTrigger className="w-40 h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Categories</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue="2023">
                        <SelectTrigger className="w-24 h-9">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2023">Jun 2023</SelectItem>
                          <SelectItem value="2022">Jun 2022</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex justify-end">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Total Revenue: <span className="font-bold text-gray-900 dark:text-white">$89,235.89</span>
                    </p>
                  </div>
                  <RevenueChart />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other Tab Contents */}
            {["orders", "address", "notes", "tasks", "contacts", "credit-history"].map((tab) => (
              <TabsContent key={tab} value={tab}>
                <Card className="shadow-sm border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📋</span>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")} Section
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        This section is under development. Content will be available soon.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  )
}
