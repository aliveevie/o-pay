import { Users, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Go-pay Systems
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Nigeria's financial future through innovative digital payment solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2020, Go-pay Systems emerged from a vision to democratize financial services across Nigeria. We recognized the challenges faced by millions of unbanked and underbanked Nigerians.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve over 2 million users across Nigeria, processing billions in transactions monthly while maintaining the highest security standards.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">2020 - Company Founded</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">2021 - 100K Users Milestone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">2022 - POS Network Launch</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">2023 - 1M Users Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Mission</h3>
              <p className="text-muted-foreground">
                To provide accessible, secure, and innovative financial services that empower every Nigerian to participate in the digital economy.
              </p>
            </div>
            <div className="text-center">
              <Eye className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Vision</h3>
              <p className="text-muted-foreground">
                To become Nigeria's most trusted and preferred financial technology partner, driving financial inclusion across all communities.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Values</h3>
              <p className="text-muted-foreground">
                Innovation, Security, Transparency, Customer-centricity, and Integrity guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card p-6 rounded-lg border text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Executive Name</h3>
                <p className="text-primary text-sm mb-2">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;