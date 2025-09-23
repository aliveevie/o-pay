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
import { useState, useEffect, useRef, useCallback } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    activeUsers: 0,
    transactionVolume: 0,
    businessPartners: 0,
    platformUptime: 0
  });
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef(null);
  const sectionsRef = useRef([]);

  const slides = [
    {
      id: 1,
      title: "Nigeria's Leading",
      subtitle: "Fintech Platform",
      description: "Streamline your financial operations with our comprehensive suite of digital banking, payment processing, and business finance solutions. Trusted by over 2 million Nigerians and 50,000+ businesses across Africa.",
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "Trusted by 2M+ Nigerians",
      badgeIcon: Shield,
      stats: [
        { label: "Active Users", value: "2M+" },
        { label: "Transaction Volume", value: "₦750B+" },
        { label: "Business Partners", value: "50K+" },
        { label: "Platform Uptime", value: "99.9%" }
      ],
      dashboard: {
        type: "business",
        balance: "₦2,456,890",
        growth: "+24.5%",
        transactions: "1,247",
        accountType: "Business Account",
        color: "from-green-500 to-blue-500",
        additionalMetrics: {
          revenue: "₦1.2M",
          expenses: "₦890K",
          profit: "₦310K",
          customers: "2,847"
        }
      }
    },
    {
      id: 2,
      title: "Empowering",
      subtitle: "African Entrepreneurs",
      description: "From Lagos to Abuja, we're helping business owners across Nigeria scale their operations with smart financial tools, instant access to capital, and AI-powered business insights. Join thousands of successful entrepreneurs.",
      background: "bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900",
      backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      badge: "Supporting 50K+ Businesses",
      badgeIcon: Building,
      stats: [
        { label: "Startups Funded", value: "15K+" },
        { label: "Capital Deployed", value: "₦45B+" },
        { label: "Success Rate", value: "94%" },
        { label: "Avg. Growth", value: "+31%" }
      ],
      dashboard: {
        type: "startup",
        balance: "₦8,234,567",
        growth: "+31.2%",
        transactions: "3,891",
        accountType: "Startup Account",
        color: "from-emerald-500 to-teal-500",
        additionalMetrics: {
          funding: "₦5.2M",
          burnRate: "₦180K",
          runway: "29 months",
          valuation: "₦45M"
        }
      }
    },
    {
      id: 3,
      title: "Bank-Grade",
      subtitle: "Security & Compliance",
      description: "Your financial data is protected with military-grade encryption, multi-factor authentication, and 24/7 fraud monitoring. Fully licensed by CBN and compliant with international security standards.",
      background: "bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900",
      backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2011&q=80",
      badge: "CBN Licensed & Regulated",
      badgeIcon: Lock,
      stats: [
        { label: "Security Score", value: "98.5%" },
        { label: "Fraud Prevention", value: "99.7%" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Audit Pass Rate", value: "100%" }
      ],
      dashboard: {
        type: "premium",
        balance: "₦5,678,234",
        growth: "+18.7%",
        transactions: "2,156",
        accountType: "Premium Account",
        color: "from-blue-500 to-purple-500",
        additionalMetrics: {
          investments: "₦3.2M",
          roi: "+18.7%",
          riskScore: "Low",
          creditScore: "850"
        }
      }
    },
    {
      id: 4,
      title: "Instant",
      subtitle: "Money Transfers",
      description: "Send money to family, pay bills, and manage your business finances instantly across Nigeria and Africa. Zero delays, transparent fees, and real-time transaction tracking for complete peace of mind.",
      background: "bg-gradient-to-br from-orange-900 via-red-800 to-pink-900",
      backgroundImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      badge: "₦750B+ Processed",
      badgeIcon: Send,
      stats: [
        { label: "Transfer Speed", value: "< 30s" },
        { label: "Success Rate", value: "99.8%" },
        { label: "Countries", value: "15+" },
        { label: "Daily Volume", value: "₦2.1B" }
      ],
      dashboard: {
        type: "personal",
        balance: "₦1,234,567",
        growth: "+42.1%",
        transactions: "5,432",
        accountType: "Personal Account",
        color: "from-orange-500 to-pink-500",
        additionalMetrics: {
          sent: "₦890K",
          received: "₦1.1M",
          bills: "₦156K",
          savings: "₦234K"
        }
      }
    },
    {
      id: 5,
      title: "AI-Powered",
      subtitle: "Financial Analytics",
      description: "Make informed decisions with real-time insights, predictive analytics, and personalized financial recommendations powered by advanced AI. Optimize your finances with data-driven strategies tailored for African markets.",
      background: "bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      badge: "AI-Powered Insights",
      badgeIcon: BarChart3,
      stats: [
        { label: "AI Accuracy", value: "96.2%" },
        { label: "Predictions Made", value: "2.5M+" },
        { label: "Savings Generated", value: "₦12B+" },
        { label: "User Satisfaction", value: "98%" }
      ],
      dashboard: {
        type: "analytics",
        balance: "₦9,876,543",
        growth: "+27.8%",
        transactions: "4,321",
        accountType: "Analytics Dashboard",
        color: "from-cyan-500 to-indigo-500",
        additionalMetrics: {
          predictions: "87% accurate",
          savings: "₦234K",
          insights: "156 generated",
          trends: "12 identified"
        }
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

  // Number animation function
  const animateNumber = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;
      callback(Math.floor(current));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Intersection Observer for scroll animations
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.getAttribute('data-section');
      if (entry.isIntersecting) {
        setIsVisible(prev => ({ ...prev, [sectionId]: true }));
        
        // Animate numbers when stats section comes into view
        if (sectionId === 'stats' && !animatedNumbers.activeUsers) {
          animateNumber(0, 2000000, 2000, (value) => {
            setAnimatedNumbers(prev => ({ ...prev, activeUsers: value }));
          });
          animateNumber(0, 750000000000, 2500, (value) => {
            setAnimatedNumbers(prev => ({ ...prev, transactionVolume: value }));
          });
          animateNumber(0, 50000, 1800, (value) => {
            setAnimatedNumbers(prev => ({ ...prev, businessPartners: value }));
          });
          animateNumber(0, 99.9, 1500, (value) => {
            setAnimatedNumbers(prev => ({ ...prev, platformUptime: value }));
          });
        }
      } else {
        setIsVisible(prev => ({ ...prev, [sectionId]: false }));
      }
    });
  }, [animatedNumbers.activeUsers]);

  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [observerCallback]);

  // Format numbers for display
  const formatNumber = (num: number, type: string) => {
    if (type === 'currency') {
      return `₦${(num / 1000000000).toFixed(0)}B+`;
    } else if (type === 'percentage') {
      return `${num.toFixed(1)}%`;
    } else if (type === 'users') {
      return `${(num / 1000000).toFixed(0)}M+`;
    } else {
      return `${num.toLocaleString()}+`;
    }
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
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-1000 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${slides[currentSlide].backgroundImage})`
          }}
        >
          <div className={`absolute inset-0 transition-all duration-1000 ${slides[currentSlide].background} opacity-80`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
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

              {/* Professional Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                {slides[currentSlide].stats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-2 text-slate-300">
                    <indicator.icon className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-medium">{indicator.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Varying Dashboard Designs */}
              {slides[currentSlide].dashboard.type === "business" && (
                <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 shadow-2xl border border-slate-600 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].dashboard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">Go-pay Business</h3>
                          <p className="text-slate-400 text-sm">{slides[currentSlide].dashboard.accountType}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-400 text-sm">Total Balance</p>
                        <p className="text-3xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 border border-green-500/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-green-400" />
                          <span className="text-slate-300 text-sm">Revenue</span>
                        </div>
                        <p className="text-xl font-bold text-green-400">{slides[currentSlide].dashboard.additionalMetrics.revenue}</p>
                        <p className="text-green-300 text-xs">Monthly</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 border border-blue-500/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          <span className="text-slate-300 text-sm">Customers</span>
                        </div>
                        <p className="text-xl font-bold text-blue-400">{slides[currentSlide].dashboard.additionalMetrics.customers}</p>
                        <p className="text-blue-300 text-xs">Active</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-500/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <BarChart3 className="h-4 w-4 text-purple-400" />
                          <span className="text-slate-300 text-sm">Profit</span>
                        </div>
                        <p className="text-xl font-bold text-purple-400">{slides[currentSlide].dashboard.additionalMetrics.profit}</p>
                        <p className="text-purple-300 text-xs">This Month</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 border border-orange-500/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <CreditCard className="h-4 w-4 text-orange-400" />
                          <span className="text-slate-300 text-sm">Expenses</span>
                        </div>
                        <p className="text-xl font-bold text-orange-400">{slides[currentSlide].dashboard.additionalMetrics.expenses}</p>
                        <p className="text-orange-300 text-xs">Controlled</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slides[currentSlide].dashboard.type === "startup" && (
                <div className="relative z-10 bg-gradient-to-br from-emerald-800 to-teal-700 rounded-3xl p-8 shadow-2xl border border-emerald-600 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].dashboard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Zap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                          <h3 className="font-bold text-white text-lg">Go-pay Startup</h3>
                          <p className="text-slate-300 text-sm">{slides[currentSlide].dashboard.accountType}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 text-sm">Available Capital</p>
                        <p className="text-3xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl p-6 border border-emerald-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <TrendingUp className="h-5 w-5 text-emerald-400" />
                          <span className="text-white font-semibold">Funding Raised</span>
                        </div>
                        <p className="text-2xl font-bold text-emerald-400">{slides[currentSlide].dashboard.additionalMetrics.funding}</p>
                        <p className="text-emerald-200 text-sm mt-1">Series A</p>
                      </div>
                      <div className="bg-gradient-to-br from-teal-500/30 to-cyan-500/30 rounded-xl p-6 border border-teal-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <BarChart3 className="h-5 w-5 text-teal-400" />
                          <span className="text-white font-semibold">Valuation</span>
                        </div>
                        <p className="text-2xl font-bold text-teal-400">{slides[currentSlide].dashboard.additionalMetrics.valuation}</p>
                        <p className="text-teal-200 text-sm mt-1">Current</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl p-6 border border-cyan-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Clock className="h-5 w-5 text-cyan-400" />
                          <span className="text-white font-semibold">Runway</span>
                        </div>
                        <p className="text-2xl font-bold text-cyan-400">{slides[currentSlide].dashboard.additionalMetrics.runway}</p>
                        <p className="text-cyan-200 text-sm mt-1">Remaining</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-xl p-6 border border-blue-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Wallet className="h-5 w-5 text-blue-400" />
                          <span className="text-white font-semibold">Burn Rate</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-400">{slides[currentSlide].dashboard.additionalMetrics.burnRate}</p>
                        <p className="text-blue-200 text-sm mt-1">Monthly</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slides[currentSlide].dashboard.type === "premium" && (
                <div className="relative z-10 bg-gradient-to-br from-blue-800 to-purple-700 rounded-3xl p-8 shadow-2xl border border-blue-600 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].dashboard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">Go-pay Premium</h3>
                          <p className="text-slate-300 text-sm">{slides[currentSlide].dashboard.accountType}</p>
                      </div>
                    </div>
                    <div className="text-right">
                        <p className="text-slate-300 text-sm">Investment Portfolio</p>
                        <p className="text-3xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 border border-blue-400/30">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-blue-400" />
                            <span className="text-white font-semibold">Security Score</span>
                          </div>
                          <span className="text-blue-400 font-bold">98.5%</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-purple-400" />
                            <span className="text-slate-300 text-sm">Investments</span>
                          </div>
                          <p className="text-xl font-bold text-purple-400">{slides[currentSlide].dashboard.additionalMetrics.investments}</p>
                          <p className="text-purple-300 text-xs">Portfolio</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <Award className="h-4 w-4 text-blue-400" />
                            <span className="text-slate-300 text-sm">Credit Score</span>
                          </div>
                          <p className="text-xl font-bold text-blue-400">{slides[currentSlide].dashboard.additionalMetrics.creditScore}</p>
                          <p className="text-blue-300 text-xs">Excellent</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                            <span className="text-slate-300 text-sm">ROI</span>
                          </div>
                          <p className="text-xl font-bold text-green-400">{slides[currentSlide].dashboard.additionalMetrics.roi}</p>
                          <p className="text-green-300 text-xs">Annual</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="h-4 w-4 text-orange-400" />
                            <span className="text-slate-300 text-sm">Risk Score</span>
                          </div>
                          <p className="text-xl font-bold text-orange-400">{slides[currentSlide].dashboard.additionalMetrics.riskScore}</p>
                          <p className="text-orange-300 text-xs">Conservative</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slides[currentSlide].dashboard.type === "personal" && (
                <div className="relative z-10 bg-gradient-to-br from-orange-800 to-pink-700 rounded-3xl p-8 shadow-2xl border border-orange-600 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].dashboard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">Go-pay Personal</h3>
                          <p className="text-slate-300 text-sm">{slides[currentSlide].dashboard.accountType}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 text-sm">Wallet Balance</p>
                        <p className="text-3xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-xl p-6 border border-orange-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Send className="h-5 w-5 text-orange-400" />
                          <span className="text-white font-semibold">Money Sent</span>
                        </div>
                        <p className="text-2xl font-bold text-orange-400">{slides[currentSlide].dashboard.additionalMetrics.sent}</p>
                        <p className="text-orange-200 text-sm mt-1">This month</p>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500/30 to-rose-500/30 rounded-xl p-6 border border-pink-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Phone className="h-5 w-5 text-pink-400" />
                          <span className="text-white font-semibold">Bills Paid</span>
                        </div>
                        <p className="text-2xl font-bold text-pink-400">{slides[currentSlide].dashboard.additionalMetrics.bills}</p>
                        <p className="text-pink-200 text-sm mt-1">All paid</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl p-6 border border-green-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <Wallet className="h-5 w-5 text-green-400" />
                          <span className="text-white font-semibold">Money Received</span>
                        </div>
                        <p className="text-2xl font-bold text-green-400">{slides[currentSlide].dashboard.additionalMetrics.received}</p>
                        <p className="text-green-200 text-sm mt-1">This month</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl p-6 border border-blue-400/50">
                        <div className="flex items-center space-x-2 mb-3">
                          <PiggyBank className="h-5 w-5 text-blue-400" />
                          <span className="text-white font-semibold">Savings</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-400">{slides[currentSlide].dashboard.additionalMetrics.savings}</p>
                        <p className="text-blue-200 text-sm mt-1">Accumulated</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {slides[currentSlide].dashboard.type === "analytics" && (
                <div className="relative z-10 bg-gradient-to-br from-cyan-800 to-indigo-700 rounded-3xl p-8 shadow-2xl border border-cyan-600 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${slides[currentSlide].dashboard.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <BarChart3 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg">Go-pay Analytics</h3>
                          <p className="text-slate-300 text-sm">{slides[currentSlide].dashboard.accountType}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 text-sm">Total Assets</p>
                        <p className="text-3xl font-bold text-white">{slides[currentSlide].dashboard.balance}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/30">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-cyan-400" />
                            <span className="text-white font-semibold">AI Insights</span>
                          </div>
                          <span className="text-cyan-400 font-bold">Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-4 border border-indigo-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-indigo-400" />
                            <span className="text-slate-300 text-sm">Predictions</span>
                          </div>
                          <p className="text-xl font-bold text-indigo-400">{slides[currentSlide].dashboard.additionalMetrics.predictions}</p>
                          <p className="text-indigo-300 text-xs">Accuracy</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <PiggyBank className="h-4 w-4 text-blue-400" />
                            <span className="text-slate-300 text-sm">Savings</span>
                          </div>
                          <p className="text-xl font-bold text-blue-400">{slides[currentSlide].dashboard.additionalMetrics.savings}</p>
                          <p className="text-blue-300 text-xs">Generated</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
                          <div className="flex items-center space-x-2 mb-2">
                            <BarChart3 className="h-4 w-4 text-green-400" />
                            <span className="text-slate-300 text-sm">Insights</span>
                          </div>
                          <p className="text-xl font-bold text-green-400">{slides[currentSlide].dashboard.additionalMetrics.insights}</p>
                          <p className="text-green-300 text-xs">Generated</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/30">
                      <div className="flex items-center space-x-2 mb-2">
                            <Globe className="h-4 w-4 text-orange-400" />
                            <span className="text-slate-300 text-sm">Trends</span>
                          </div>
                          <p className="text-xl font-bold text-orange-400">{slides[currentSlide].dashboard.additionalMetrics.trends}</p>
                          <p className="text-orange-300 text-xs">Identified</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Slideshow Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-6 bg-black/30 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 shadow-2xl">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 bg-white/10 rounded-full p-2"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 bg-white/10 rounded-full p-2"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slide Indicators with Labels */}
            <div className="flex space-x-3">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'text-green-400' 
                      : 'text-white/60 hover:text-white/90'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-green-400 scale-125 shadow-lg shadow-green-400/50' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`} />
                  <span className="text-xs font-medium">{slide.id}</span>
                </button>
              ))}
              </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 bg-white/10 rounded-full p-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Slide Counter */}
            <div className="text-white/80 text-sm font-medium ml-2">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={(el) => sectionsRef.current[0] = el}
        data-section="stats"
        className={`py-16 bg-slate-50 border-b transition-all duration-1000 ${
          isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {formatNumber(animatedNumbers.activeUsers, 'users')}
              </div>
              <div className="text-slate-600 font-medium">Active Users</div>
            </div>
            
            <div className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {formatNumber(animatedNumbers.transactionVolume, 'currency')}
              </div>
              <div className="text-slate-600 font-medium">Transaction Volume</div>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building className="h-6 w-6 text-slate-600" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {formatNumber(animatedNumbers.businessPartners, 'partners')}
              </div>
              <div className="text-slate-600 font-medium">Business Partners</div>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-slate-600" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                {formatNumber(animatedNumbers.platformUptime, 'percentage')}
              </div>
              <div className="text-slate-600 font-medium">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={(el) => sectionsRef.current[1] = el}
        data-section="services"
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
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
              <Card 
                key={index} 
                className={`bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl p-8 group ${
                  isVisible['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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
      <section 
        ref={(el) => sectionsRef.current[2] = el}
        data-section="features"
        className={`py-20 bg-slate-50 transition-all duration-1000 ${
          isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible['features'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
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
                  <div 
                    key={index} 
                    className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm transition-all duration-500 ${
                      isVisible['features'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
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

            <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
              isVisible['features'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
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
      <section 
        ref={(el) => sectionsRef.current[3] = el}
        data-section="testimonials"
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600">
              See how businesses across Nigeria are transforming their operations with Go-pay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500 rounded-2xl p-8 ${
                  isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
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
      <section 
        ref={(el) => sectionsRef.current[4] = el}
        data-section="cta"
        className={`py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white transition-all duration-1000 ${
          isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Join thousands of businesses that trust Go-pay for their financial operations. 
              Start your journey today and experience the future of digital finance.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-1000 delay-400 ${
              isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
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