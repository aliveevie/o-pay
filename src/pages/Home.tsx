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
  PiggyBank
} from 'lucide-react';
import heroImage from '@/assets/hero-fintech.jpg';

const Home = () => {
  const services = [
    {
      icon: Wallet,
      title: 'Digital Wallet',
      description: 'Secure digital wallet for all your financial needs with instant access to funds',
      color: 'text-primary'
    },
    {
      icon: Send,
      title: 'Money Transfers',
      description: 'Send money instantly to any bank account in Nigeria and across Africa',
      color: 'text-secondary'
    },
    {
      icon: Phone,
      title: 'Bill Payments',
      description: 'Pay for airtime, data, electricity, cable TV, and more with just a few taps',
      color: 'text-accent'
    },
    {
      icon: CreditCard,
      title: 'Business Payments',
      description: 'Accept payments from customers with our secure POS and merchant solutions',
      color: 'text-primary'
    },
    {
      icon: Building,
      title: 'Business Loans',
      description: 'Access quick business loans and working capital to grow your business',
      color: 'text-secondary'
    },
    {
      icon: PiggyBank,
      title: 'Savings & Investment',
      description: 'Save money and earn competitive returns with our investment products',
      color: 'text-accent'
    }
  ];

  const features = [
    'Bank-grade security encryption',
    '24/7 customer support',
    'Instant transactions',
    'No hidden fees',
    'Multi-currency support',
    'CBN regulated and licensed'
  ];

  const testimonials = [
    {
      name: 'Adaora Okafor',
      role: 'Small Business Owner',
      image: '/api/placeholder/60/60',
      rating: 5,
      comment: 'Go-pay has transformed how I handle my business payments. The POS system is reliable and customer support is excellent.'
    },
    {
      name: 'Ibrahim Hassan',
      role: 'Freelancer',
      image: '/api/placeholder/60/60',
      rating: 5,
      comment: 'Fast transfers, low fees, and a user-friendly app. Go-pay is my go-to financial app for all transactions.'
    },
    {
      name: 'Grace Emeka',
      role: 'Student',
      image: '/api/placeholder/60/60',
      rating: 5,
      comment: 'Paying bills and sending money to family has never been easier. The savings feature helps me budget better.'
    }
  ];

  const stats = [
    { number: '2M+', label: 'Active Users' },
    { number: '₦500B+', label: 'Transactions Processed' },
    { number: '50,000+', label: 'Business Partners' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-bg hero-pattern py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  The Future of
                  <span className="block text-accent"> Digital Payments</span>
                  in Nigeria
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Send money, pay bills, grow your business, and manage your finances 
                  with Nigeria's most trusted fintech platform. Join over 2 million users 
                  who trust Go-pay for their daily financial needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero">
                  <Download className="mr-2 h-5 w-5" />
                  Download Go-pay App
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm">CBN Licensed</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm">256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Users className="h-5 w-5 text-green-400" />
                  <span className="text-sm">2M+ Users</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Go-pay Digital Financial Services" 
                  className="rounded-2xl shadow-2xl animate-float"
                />
              </div>
              <div className="absolute top-4 left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-4 right-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary">
              Comprehensive Financial Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From personal banking to business solutions, we provide everything you need 
              to manage your money efficiently and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex items-center text-primary hover:text-primary-dark cursor-pointer transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Why Choose <span className="text-gradient-primary">Go-pay?</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Built with advanced security, reliable infrastructure, and customer-first approach 
                  to provide the best financial experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="btn-secondary">
                <Smartphone className="mr-2 h-5 w-5" />
                Start Using Go-pay Today
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="card-fintech">
                  <div className="text-center space-y-2">
                    <Zap className="h-8 w-8 text-accent mx-auto" />
                    <h3 className="font-semibold">Instant Transfers</h3>
                    <p className="text-sm text-muted-foreground">Send money in seconds</p>
                  </div>
                </Card>
                <Card className="card-fintech">
                  <div className="text-center space-y-2">
                    <Globe className="h-8 w-8 text-secondary mx-auto" />
                    <h3 className="font-semibold">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">Send across Africa</p>
                  </div>
                </Card>
              </div>
              <div className="space-y-6 pt-8">
                <Card className="card-fintech">
                  <div className="text-center space-y-2">
                    <Shield className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="font-semibold">Bank-Level Security</h3>
                    <p className="text-sm text-muted-foreground">Your money is safe</p>
                  </div>
                </Card>
                <Card className="card-fintech">
                  <div className="text-center space-y-2">
                    <TrendingUp className="h-8 w-8 text-accent mx-auto" />
                    <h3 className="font-semibold">Grow Your Money</h3>
                    <p className="text-sm text-muted-foreground">Earn with savings</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient-primary">
              Trusted by Millions
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers say about their Go-pay experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-fintech">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-bg hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Transform Your Financial Life?
            </h2>
            <p className="text-xl text-white/90">
              Join millions of Nigerians who trust Go-pay for their daily financial needs. 
              Download the app today and start your journey to financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hero">
                <Download className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
              <Button size="lg" className="btn-hero">
                <Download className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;