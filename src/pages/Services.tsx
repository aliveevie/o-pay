import { Wallet, Send, Smartphone, Building2, CreditCard, PiggyBank } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const personalServices = [
    {
      icon: Wallet,
      title: "Digital Wallet",
      description: "Secure digital wallet to store, send, and receive money instantly"
    },
    {
      icon: Send,
      title: "Money Transfers",
      description: "Send money to anyone, anywhere in Nigeria within seconds"
    },
    {
      icon: Smartphone,
      title: "Airtime & Data",
      description: "Top up your phone and buy data bundles at competitive rates"
    },
    {
      icon: CreditCard,
      title: "Bill Payments",
      description: "Pay electricity, water, cable TV, and other bills seamlessly"
    }
  ];

  const businessServices = [
    {
      icon: Building2,
      title: "POS Solutions",
      description: "Complete point-of-sale systems for your business operations"
    },
    {
      icon: CreditCard,
      title: "Merchant Payments",
      description: "Accept payments from customers via cards, transfers, and QR codes"
    },
    {
      icon: PiggyBank,
      title: "Business Loans",
      description: "Quick access to working capital to grow your business"
    },
    {
      icon: Smartphone,
      title: "Financial Analytics",
      description: "Detailed insights into your business financial performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed for individuals and businesses across Nigeria.
          </p>
        </div>
      </section>

      {/* Personal Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Personal Banking</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Business Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of Nigerians already using Go-pay for their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Open Account
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;