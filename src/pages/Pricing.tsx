import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const personalPlans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for personal use",
      features: [
        "Send & Receive Money",
        "Bill Payments",
        "Airtime & Data Top-up",
        "₦500,000 Monthly Limit",
        "24/7 Customer Support"
      ],
      notIncluded: [
        "Business Features",
        "Advanced Analytics"
      ]
    },
    {
      name: "Premium",
      price: "₦1,000/month",
      description: "Enhanced features for power users",
      features: [
        "All Basic Features",
        "₦5,000,000 Monthly Limit",
        "Priority Support",
        "Transaction History Export",
        "Advanced Security Features"
      ],
      notIncluded: [
        "Business Analytics"
      ]
    }
  ];

  const businessPlans = [
    {
      name: "Starter",
      price: "₦5,000/month",
      description: "Great for small businesses",
      features: [
        "POS Terminal",
        "Payment Processing",
        "Basic Analytics",
        "₦10,000,000 Monthly Limit",
        "Email Support"
      ],
      notIncluded: [
        "Advanced Analytics",
        "API Access"
      ]
    },
    {
      name: "Professional",
      price: "₦15,000/month", 
      description: "Perfect for growing businesses",
      features: [
        "All Starter Features",
        "Multiple POS Terminals",
        "Advanced Analytics",
        "₦50,000,000 Monthly Limit",
        "Priority Support",
        "Custom Branding"
      ],
      notIncluded: [
        "Dedicated Account Manager"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored for large organizations",
      features: [
        "All Professional Features",
        "Unlimited Transactions",
        "API Access",
        "Dedicated Account Manager",
        "Custom Integration",
        "24/7 Phone Support"
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Personal Plans */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Personal Plans</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {personalPlans.map((plan, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full">
                  {plan.price === "Free" ? "Get Started" : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Business Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => (
              <div key={index} className="bg-card p-8 rounded-lg border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <X className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full">
                  {plan.price === "Custom" ? "Contact Sales" : "Choose Plan"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transaction Fees</h2>
          <div className="bg-card p-8 rounded-lg border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Transfer Fees</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Go-pay to Go-pay</span>
                    <span className="font-semibold">Free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>To Other Banks</span>
                    <span className="font-semibold">₦25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>International Transfer</span>
                    <span className="font-semibold">1.5%</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Other Services</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Bill Payments</span>
                    <span className="font-semibold">Free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Airtime Purchase</span>
                    <span className="font-semibold">Free</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Card Payment Processing</span>
                    <span className="font-semibold">1.4%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;