"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import { ProtectedRoute } from "@/components/protected-route"
import {
  BarChart3,
  Package,
  Receipt,
  Megaphone,
  Calculator,
  FileText,
  Zap,
  ArrowRight,
  Percent,
  Tag,
  Users,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState("promotions")
  const [costPrice, setCostPrice] = useState("")
  const [markup, setMarkup] = useState("")
  const [sellingPrice, setSellingPrice] = useState("0.00")
  const [profit, setProfit] = useState("0.00")

  const calculatePrice = () => {
    const cost = Number.parseFloat(costPrice) || 0
    const markupPercent = Number.parseFloat(markup) || 0
    const selling = cost * (1 + markupPercent / 100)
    const profitAmount = selling - cost

    setSellingPrice(selling.toFixed(2))
    setProfit(profitAmount.toFixed(2))
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-2">Business Tools</h1>
            <p className="text-muted-foreground text-lg">Powerful tools to manage and grow your business</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 rounded-2xl">
              <TabsTrigger value="promotions" className="rounded-xl">
                Promotions
              </TabsTrigger>
              <TabsTrigger value="calculator" className="rounded-xl">
                Calculator
              </TabsTrigger>
              <TabsTrigger value="inventory" className="rounded-xl">
                Inventory
              </TabsTrigger>
              <TabsTrigger value="ledger" className="rounded-xl">
                Ledger
              </TabsTrigger>
              <TabsTrigger value="reports" className="rounded-xl">
                Reports
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="promotions" className="mt-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Promotion Creator */}
                <Card className="lg:col-span-2 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Megaphone className="h-5 w-5 text-accent" />
                      Promotion Creator
                    </CardTitle>
                    <CardDescription>Create compelling promotions and marketing campaigns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="promo-title">Promotion Title</Label>
                        <Input id="promo-title" placeholder="Weekend Flash Sale" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discount">Discount Percentage</Label>
                        <div className="relative">
                          <Input id="discount" placeholder="20" className="pr-8 rounded-xl" />
                          <Percent className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="promo-description">Description</Label>
                      <Textarea
                        id="promo-description"
                        placeholder="Describe your promotion..."
                        className="min-h-[100px] rounded-xl"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="target-audience">Target Audience</Label>
                        <Input id="target-audience" placeholder="All customers" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration (days)</Label>
                        <Input id="duration" placeholder="7" className="rounded-xl" />
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        <Zap className="h-4 w-4 mr-2" />
                        Generate Promotion
                      </Button>
                      <Button variant="outline" className="rounded-xl bg-transparent">
                        Preview
                      </Button>
                    </div>

                    {/* Sample Generated Promotion */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl border border-accent/20">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className="bg-accent text-accent-foreground rounded-xl">AI Generated</Badge>
                        <Tag className="h-4 w-4 text-accent" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">🎉 Weekend Flash Sale - 20% Off Everything!</h3>
                      <p className="text-muted-foreground mb-3">
                        Don't miss out on incredible savings! Get 20% off all items in store this weekend only. Perfect
                        time to stock up on your favorites or try something new.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>📅 Valid: This Weekend</span>
                        <span>🎯 Target: All Customers</span>
                        <span>💰 Discount: 20%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions Sidebar */}
                <div className="space-y-6">
                  <Card className="rounded-2xl">
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link href="/chat">
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                          Ask Opous for Help
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                      <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                        <FileText className="h-4 w-4 mr-2" />
                        Save Template
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                        <Users className="h-4 w-4 mr-2" />
                        Customer Segments
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="calculator" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Business Calculator
                    </CardTitle>
                    <CardDescription>Calculate pricing, margins, and business metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Cost Price ($)</Label>
                      <Input
                        placeholder="0.00"
                        value={costPrice}
                        onChange={(e) => setCostPrice(e.target.value)}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Markup (%)</Label>
                      <Input
                        placeholder="50"
                        value={markup}
                        onChange={(e) => setMarkup(e.target.value)}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="p-4 bg-muted/50 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">Selling Price:</span>
                        <span className="font-bold text-lg">${sellingPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Profit:</span>
                        <span className="font-bold text-lg text-green-600">${profit}</span>
                      </div>
                    </div>
                    <Button onClick={calculatePrice} className="w-full rounded-xl">
                      Calculate
                    </Button>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Other Calculators</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Break-even Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      ROI Calculator
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <Percent className="h-4 w-4 mr-2" />
                      Discount Calculator
                    </Button>
                    <Link href="/chat">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        Ask Opous
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5" />
                      Inventory Management
                    </CardTitle>
                    <CardDescription>Monitor and manage your product inventory</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="rounded-2xl">
                        <CardContent className="p-4 text-center">
                          <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                          <p className="text-2xl font-bold">247</p>
                          <p className="text-sm text-muted-foreground">Total Products</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-2xl">
                        <CardContent className="p-4 text-center">
                          <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                          <p className="text-2xl font-bold">12</p>
                          <p className="text-sm text-muted-foreground">Low Stock</p>
                        </CardContent>
                      </Card>
                      <Card className="rounded-2xl">
                        <CardContent className="p-4 text-center">
                          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                          <p className="text-2xl font-bold">$24,567</p>
                          <p className="text-sm text-muted-foreground">Total Value</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Recent Inventory Actions</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                          <div>
                            <p className="font-medium">Product A - Restocked</p>
                            <p className="text-sm text-muted-foreground">Added 50 units</p>
                          </div>
                          <Badge variant="secondary" className="rounded-xl">
                            2h ago
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                          <div>
                            <p className="font-medium">Product B - Low Stock Alert</p>
                            <p className="text-sm text-muted-foreground">Only 5 units remaining</p>
                          </div>
                          <Badge variant="destructive" className="rounded-xl">
                            1d ago
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Inventory Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <Package className="h-4 w-4 mr-2" />
                      Add New Product
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Stock Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Low Stock Alerts
                    </Button>
                    <Link href="/chat">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        Ask Opous
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ledger" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Receipt className="h-5 w-5" />
                      Financial Overview
                    </CardTitle>
                    <CardDescription>Track your business finances</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-2xl">
                        <p className="text-sm text-green-600">Revenue</p>
                        <p className="text-2xl font-bold text-green-700">$12,847</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-2xl">
                        <p className="text-sm text-red-600">Expenses</p>
                        <p className="text-2xl font-bold text-red-700">$4,350</p>
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-2xl">
                      <p className="text-sm text-blue-600">Net Profit</p>
                      <p className="text-2xl font-bold text-blue-700">$8,497</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Ledger Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <Receipt className="h-4 w-4 mr-2" />
                      Add Transaction
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <FileText className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <DollarSign className="h-4 w-4 mr-2" />
                      Cash Flow Analysis
                    </Button>
                    <Link href="/chat">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        Ask Opous
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="mt-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Business Reports
                  </CardTitle>
                  <CardDescription>Generate comprehensive business reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-20 flex-col bg-transparent rounded-2xl">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      Sales Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent rounded-2xl">
                      <Package className="h-6 w-6 mb-2" />
                      Inventory Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent rounded-2xl">
                      <Receipt className="h-6 w-6 mb-2" />
                      Financial Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent rounded-2xl">
                      <Users className="h-6 w-6 mb-2" />
                      Customer Report
                    </Button>
                    <Button variant="outline" className="h-20 flex-col bg-transparent rounded-2xl">
                      <TrendingUp className="h-6 w-6 mb-2" />
                      Performance Report
                    </Button>
                    <Link href="/chat">
                      <Button className="h-20 flex-col bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl">
                        
                        Ask Opous
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Business Analytics
                    </CardTitle>
                    <CardDescription>Insights and trends for your business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-2xl">
                        <h3 className="font-semibold mb-2">Top Performing Products</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Wireless Headphones</span>
                            <span className="font-bold">23 sold</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Smartphone Case</span>
                            <span className="font-bold">18 sold</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-2xl">
                        <h3 className="font-semibold mb-2">Sales Trend</h3>
                        <p className="text-green-600">📈 +12.5% vs last month</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle>Analytics Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Dashboard
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Trend Analysis
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent rounded-xl">
                      <Users className="h-4 w-4 mr-2" />
                      Customer Insights
                    </Button>
                    <Link href="/chat">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl">
                        Ask Opous
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  )
}
