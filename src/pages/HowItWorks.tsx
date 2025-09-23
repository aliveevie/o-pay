import { Download, UserCheck, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      step: "01",
      title: "Download the App",
      description: "Get Go-pay from App Store or Google Play Store and install on your device"
    },
    {
      icon: UserCheck,
      step: "02", 
      title: "Create Account",
      description: "Sign up with your phone number and complete the simple verification process"
    },
    {
      icon: CreditCard,
      step: "03",
      title: "Add Money",
      description: "Fund your wallet using bank transfer, debit card, or visit any Go-pay agent"
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Start Transacting",
      description: "Send money, pay bills, buy airtime, and enjoy seamless financial services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started with Go-pay is simple. Follow these easy steps to begin your financial journey.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Go-pay?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Transactions</h3>
              <p className="text-muted-foreground">
                Send and receive money instantly, 24/7, anywhere in Nigeria
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bank-Level Security</h3>
              <p className="text-muted-foreground">
                Your money and data are protected with industry-leading security measures
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Low Transaction Fees</h3>
              <p className="text-muted-foreground">
                Enjoy competitive rates and transparent pricing with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Go-pay?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions of satisfied customers who trust Go-pay for their financial needs.
          </p>
          <Button size="lg" className="text-lg px-8">
            Download App Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;