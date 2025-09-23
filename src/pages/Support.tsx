import { Phone, Mail, MessageCircle, Clock, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Support = () => {
  const faqs = [
    {
      question: "How do I create a Go-pay account?",
      answer: "Download the Go-pay app, enter your phone number, verify with OTP, and complete the simple registration process."
    },
    {
      question: "What are the transaction limits?",
      answer: "Basic accounts have a ₦500,000 monthly limit. Premium accounts have ₦5,000,000 monthly limits."
    },
    {
      question: "How long do transfers take?",
      answer: "Go-pay to Go-pay transfers are instant. Transfers to other banks take 1-2 minutes during banking hours."
    },
    {
      question: "What should I do if I forget my PIN?",
      answer: "Use the 'Forgot PIN' option in the app, verify your identity, and create a new PIN securely."
    },
    {
      question: "Are there any hidden charges?",
      answer: "No hidden charges. All fees are clearly displayed before you complete any transaction."
    },
    {
      question: "How secure is my money?",
      answer: "Your funds are protected by bank-level security, encryption, and are insured up to ₦500,000 per account."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Help & Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're here to help you 24/7. Find answers, get support, or contact our team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for help..."
              className="pl-10 h-12"
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-shadow">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
              <p className="text-muted-foreground mb-4">Call us for immediate assistance</p>
              <p className="font-semibold text-lg">+234 700 GO-PAY-1</p>
              <p className="text-sm text-muted-foreground mt-2">24/7 Available</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-shadow">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">Chat with our support team</p>
              <Button className="w-full">Start Chat</Button>
              <p className="text-sm text-muted-foreground mt-2">Average response: 2 mins</p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-shadow">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">Send us your questions</p>
              <p className="font-semibold">support@gopay.ng</p>
              <p className="text-sm text-muted-foreground mt-2">Response within 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Office Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Phone & Chat Support</p>
                    <p className="text-muted-foreground">24/7 - Always available</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-muted-foreground">24/7 - 2 hour response time</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-semibold">Physical Office</p>
                    <p className="text-muted-foreground">Mon-Fri: 8AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Our Office</h2>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-3">Head Office</h3>
                <p className="text-muted-foreground mb-4">
                  123 Business District<br />
                  Victoria Island<br />
                  Nigeria
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;