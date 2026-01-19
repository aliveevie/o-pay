import { Card } from '@/components/ui/card';
import { 
  Users, 
  Briefcase, 
  Award, 
  Building2,
  UserCheck,
  Shield,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BoardOfDirectors = () => {
  const boardMembers = [
    { name: 'Alhaji Bashir Dalhatu (Wazirin Dutse)', role: 'Chairman of the Board', isChairman: true },
    { name: 'Dr. Ibrahim Ida. (Wazirin Katsina)', role: 'Board Member' },
    { name: 'Alhaji Kabiru Ahmed', role: 'Board Member' },
    { name: 'Baffajo Beita', role: 'MD/CEO' },
    { name: "Alhaji Sabi'u Bako", role: 'Board Member' },
    { name: 'Alhaji Umar F. Shehu', role: 'Board Member' },
    { name: 'Dr. Faruk Umar', role: 'Board Member' },
    { name: 'Dr. Hamza Suleiman Wuro Bokki', role: 'Board Member' },
    { name: 'Dr. Muhammad Nuru Yakubu', role: 'Board Member' },
    { name: 'Hajiya Aishatu Dankani', role: 'Board Member' },
    { name: 'Alhaji Nasir Danu Sardaunan Dutse', role: 'Board Member' },
    { name: "Alhaji Sabi'u Ibrahim Bako", role: 'Board Member' },
    { name: 'Alhaji Hamisu Jingau', role: 'Board Member' },
    { name: 'Hajia Amina Bibi Farouq', role: 'Board Secretary' },
  ];

  const managementTeam = [
    { name: 'Baffajo Beita', role: 'MD/CEO' },
    { name: 'Engr. Bello Ahmed Roni', role: 'Executive Director' },
    { name: 'Hajia Amina Bibi Farouk', role: 'Company Secretary' },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter(word => word.length > 0 && !word.includes('(') && !word.includes(')'))
      .slice(0, 2)
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-blue-500',
      'from-teal-500 to-cyan-500',
      'from-rose-500 to-pink-500',
      'from-amber-500 to-orange-500',
      'from-violet-500 to-purple-500',
      'from-emerald-500 to-teal-500',
      'from-blue-600 to-indigo-600',
      'from-pink-500 to-rose-500',
      'from-cyan-500 to-blue-500',
      'from-green-600 to-emerald-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Users className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-sm font-medium text-white">Leadership & Governance</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
              Board of Directors
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mt-2">
                & Management Team
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Meet the distinguished leaders and visionaries guiding Go-pay's mission to transform 
              digital finance across Nigeria and Africa. Our board brings decades of combined 
              experience in finance, technology, and business leadership.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <div className="flex items-center space-x-2 text-slate-300">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">14 Board Members</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Briefcase className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">3 Executive Leaders</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">Decades of Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
              <Building2 className="h-5 w-5 mr-2 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Board of Directors</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Our Distinguished Board
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse group of accomplished leaders committed to driving innovation and excellence 
              in financial services across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 rounded-2xl ${
                  member.isChairman ? 'ring-2 ring-green-500 ring-offset-2' : ''
                }`}
              >
                <div className="p-6 space-y-4">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${getGradientColor(index)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl font-bold text-white">
                        {getInitials(member.name)}
                      </span>
                      {member.isChairman && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Award className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center space-y-2">
                    <h3 className={`font-bold text-slate-900 text-sm leading-tight ${
                      member.isChairman ? 'text-green-700' : ''
                    }`}>
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-slate-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full">
              <UserCheck className="h-5 w-5 mr-2 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Executive Leadership</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
              Management Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our executive leadership team drives day-to-day operations and strategic execution 
              to deliver exceptional value to our customers and stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {managementTeam.map((member, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl bg-gradient-to-br from-white to-slate-50"
              >
                <div className="p-8 space-y-6">
                  {/* Avatar */}
                  <div className="flex justify-center">
                    <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${getGradientColor(index + 14)} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                      <span className="text-3xl font-bold text-white">
                        {getInitials(member.name)}
                      </span>
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Name and Role */}
                  <div className="text-center space-y-3">
                    <h3 className="font-bold text-slate-900 text-lg">
                      {member.name}
                    </h3>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                      <Briefcase className="h-4 w-4 mr-2 text-white" />
                      <span className="text-sm font-semibold text-white">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Governance Excellence</h3>
                <p className="text-slate-600">
                  Our board ensures the highest standards of corporate governance and regulatory compliance.
                </p>
              </Card>

              <Card className="p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Strategic Vision</h3>
                <p className="text-slate-600">
                  Decades of combined experience guide our strategic direction and growth initiatives.
                </p>
              </Card>

              <Card className="p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Diverse Perspectives</h3>
                <p className="text-slate-600">
                  A diverse board brings varied insights to drive innovation and inclusive growth.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Experience Leadership-Driven Innovation
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Under the guidance of our distinguished board and executive team, Go-pay continues 
              to set new standards in digital finance. Join us on this transformative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardOfDirectors;
