import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, BarChart3, Package, Receipt, Sparkles, Users, Zap, Star, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 rounded-full">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Business Assistant
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Revolutionize Your <span className="text-primary">Local Shop</span> Operations
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Meet Opous, your AI-powered business assistant that helps manage ledgers, track inventory, create
            promotions, and answer all your business questions instantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Chat with Opous Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent rounded-full">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Everything Your Business Needs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Opous combines powerful AI with intuitive design to streamline your daily operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Smart Ledger Management</CardTitle>
                <CardDescription>
                  Ask questions about your finances, track expenses, and get instant insights into your business
                  performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Inventory Intelligence</CardTitle>
                <CardDescription>
                  Check product availability, get pricing details, and manage stock levels with simple conversational
                  commands.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors rounded-3xl">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Promotion Creator</CardTitle>
                <CardDescription>
                  Generate compelling promotions, discounts, and marketing campaigns tailored to your customer base.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">Why Local Shops Choose Opous</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Instant Answers</h3>
                    <p className="text-muted-foreground">
                      Get immediate responses to business questions without digging through spreadsheets or reports.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Easy to Use</h3>
                    <p className="text-muted-foreground">
                      No technical expertise required. Just chat naturally with Opous like you would with a helpful
                      assistant.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Make informed decisions with AI-powered analytics and recommendations tailored to your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-border">
                <div className="bg-card rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-semibold">Opous Assistant</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-muted/50 rounded-3xl p-3">
                      <p className="text-muted-foreground">"How many units of Product A do I have in stock?"</p>
                    </div>
                    <div className="bg-primary/10 rounded-3xl p-3">
                      <p>
                        You currently have 47 units of Product A in stock. The current price is $24.99 per unit. Would
                        you like me to check reorder levels?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Trusted by Local Businesses</h2>
            <p className="text-xl text-muted-foreground">
              See how Opous is transforming operations for shop owners everywhere
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Opous has completely changed how I manage my grocery store. I can check inventory and create
                  promotions in seconds!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary-foreground">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Corner Market Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The ledger management feature is incredible. I can ask about my finances and get instant, accurate
                  answers."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary-foreground">JC</span>
                  </div>
                  <div>
                    <p className="font-semibold">James Chen</p>
                    <p className="text-sm text-muted-foreground">Hardware Store Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Creating promotions used to take hours. Now Opous generates them for me in minutes. It's like having
                  a marketing expert on staff."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary-foreground">SP</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Patel</p>
                    <p className="text-sm text-muted-foreground">Boutique Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of local shop owners who are already using Opous to streamline their operations and boost
              productivity.
            </p>
            <Link href="/chat">
              <Button size="lg" className="text-lg px-12 py-6 rounded-full">
                Start Chatting with Opous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">No credit card required • Free trial available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-8xl md:text-9xl lg:text-[12rem] font-bold text-foreground/10 leading-none">
              OPOUS
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="font-display text-xl font-bold">Opous</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered business assistant for local shops and small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/chat" className="hover:text-foreground transition-colors">
                    Try Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Opous. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
