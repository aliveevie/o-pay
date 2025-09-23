import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Smartphone, 
  Send, 
  CreditCard, 
  Building, 
  Shield, 
  Zap,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Download,
  ArrowRight,
  Wallet,
  Phone,
  Globe,
  PiggyBank,
  BarChart3,
  Lock,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Nigeria's Leading",
      subtitle: "Fintech Platform",
      description: "Streamline your financial operations with our comprehensive suite of digital banking, payment processing, and business finance solutions.",
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      badge: "Trusted by 2M+ Nigerians",
      badgeIcon: Shield,
      dashboard: {
        balance: "₦2,456,890",
        growth: "+24.5%",
        transactions: "1,247"
      }
    },
    {
      id: 2,
      title: "Empowering",
      subtitle: "African Entrepreneurs",
      description: "From Lagos to Abuja, we're helping business owners across Nigeria scale their operations with smart financial tools and instant access to capital.",
      background: "bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900",
      badge: "Supporting 50K+ Businesses",
      badgeIcon: Building,
      dashboard: {
        balance: "₦8,234,567",
        growth: "+31.2%",
        transactions: "3,891"
      }
    },
    {
      id: 3,
      title: "Secure &",
      subtitle: "Reliable Banking",
      description: "Bank-grade security meets modern convenience. Your money is protected with military-grade encryption and 24/7 monitoring.",
      background: "bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900",
      badge: "CBN Licensed & Regulated",
      badgeIcon: Lock,
      dashboard: {
        balance: "₦5,678,234",
        growth: "+18.7%",
        transactions: "2,156"
      }
    },
    {
      id: 4,
      title: "Instant",
      subtitle: "Money Transfers",
      description: "Send money to family, pay bills, and manage your business finances instantly. No delays, no hidden fees, just seamless transactions.",
      background: "bg-gradient-to-br from-orange-900 via-red-800 to-pink-900",
      badge: "₦750B+ Processed",
      badgeIcon: Send,
      dashboard: {
        balance: "₦1,234,567",
        growth: "+42.1%",
        transactions: "5,432"
      }
    },
    {
      id: 5,
      title: "Smart",
      subtitle: "Financial Analytics",
      description: "Make informed decisions with real-time insights, spending analytics, and predictive financial modeling tailored for African markets.",
      background: "bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900",
      badge: "AI-Powered Insights",
      badgeIcon: BarChart3,
      dashboard: {
        balance: "₦9,876,543",
        growth: "+27.8%",
        transactions: "4,321"
      }
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const services = [
    {
      icon: Wallet,
      title: 'Digital Wallet',
      description: 'Secure digital wallet for seamless financial management and instant access to funds',
      color: 'text-primary'
    },
    {
      icon: Send,
      title: 'Money Transfers',
      description: 'Send money instantly to any bank account across Nigeria and Africa',
      color: 'text-secondary'
    },
    {
      icon: Phone,
      title: 'Bill Payments',
      description: 'Pay for utilities, airtime, data, and subscriptions with ease',
      color: 'text-accent'
    },
    {
      icon: CreditCard,
      title: 'Business Solutions',
      description: 'Comprehensive payment solutions for businesses of all sizes',
      color: 'text-primary'
    },
    {
      icon: Building,
      title: 'Business Finance',
      description: 'Access working capital and business loans to scale your operations',
      color: 'text-secondary'
    },
    {
      icon: BarChart3,
      title: 'Financial Analytics',
      description: 'Advanced insights and reporting for better financial decisions',
      color: 'text-accent'
    }
  ];

  const features = [
    'Bank-grade 256-bit encryption',
    '24/7 dedicated customer support',
    'Instant real-time transactions',
    'Transparent pricing, no hidden fees',
    'Multi-currency support',
    'CBN regulated and fully licensed'
  ];

  const testimonials = [
    {
      name: 'Adaora Okafor',
      role: 'CEO, Lagos Fashion House',
      rating: 5,
      comment: 'Go-pay has revolutionized our business operations. The payment solutions are reliable, and customer support is exceptional.'
    },
    {
      name: 'Ibrahim Hassan',
      role: 'Freelance Developer',
      rating: 5,
      comment: 'Fast, secure, and user-friendly. Go-pay has become my primary financial platform for all transactions.'
    },
    {
      name: 'Grace Emeka',
      role: 'Business Owner',
      rating: 5,
      comment: 'The business analytics and financial insights have helped me make better decisions for my company growth.'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Active Users', icon: Users },
    { number: '₦750B+', label: 'Transaction Volume', icon: TrendingUp },
    { number: '50,000+', label: 'Business Partners', icon: Building },
    { number: '99.9%', label: 'Platform Uptime', icon: Clock }
  ];

  const trustIndicators = [
    { icon: Shield, text: 'CBN Licensed & Regulated' },
    { icon: Lock, text: 'Bank-Grade Security' },
    { icon: Award, text: 'ISO 27001 Certified' },
    { icon: CheckCircle, text: 'PCI DSS Compliant' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slideshow Section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].background}`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  {currentSlide === 0 && <Shield className="h-4 w-4 mr-2 text-green-400" />}
                  {currentSlide === 1 && <Building className="h-4 w-4 mr-2 text-green-400" />}
                  {currentSlide === 2 && <Lock className="h-4 w-4 mr-2 text-green-400" />}
                  {currentSlide === 3 && <Send className="h-4 w-4 mr-2 text-green-400" />}
                  {currentSlide === 4 && <BarChart3 className="h-4 w-4 mr-2 text-green-400" />}
                  <span className="text-sm font-medium">{slides[currentSlide].badge}</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                  {slides[currentSlide].title}
                  <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {slides[currentSlide].subtitle}
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2 text-slate-300">
                    <indicator.icon className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 shadow-2xl border border-slate-600">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">G</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Go-pay Dashboard</h3>
                        <p className="text-slate-400 text-sm">Business Account</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-sm">Total Balance</p>
                      <p className="text-2xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span className="text-slate-300 text-sm">Monthly Growth</span>
                      </div>
                      <p className="text-xl font-bold text-white">{slides[currentSlide].dashboard.growth}</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-4 w-4 text-blue-400" />
                        <span className="text-slate-300 text-sm">Transactions</span>
                      </div>
                      <p className="text-xl font-bold text-white">{slides[currentSlide].dashboard.transactions}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Slideshow Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-400 scale-125' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="text-white hover:text-green-400 transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-slate-600" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From personal banking to enterprise solutions, we provide the tools and services 
              your business needs to thrive in today's digital economy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl p-8 group">
                <div className="space-y-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex items-center text-slate-900 hover:text-slate-700 cursor-pointer transition-colors group-hover:translate-x-2 transition-transform duration-300">
                    <span className="font-semibold">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                  Why Leading Businesses Choose Go-pay
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Built on enterprise-grade infrastructure with advanced security protocols, 
                  regulatory compliance, and 24/7 operational excellence.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Your Free Trial
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">Instant Processing</h3>
                    <p className="text-sm text-slate-600">Real-time transaction processing with 99.9% uptime guarantee</p>
                  </div>
                </Card>
                
                <Card className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mx-auto">
                      <Globe className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">Global Reach</h3>
                    <p className="text-sm text-slate-600">Connect with partners and customers across Africa and beyond</p>
                  </div>
                </Card>
              </div>
              
              <div className="space-y-6 pt-8">
                <Card className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">Enterprise Security</h3>
                    <p className="text-sm text-slate-600">Military-grade encryption and compliance with global standards</p>
                  </div>
                </Card>
                
                <Card className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mx-auto">
                      <BarChart3 className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-slate-900">Advanced Analytics</h3>
                    <p className="text-sm text-slate-600">Data-driven insights to optimize your financial operations</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              See how businesses across Nigeria are transforming their operations with Go-pay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-slate-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Join thousands of businesses that trust Go-pay for their financial operations. 
              Start your journey today and experience the future of digital finance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Get Started Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;