"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProtectedRoute } from "@/components/protected-route"
import {
  ArrowLeft,
  ArrowUpIcon,Send,
  Sparkles,
  BarChart3,
  Package,
  Receipt,
  User,
  Mic,
  Paperclip,
  MoreVertical,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Calculator,
  TrendingUp,
  FileText,
} from "lucide-react"
import Link from "next/link"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  type?: "text" | "suggestion" | "data" | "tool"
}

const sampleQuestions = [
  "How many units of Product A are in stock?",
  "Show me this month's sales report",
  "Create a promotion for slow-moving items",
  "What's my current cash flow?",
  "Which products need reordering?",
  "Generate a discount campaign for loyal customers",
]

const businessTools = [
  {
    icon: Receipt,
    label: "Ledger Management",
    description: "Track finances and expenses",
    href: "/tools?tab=ledger",
    action: "ledger",
  },
  {
    icon: Package,
    label: "Inventory Control",
    description: "Monitor stock levels",
    href: "/tools?tab=inventory",
    action: "inventory",
  },
  {
    icon: BarChart3,
    label: "Promo Creator",
    description: "Generate marketing campaigns",
    href: "/tools?tab=promotions",
    action: "promotion",
  },
  {
    icon: Calculator,
    label: "Business Calculator",
    description: "Calculate margins and costs",
    href: "/tools?tab=calculator",
    action: "calculator",
  },
  {
    icon: TrendingUp,
    label: "Analytics",
    description: "View business insights",
    href: "/dashboard",
    action: "analytics",
  },
  {
    icon: FileText,
    label: "Reports",
    description: "Generate business reports",
    href: "/tools?tab=reports",
    action: "reports",
  },
]

const enhancedResponses = [
  {
    type: "inventory",
    content:
      "I found that Product A currently has 47 units in stock. The reorder threshold is set at 20 units, so you're well-stocked. The average daily sales for this product is 3 units, giving you approximately 15 days of inventory remaining.",
    suggestions: ["Open Inventory Tool", "Set up low stock alerts", "View sales history"],
    toolAction: "inventory",
  },
  {
    type: "sales",
    content:
      "Here's your sales summary for this month:\n\n📊 **Total Revenue**: $12,847 (+12.5% vs last month)\n📦 **Units Sold**: 342 items\n🏆 **Top Product**: Wireless Headphones (23 sold)\n📈 **Best Day**: Last Friday ($1,247)\n\nYour electronics category is performing exceptionally well this month!",
    suggestions: ["Open Analytics Tool", "View detailed report", "Export data"],
    toolAction: "analytics",
  },
  {
    type: "promotion",
    content:
      "I've analyzed your slow-moving inventory and created a targeted promotion:\n\n🎯 **'Clear the Shelves' Weekend Sale**\n💰 25% off items with <10 units sold this month\n📅 Duration: This weekend (Fri-Sun)\n🎪 Includes: Home decor, seasonal items, and select electronics\n\nThis promotion could help you move $2,400 worth of slow inventory while maintaining healthy margins.",
    suggestions: ["Open Promo Creator", "Apply promotion", "Modify discount"],
    toolAction: "promotion",
  },
  {
    type: "finance",
    content:
      "Your current financial health looks strong:\n\n💰 **Cash Flow**: +$8,450 this month\n📊 **Profit Margin**: 34.2% (above industry average)\n💳 **Outstanding Receivables**: $1,200\n📉 **Monthly Expenses**: $4,350\n\n⚠️ Note: You have a supplier payment of $2,100 due in 3 days.",
    suggestions: ["Open Ledger Tool", "Schedule payment", "Generate financial report"],
    toolAction: "ledger",
  },
  {
    type: "calculator",
    content:
      "I can help you with business calculations! Here are some common calculations I can perform:\n\n🧮 **Profit Margin**: Calculate your profit margins\n💰 **Break-even Analysis**: Find your break-even point\n📊 **ROI Calculator**: Calculate return on investment\n💵 **Pricing Strategy**: Optimize your pricing\n\nWhat would you like to calculate?",
    suggestions: ["Open Calculator Tool", "Calculate profit margin", "Pricing analysis"],
    toolAction: "calculator",
  },
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Opous, your AI business assistant. I can help you manage your ledgers, check inventory, create promotions, and answer any questions about your business operations. I also have access to powerful business tools that I can open for you. What would you like to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleToolAction = (action: string) => {
    const tool = businessTools.find((t) => t.action === action)
    if (tool) {
      window.open(tool.href, "_blank")
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      let response = enhancedResponses[Math.floor(Math.random() * enhancedResponses.length)]

      const input = inputValue.toLowerCase()
      if (input.includes("stock") || input.includes("inventory") || input.includes("product")) {
        response = enhancedResponses[0]
      } else if (input.includes("sales") || input.includes("report") || input.includes("revenue")) {
        response = enhancedResponses[1]
      } else if (
        input.includes("promotion") ||
        input.includes("discount") ||
        input.includes("sale") ||
        input.includes("marketing")
      ) {
        response = enhancedResponses[2]
      } else if (
        input.includes("cash") ||
        input.includes("finance") ||
        input.includes("money") ||
        input.includes("ledger")
      ) {
        response = enhancedResponses[3]
      } else if (
        input.includes("calculate") ||
        input.includes("margin") ||
        input.includes("profit") ||
        input.includes("cost")
      ) {
        response = enhancedResponses[4]
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: "assistant",
        timestamp: new Date(),
        type: "data",
      }

      setMessages((prev) => [...prev, assistantMessage])

      if (response.suggestions) {
        setTimeout(() => {
          const suggestionMessage: Message = {
            id: (Date.now() + 2).toString(),
            content: JSON.stringify({ suggestions: response.suggestions, toolAction: response.toolAction }),
            sender: "assistant",
            timestamp: new Date(),
            type: "suggestion",
          }
          setMessages((prev) => [...prev, suggestionMessage])
        }, 500)
      }

      setIsTyping(false)
    }, 1500)
  }

  const handleQuestionClick = (question: string) => {
    setInputValue(question)
    inputRef.current?.focus()
  }

  const handleSuggestionClick = (suggestion: string, toolAction?: string) => {
    if (suggestion.includes("Open") && suggestion.includes("Tool") && toolAction) {
      handleToolAction(toolAction)
    } else {
      setInputValue(suggestion)
      inputRef.current?.focus()
    }
  }

  return (
    <ProtectedRoute>
      <div className="h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm p-4 flex-shrink-0">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                
                <div>
                  <h1 className="font-display text-xl font-bold">Opous Assistant</h1>
                  <p className="text-xs text-muted-foreground">AI-Powered Business Helper</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="hidden sm:flex rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Online
              </Badge>
              <Button variant="ghost" size="sm" className="rounded-full">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Chat Area */}
        <div className="flex-1 flex max-w-6xl mx-auto w-full">
          {/* Sidebar with Tools */}
          <div className="hidden lg:block w-80 border-r border-border bg-muted/30 p-6">
            <h2 className="font-semibold text-lg mb-4">Business Tools</h2>
            <div className="space-y-3">
              {businessTools.map((tool, index) => (
                <Link key={index} href={tool.href}>
                  <Card className="cursor-pointer hover:bg-accent/50 transition-colors rounded-3xl">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <tool.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-sm">{tool.label}</h3>
                          <p className="text-xs text-muted-foreground">{tool.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-sm mb-3">Quick Questions</h3>
              <div className="space-y-2">
                {sampleQuestions.slice(0, 4).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="text-left text-xs text-muted-foreground hover:text-foreground transition-colors block w-full p-2 rounded-full hover:bg-accent/50"
                  >
                    "{question}"
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-sm mb-3">Recent Conversations</h3>
              <div className="space-y-2">
                <div className="p-2 rounded-full bg-accent/20 text-xs">
                  <p className="font-medium">Inventory Check</p>
                  <p className="text-muted-foreground">2 hours ago</p>
                </div>
                <div className="p-2 rounded-full hover:bg-accent/20 text-xs cursor-pointer">
                  <p className="font-medium">Sales Report</p>
                  <p className="text-muted-foreground">Yesterday</p>
                </div>
                <div className="p-2 rounded-full hover:bg-accent/20 text-xs cursor-pointer">
                  <p className="font-medium">Promotion Ideas</p>
                  <p className="text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.length === 1 && (
                <div className="text-center py-8">
                  <div className="mb-6">
                    
                    <h2 className="font-display text-2xl font-bold mb-2">Welcome to Opous</h2>
                    <p className="text-muted-foreground">Your AI-powered business assistant is ready to help</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto mb-8">
                    {sampleQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuestionClick(question)}
                        className="text-left p-4 rounded-3xl border border-border hover:border-accent/50 hover:bg-accent/10 transition-colors"
                      >
                        <p className="text-sm">{question}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div key={message.id}>
                  {message.type === "suggestion" ? (
                    <div className="flex justify-start">
                      <div className="flex flex-wrap gap-2 max-w-3xl ml-11">
                        {JSON.parse(message.content).suggestions.map((suggestion: string, index: number) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(suggestion, JSON.parse(message.content).toolAction)}
                            className="text-xs bg-accent/10 hover:bg-accent/20 border-accent/30 rounded-full"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`flex items-start space-x-3 max-w-3xl ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-primary/20"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Sparkles className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div
                            className={`rounded-3xl px-4 py-3 ${
                              message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <div className="text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
                            <div className="flex items-center justify-between mt-2">
                              <p
                                className={`text-xs ${
                                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                                }`}
                              >
                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </p>
                              {message.sender === "assistant" && (
                                <div className="flex items-center gap-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => navigator.clipboard.writeText(message.content)}
                                    className="h-6 w-6 p-0 hover:bg-accent/20 rounded-full"
                                  >
                                    <Copy className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 hover:bg-accent/20 rounded-full"
                                  >
                                    <ThumbsUp className="w-3 h-3" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 w-6 p-0 hover:bg-accent/20 rounded-full"
                                  >
                                    <ThumbsDown className="w-3 h-3" />
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-3xl">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-3xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 bg-card/50 backdrop-blur-sm">
              <div className="flex items-end space-x-3 max-w-4xl mx-auto">
                <Button variant="ghost" size="sm" className="h-[44px] px-3 rounded-full">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <div className="flex-1">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                    placeholder="Ask Opous about your business or request a tool..."
                    className="min-h-[44px] resize-none rounded-full"
                    disabled={isTyping}
                  />
                </div>
                <Button variant="ghost" size="sm" className="h-[44px] px-3 rounded-full">
                  <Mic className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  size="sm"
                  className="h-[44px] px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                >
                  <ArrowUpIcon className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2 max-w-4xl mx-auto">
                Opous can make mistakes. Please verify important information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
