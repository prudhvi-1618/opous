"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  BarChart3,
  Package,
  Calculator,
  FileText,
  Users,
  Zap,
  Shield,
  Clock,
  Smartphone,
  Cloud,
  TrendingUp,
  MessageSquare,
  Settings,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Assistant",
      description: "Get intelligent business insights and automated recommendations powered by advanced AI technology.",
      category: "AI & Automation",
      benefits: ["24/7 availability", "Smart recommendations", "Natural language processing"],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive business analytics with real-time reporting and predictive insights.",
      category: "Analytics",
      benefits: ["Real-time dashboards", "Predictive analytics", "Custom reports"],
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage suppliers, and automate reordering with intelligent inventory control.",
      category: "Operations",
      benefits: ["Auto-reorder alerts", "Supplier management", "Stock optimization"],
    },
    {
      icon: Calculator,
      title: "Financial Calculator",
      description: "Advanced financial calculations for profit margins, tax planning, and business forecasting.",
      category: "Finance",
      benefits: ["Profit margin analysis", "Tax calculations", "ROI forecasting"],
    },
    {
      icon: FileText,
      title: "Digital Ledger",
      description: "Maintain accurate financial records with automated bookkeeping and transaction tracking.",
      category: "Finance",
      benefits: ["Automated entries", "Transaction categorization", "Audit trails"],
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Build stronger customer relationships with comprehensive CRM and communication tools.",
      category: "CRM",
      benefits: ["Customer profiles", "Communication history", "Loyalty tracking"],
    },
    {
      icon: MessageSquare,
      title: "Smart Chat Interface",
      description: "Interact with your business data through natural language queries and commands.",
      category: "AI & Automation",
      benefits: ["Natural language queries", "Voice commands", "Contextual responses"],
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Identify growth opportunities and market trends with AI-driven business intelligence.",
      category: "Analytics",
      benefits: ["Market analysis", "Growth predictions", "Opportunity identification"],
    },
  ]

  const capabilities = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant responses and real-time updates.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your business data.",
    },
    {
      icon: Cloud,
      title: "Cloud-Based",
      description: "Access your business from anywhere with secure cloud synchronization.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Fully responsive design that works perfectly on all devices.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock AI assistance and human support when you need it.",
    },
    {
      icon: Settings,
      title: "Customizable",
      description: "Tailor the platform to your specific business needs and workflows.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 rounded-full px-4 py-2">
            Complete Feature Overview
          </Badge>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-balance">
            Everything You Need to
            <span className="block text-muted-foreground">Grow Your Business</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Discover all the powerful features that make Opous the ultimate AI-powered business assistant for local
            shops and small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="rounded-full px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/chat">
              <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools designed specifically for small business success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="rounded-3xl border-2 hover:shadow-lg transition-all duration-300 dark:hover:shadow-black/20"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-muted">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="rounded-full">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Platform Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with enterprise-grade technology for reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-2xl bg-background border-2 w-fit mx-auto mb-4">
                  <capability.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of business owners who are already using Opous to streamline operations and boost growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="rounded-full px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent">
                  Try Demo First
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
