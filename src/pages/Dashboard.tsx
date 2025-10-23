import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, PieChart, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Go-Pay <span className="text-indigo-600">Analytics Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive strategic dashboards with detailed financial projections, market analysis, and operational metrics
          </p>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Dashboard One Card */}
          <Link 
            to="/dashboard/infographic-one"
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex items-center space-x-2 text-indigo-600 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">View Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Strategic Investment Dashboard
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Deep dive into financials, unit economics, and competitive strategy with 13 comprehensive analytical cards and interactive visualizations.
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <PieChart className="w-4 h-4 mr-2 text-indigo-500" />
                  <span>13 Strategic Metrics Cards</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <TrendingUp className="w-4 h-4 mr-2 text-indigo-500" />
                  <span>Revenue & Growth Projections</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <BarChart3 className="w-4 h-4 mr-2 text-indigo-500" />
                  <span>Competitive Analysis & Risk Assessment</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    Executive Summary
                  </span>
                  <span>12 Interactive Charts</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Dashboard Two Card */}
          <Link 
            to="/dashboard/infographic-two"
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
            
            <div className="p-8 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-orange-100 rounded-xl group-hover:bg-orange-200 transition-colors">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex items-center space-x-2 text-orange-600 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-semibold">View Dashboard</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                35-Point Strategic Data Summary
              </h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive executive overview featuring 35 KPI cards and 35 detailed charts covering all aspects of financial, market, and operational metrics.
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-700">
                  <PieChart className="w-4 h-4 mr-2 text-orange-500" />
                  <span>35 Executive KPI Cards</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <TrendingUp className="w-4 h-4 mr-2 text-orange-500" />
                  <span>11 Financial & Investment Charts</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <BarChart3 className="w-4 h-4 mr-2 text-orange-500" />
                  <span>24 Market & Operational Charts</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                    Detailed Analysis
                  </span>
                  <span>35 Data Visualizations</span>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About These Dashboards</h3>
              <p className="text-gray-600 leading-relaxed">
                These analytics dashboards provide comprehensive insights into Go-Pay's strategic positioning in Northern Nigeria. 
                All data is derived from detailed market analysis, financial projections, and strategic outlook reports. 
                Charts are interactive and built with Chart.js for optimal performance and visualization clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <p className="text-3xl font-bold text-indigo-600">48</p>
            <p className="text-sm text-gray-600 mt-1">Total Metrics</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <p className="text-3xl font-bold text-orange-600">47</p>
            <p className="text-sm text-gray-600 mt-1">Interactive Charts</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <p className="text-3xl font-bold text-green-600">3</p>
            <p className="text-sm text-gray-600 mt-1">Year Projections</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center">
            <p className="text-3xl font-bold text-purple-600">100%</p>
            <p className="text-sm text-gray-600 mt-1">Data Accuracy</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
