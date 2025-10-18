import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    // Load Chart.js from CDN
    const chartScript = document.createElement('script');
    chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js';
    chartScript.async = true;
    chartScript.onload = () => {
      initializeCharts();
    };
    document.body.appendChild(chartScript);

    return () => {
      document.body.removeChild(chartScript);
    };
  }, []);

  const initializeCharts = () => {
    // @ts-ignore - Chart is loaded from CDN
    const Chart = window.Chart;
    
    // Color Palette
    const PRIMARY_COLOR = '#4f46e5'; // Indigo
    const ACCENT_COLOR_1 = '#10b981'; // Green (Success/ARPU)
    const ACCENT_COLOR_2 = '#ef4444'; // Red (Risk/CAC)
    const ACCENT_COLOR_3 = '#fbbf24'; // Amber (Volume/Value)

    /*
    ====================================================================
    CUSTOM CHART.JS PLUGINS
    ====================================================================
    */
    // Plugin to draw '100%' in the center of the Doughnut charts
    const centerTextPlugin = {
      id: 'centerText',
      beforeDraw: (chart: any) => {
        if (chart.config.type === 'doughnut') {
          const ctx = chart.ctx;
          const width = chart.width;
          const height = chart.height;
          
          // Calculate center (accounting for some padding/legend space)
          const centerX = width / 2;
          const centerY = (height / 2); 

          ctx.restore();
          
          // Set font for 100%
          ctx.font = '2.5rem Inter, sans-serif';
          ctx.textBaseline = 'middle';
          ctx.textAlign = 'center';

          const totalText = '100%';
          ctx.fillStyle = PRIMARY_COLOR; // Primary Indigo
          ctx.fillText(totalText, centerX, centerY - 15);
          
          // Set font for descriptive text
          ctx.font = '1rem Inter, sans-serif';
          ctx.fillStyle = '#6b7280'; // Gray
          let subText = '';
          if (chart.canvas.id === 'marketShareChart') subText = 'Y1 Focus';
          else if (chart.canvas.id === 'costStructureChart') subText = 'Y1 Costs';
          else subText = 'Y3 Target';
          
          ctx.fillText(subText, centerX, centerY + 25);
          
          ctx.save();
        }
      }
    };

    // Register the plugin globally
    Chart.register(centerTextPlugin);

    /*
    ====================================================================
    DATA CONFIGURATION (Extracted from Report Tables & Converted to NGN)
    ====================================================================
    */
    const dataConfig = {
      // 1. Revenue Projections (Year 1-3)
      revenue: {
        labels: ['Year 1 (Initial)', 'Year 2 (Growth)', 'Year 3 (Maturity)'],
        values: [7.7, 25.2, 49.0], // Revenue in Billions (₦B)
        colors: [PRIMARY_COLOR + 'b0', PRIMARY_COLOR, PRIMARY_COLOR + 'e0'],
      },
      // 2. User & Agent Growth (Q1-Q4)
      growth: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        userValues: [0.5, 1.2, 2.5, 4.8], // Users in Millions (M)
        agentValues: [15000, 35000, 65000, 100000], // Active Agents (Units)
      },
      // 3. Competitive Analysis (Go-Pay vs. OPay vs. Moniepoint) - (2.3)
      competition: {
        labels: ['Go-Pay (Target)', 'OPay', 'Moniepoint'],
        posFees: [1.2, 1.4, 1.5], // POS Transaction Fee (%) - Lower is better
        agentCommission: [0.30, 0.25, 0.28], // Agent Commission (%) - Higher is better
      },
      // 4. Market Focus (Y1 Segmentation)
      marketFocus: {
        labels: ['Agent Banking (55%)', 'Direct Consumer Payments (30%)', 'Merchant POS & E-commerce (15%)'],
        values: [55, 30, 15], // Percentage breakdown (%)
        colors: ['#f59e0b', ACCENT_COLOR_2, ACCENT_COLOR_1],
      },
      // 5. Risk Assessment (Impact vs. Mitigation)
      risk: {
        labels: ['Regulatory Risk', 'Liquidity/Fraud Risk', 'Tech Disruption Risk', 'Competitive Risk', 'Macro-Economic Risk'],
        impact: [9, 8, 5, 8, 7], // 1-10 scale
        mitigationEffort: [7, 9, 8, 7, 5] // 1-10 scale
      },
      // 6. Transaction Volume & Value (Y1-Y3) 
      transactionMetrics: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        volume: [15, 60, 120], // Transaction Volume (Billions NGN)
        atv: [56000, 77000, 105000], // Average Transaction Value (ATV in NGN)
      },
      // 7. Unit Economics (CAC vs ARPU) 
      unitEconomics: {
        labels: ['Cost of Acquisition (CAC)', 'Annual Revenue Per User (ARPU)'],
        values: [3500, 13300], 
      },
      // 8. Estimated Market Share by Volume (Y3)
      estimatedMarketShare: {
        labels: ['Go-Pay (Target)', 'OPay', 'Moniepoint', 'Others'],
        values: [30, 45, 15, 10], // Percentage (%)
        colors: [PRIMARY_COLOR, '#38bdf8', '#fbbf24', '#9ca3af']
      },
      // NEW: Cost Structure (3.1) - Year 1 Breakdown
      costStructure: {
        labels: ['Agent Acquisition (35%)', 'Technology & Ops (30%)', 'Marketing & Sales (15%)', 'Regulatory/Compliance (10%)', 'G&A (10%)'],
        values: [35, 30, 15, 10, 10], // Percentage (%)
        colors: [ACCENT_COLOR_2, '#3b82f6', ACCENT_COLOR_1, '#f59e0b', '#6b7280'],
      },
      // NEW: Revenue Categories (3.2.1/3.2.3) - Stacked Bar (₦ Billions)
      revenueCategories: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        p2p: [3.0, 8.0, 15.0], // P2P & Consumer (₦B)
        pos: [3.5, 12.0, 25.0], // POS & Agent Banking (₦B)
        billPay: [1.2, 5.2, 9.0], // Bill Payments & Other Fees (₦B)
      },
      // NEW: Competitive Landscape (2.2) - Agent Network Size (Units)
      agentNetwork: {
        labels: ['Go-Pay (Target Y3)', 'OPay (Current)', 'Moniepoint (Current)'],
        networkSize: [100000, 180000, 150000], // Units
        colors: [PRIMARY_COLOR, '#38bdf8', '#fbbf24']
      }
    };

    // Helper function to create a basic chart
    function createChart(ctxId: string, type: string, dataLabels: any, datasets: any, options: any = {}) {
      const ctx = (document.getElementById(ctxId) as HTMLCanvasElement)?.getContext('2d');
      if (!ctx) return;
      
      new Chart(ctx, {
        type: type,
        data: {
          labels: dataLabels,
          datasets: datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              display: datasets.length > 1 || type !== 'doughnut',
              labels: {
                usePointStyle: true,
              }
            },
            title: { display: false },
          },
          ...options,
        }
      });
    }

    /*
    ====================================================================
    1. Projected Revenue Growth (Bar Chart)
    ====================================================================
    */
    createChart(
      'revenueChart',
      'bar',
      dataConfig.revenue.labels,
      [{
        label: 'Projected Revenue (₦ Billions)',
        data: dataConfig.revenue.values,
        backgroundColor: dataConfig.revenue.colors,
        borderColor: dataConfig.revenue.colors.map(c => c.slice(0, 7)),
        borderWidth: 1,
        borderRadius: 4,
      }],
      {
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Revenue (Billions NGN)', font: { weight: 'bold' } }, 
            grid: { color: '#f0f0f0' },
            ticks: { callback: function(value: number) { return '₦' + value.toFixed(1) + 'B'; } } 
          }
        }
      }
    );

    /*
    ====================================================================
    3. User & Agent Growth (Dual-Axis Line Chart)
    ====================================================================
    */
    createChart(
      'growthChart',
      'line',
      dataConfig.growth.labels,
      [
        // User Growth Dataset
        {
          label: 'Active Users (M)',
          data: dataConfig.growth.userValues,
          borderColor: ACCENT_COLOR_2,
          backgroundColor: ACCENT_COLOR_2 + '40', // light fill
          tension: 0.3,
          yAxisID: 'y1',
          fill: 'start',
          pointRadius: 5,
        },
        // Agent Growth Dataset
        {
          label: 'Active Agents (Units)',
          data: dataConfig.growth.agentValues,
          borderColor: PRIMARY_COLOR,
          backgroundColor: PRIMARY_COLOR,
          tension: 0.3,
          yAxisID: 'y2',
          fill: false,
          borderDash: [5, 5],
          pointRadius: 5,
        }
      ],
      {
        scales: {
          x: { grid: { display: false } },
          y1: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            title: { display: true, text: 'Users (Millions)', color: ACCENT_COLOR_2 },
            grid: { color: '#f0f0f0' }
          },
          y2: {
            type: 'linear',
            position: 'right',
            beginAtZero: true,
            title: { display: true, text: 'Agents (Units)', color: PRIMARY_COLOR },
            grid: { drawOnChartArea: false }
          }
        }
      }
    );

    /*
    ====================================================================
    4. Transaction Metrics (Combined Bar/Line Chart)
    ====================================================================
    */
    createChart(
      'transactionChart',
      'bar',
      dataConfig.transactionMetrics.labels,
      [
        {
          label: 'Transaction Volume (NGN B)',
          data: dataConfig.transactionMetrics.volume,
          backgroundColor: ACCENT_COLOR_3,
          yAxisID: 'v1',
          borderRadius: 4,
        },
        {
          type: 'line',
          label: 'Avg. Transaction Value (ATV in ₦)',
          data: dataConfig.transactionMetrics.atv,
          borderColor: PRIMARY_COLOR,
          backgroundColor: PRIMARY_COLOR,
          yAxisID: 'v2',
          tension: 0.4,
          pointRadius: 6,
        }
      ],
      {
        scales: {
          v1: {
            type: 'linear',
            position: 'left',
            title: { display: true, text: 'Volume (NGN Billions)', color: ACCENT_COLOR_3 },
            beginAtZero: true,
            ticks: { callback: function(value: number) { return '₦' + value + 'B'; } }
          },
          v2: {
            type: 'linear',
            position: 'right',
            title: { display: true, text: 'ATV (NGN)', color: PRIMARY_COLOR },
            grid: { drawOnChartArea: false },
            beginAtZero: true,
            ticks: { callback: function(value: number) { return '₦' + value.toLocaleString(); } }
          }
        }
      }
    );

    /*
    ====================================================================
    5. Unit Economics (Bar Chart)
    ====================================================================
    */
    createChart(
      'unitEconomicsChart',
      'bar',
      dataConfig.unitEconomics.labels,
      [{
        label: 'Cost/Revenue per User (₦)',
        data: dataConfig.unitEconomics.values,
        backgroundColor: [ACCENT_COLOR_2 + 'd0', ACCENT_COLOR_1 + 'd0'],
        borderRadius: 5,
      }],
      {
        indexAxis: 'y', // Horizontal bars
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Value (NGN)' },
            ticks: { callback: function(value: number) { return '₦' + value.toLocaleString(); } }
          }
        }
      }
    );

    /*
    ====================================================================
    6. Cost Structure Breakdown (Doughnut Chart) (3.1) - NEW
    ====================================================================
    */
    createChart(
      'costStructureChart',
      'doughnut',
      dataConfig.costStructure.labels,
      [{
        data: dataConfig.costStructure.values,
        backgroundColor: dataConfig.costStructure.colors,
        hoverOffset: 15,
        borderColor: 'white',
        borderWidth: 3
      }],
      {
        plugins: {
          legend: { display: true, position: 'bottom' },
          tooltip: { enabled: true }
        }
      }
    );

    /*
    ====================================================================
    7. Competitive Analysis (Grouped Bar Chart) (2.3)
    ====================================================================
    */
    createChart(
      'competitionChart',
      'bar',
      dataConfig.competition.labels,
      [
        {
          label: 'POS Transaction Fee (%) (Lower is better)',
          data: dataConfig.competition.posFees,
          backgroundColor: PRIMARY_COLOR + 'd0',
          borderRadius: 3,
        },
        {
          label: 'Agent Commission (%) (Higher is better)',
          data: dataConfig.competition.agentCommission,
          backgroundColor: ACCENT_COLOR_1 + 'd0',
          borderRadius: 3,
        }
      ],
      {
        scales: {
          y: {
            beginAtZero: true,
            max: 2.0,
            title: { display: true, text: 'Percentage (%)' },
            ticks: { callback: function(value: number) { return value.toFixed(2) + '%'; } }
          }
        }
      }
    );
    
    /*
    ====================================================================
    8. Competitive Landscape: Agent Network Size (Bar Chart) (2.2) - NEW
    ====================================================================
    */
    createChart(
      'agentNetworkChart',
      'bar',
      dataConfig.agentNetwork.labels,
      [{
        label: 'Agent Network Size (Units)',
        data: dataConfig.agentNetwork.networkSize,
        backgroundColor: dataConfig.agentNetwork.colors,
        borderRadius: 4,
      }],
      {
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Number of Agents (Units)' },
            ticks: { callback: function(value: number) { return value.toLocaleString(); } } 
          }
        }
      }
    );

    /*
    ====================================================================
    9. Market Focus Breakdown (Doughnut Chart)
    ====================================================================
    */
    createChart(
      'marketShareChart',
      'doughnut',
      dataConfig.marketFocus.labels,
      [{
        data: dataConfig.marketFocus.values,
        backgroundColor: dataConfig.marketFocus.colors,
        hoverOffset: 15,
        borderColor: 'white',
        borderWidth: 3
      }],
      {
        plugins: {
          legend: { display: true, position: 'bottom' },
          tooltip: { enabled: true }
        }
      }
    );
    
    /*
    ====================================================================
    10. Risk Assessment (Radar Chart)
    ====================================================================
    */
    createChart(
      'riskChart',
      'radar',
      dataConfig.risk.labels,
      [
        {
          label: 'Impact (High is Bad)',
          data: dataConfig.risk.impact,
          backgroundColor: 'rgba(239, 68, 68, 0.3)', // Red/Danger
          borderColor: ACCENT_COLOR_2,
          pointBackgroundColor: ACCENT_COLOR_2,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: ACCENT_COLOR_2
        },
        {
          label: 'Mitigation Effort (High is Good)',
          data: dataConfig.risk.mitigationEffort,
          backgroundColor: 'rgba(16, 185, 129, 0.3)', // Green/Safety
          borderColor: ACCENT_COLOR_1,
          pointBackgroundColor: ACCENT_COLOR_1,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: ACCENT_COLOR_1
        }
      ],
      {
        elements: {
          line: { borderWidth: 2 }
        },
        scales: {
          r: {
            angleLines: { color: '#e5e7eb' },
            grid: { color: '#e5e7eb' },
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: {
              backdropColor: '#f4f7f9',
              stepSize: 2
            },
            pointLabels: {
              font: { size: 12, weight: '600' }
            }
          }
        }
      }
    );

    /*
    ====================================================================
    11. Estimated Market Share by Volume (Doughnut Chart)
    ====================================================================
    */
    createChart(
      'estimatedMarketShareChart',
      'doughnut',
      dataConfig.estimatedMarketShare.labels,
      [{
        data: dataConfig.estimatedMarketShare.values,
        backgroundColor: dataConfig.estimatedMarketShare.colors,
        hoverOffset: 15,
        borderColor: 'white',
        borderWidth: 3
      }],
      {
        plugins: {
          legend: { display: true, position: 'bottom' },
          tooltip: { enabled: true }
        }
      }
    );
    
    /*
    ====================================================================
    12. Revenue Contribution by Service Category (Stacked Bar) (3.2.1/3.2.3) - NEW
    ====================================================================
    */
    createChart(
      'revenueCategoriesChart',
      'bar',
      dataConfig.revenueCategories.labels,
      [
        {
          label: 'POS & Agent Banking (Highest Contributor)',
          data: dataConfig.revenueCategories.pos,
          backgroundColor: ACCENT_COLOR_3,
          stack: 'stack0',
          borderRadius: 3,
        },
        {
          label: 'P2P & Consumer Payments',
          data: dataConfig.revenueCategories.p2p,
          backgroundColor: PRIMARY_COLOR,
          stack: 'stack0',
          borderRadius: 3,
        },
        {
          label: 'Bill Payments & Other Fees',
          data: dataConfig.revenueCategories.billPay,
          backgroundColor: ACCENT_COLOR_1,
          stack: 'stack0',
          borderRadius: 3,
        }
      ],
      {
        scales: {
          x: { stacked: true },
          y: {
            stacked: true,
            beginAtZero: true,
            title: { display: true, text: 'Revenue (Billions NGN)' },
            ticks: { callback: function(value: number) { return '₦' + value.toFixed(1) + 'B'; } }
          }
        }
      }
    );

    console.log("Comprehensive Strategic Dashboard fully updated with 13 cards.");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        
        .dashboard-body {
          font-family: 'Inter', sans-serif;
          background-color: #f4f7f9;
        }
        .dashboard-card {
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s;
        }
        .dashboard-card:hover {
          transform: translateY(-2px);
        }
        .dashboard-chart-container {
          position: relative;
          height: 350px;
        }
      `}</style>
      
      <div className="dashboard-body p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center py-6 bg-white rounded-xl dashboard-card mb-8 border-t-4 border-indigo-500">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-700">Go-Pay Northern Nigeria: Strategic Investment Dashboard</h1>
            <p className="mt-2 text-gray-500">Deep Dive into Financials, Unit Economics, and Competitive Strategy.</p>
          </header>

          {/* Main Content Grid */}
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Card 1: Projected Revenue Growth (Bar Chart) - 2 Span */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">1. Projected Revenue Growth (₦ Billions) - Y1 to Y3</h2>
              <div className="dashboard-chart-container">
                <canvas id="revenueChart"></canvas>
              </div>
            </div>

            {/* Card 2: Strategic Metrics (Text/Metrics) - 1 Span */}
            <div className="bg-white p-6 rounded-xl dashboard-card flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">2. Key Strategic Targets (Y3)</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 font-semibold">Total Revenue Target:</p>
                    <p className="text-3xl font-extrabold text-green-900">₦49.0 Billion</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 font-semibold">Projected User Base:</p>
                    <p className="text-3xl font-extrabold text-blue-900">4.8 Million</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-700 font-semibold">Agent Network Target:</p>
                    <p className="text-3xl font-extrabold text-yellow-900">100,000 Agents</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3: User & Agent Growth (Dual-Axis Line Chart) - 3 Span */}
            <div className="lg:col-span-3 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">3. User Adoption (M) & Agent Network Growth (Units) - Q1 to Q4</h2>
              <div className="dashboard-chart-container">
                <canvas id="growthChart"></canvas>
              </div>
            </div>

            {/* Card 4: Transaction Volume vs. Value (Combined Bar/Line Chart) - 2 Span */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">4. Transaction Metrics: Volume (NGN B) vs. Avg. Value (₦)</h2>
              <div className="dashboard-chart-container">
                <canvas id="transactionChart"></canvas>
              </div>
            </div>

            {/* Card 5: Unit Economics (CAC vs ARPU) - 1 Span */}
            <div className="bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">5. Unit Economics: ARPU vs. CAC (₦)</h2>
              <p className="text-sm text-gray-500 mb-4">(₦13,300 ARPU vastly exceeds ₦3,500 CAC by Year 2)</p>
              <div className="dashboard-chart-container">
                <canvas id="unitEconomicsChart"></canvas>
              </div>
            </div>

            {/* NEW CARD 6: Cost Structure (3.1) - 1 Span (Fills space next to Card 5) */}
            <div className="bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">6. Cost Structure Breakdown (Year 1 Initial Spend)</h2>
              <div className="dashboard-chart-container max-w-sm mx-auto p-4">
                <canvas id="costStructureChart"></canvas>
              </div>
            </div>
            
            {/* Card 7: Competitive Analysis (Grouped Bar Chart) - 2 Span */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">7. Competitive Pricing: Fees & Commissions (%) (2.3)</h2>
              <div className="dashboard-chart-container">
                <canvas id="competitionChart"></canvas>
              </div>
            </div>
            
            {/* NEW CARD 8: Competitive Landscape (2.2) - 1 Span (Fills space next to Card 7) */}
            <div className="bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">8. Competitive Landscape: Agent Network Size (2.2)</h2>
              <div className="dashboard-chart-container">
                <canvas id="agentNetworkChart"></canvas>
              </div>
            </div>

            {/* Card 9: Market Focus Breakdown (Doughnut Chart) - 1 Span */}
            <div className="bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">9. Year 1 Market Focus Breakdown (%)</h2>
              <div className="dashboard-chart-container max-w-sm mx-auto p-4">
                <canvas id="marketShareChart"></canvas>
              </div>
            </div>

            {/* Card 10: Risk Assessment (Radar Chart) - 2 Span */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">10. Risk Assessment (Impact vs. Mitigation Effort)</h2>
              <p className="text-sm text-gray-500 mb-4">(Scale 1-10: 10 = Highest Impact / Highest Effort)</p>
              <div className="dashboard-chart-container max-w-xl mx-auto">
                <canvas id="riskChart"></canvas>
              </div>
            </div>
            
            {/* Card 11: Estimated Market Share by Volume (Doughnut Chart) - 1 Span */}
            <div className="bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">11. Estimated Market Share by Volume (Y3)</h2>
              <div className="dashboard-chart-container max-w-sm mx-auto p-4">
                <canvas id="estimatedMarketShareChart"></canvas>
              </div>
            </div>
            
            {/* NEW CARD 12: Revenue Categories (3.2.1/3.2.3) - 3 Span */}
            <div className="lg:col-span-3 bg-white p-6 rounded-xl dashboard-card">
              <h2 className="text-xl font-bold mb-4 text-indigo-600 border-b pb-2">12. Revenue Contribution by Service Category (₦ Billions) (3.2.1/3.2.3)</h2>
              <div className="dashboard-chart-container">
                <canvas id="revenueCategoriesChart"></canvas>
              </div>
            </div>
            
            {/* NEW CARD 13: Recommendations (4) - 3 Span */}
            <div className="lg:col-span-3 bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 rounded-xl dashboard-card border-t-4 border-indigo-700 shadow-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold mb-2 text-indigo-700">13. Key Recommendations & Strategic Direction</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommendation 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Agent Incentive Program</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Maintain the competitive <span className="font-semibold text-green-600">0.30% commission</span> (Card 7) to rapidly scale the Agent Network (Target 100K agents - Card 2, 8).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">POS & Agent Banking Revenue</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        This is the <span className="font-semibold text-blue-600">primary driver</span> of projected revenue growth (Card 12), requiring robust allocation to Agent Acquisition and Tech/Ops (Card 6).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recommendation 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Liquidity & Fraud Risk</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        This is identified as the <span className="font-semibold text-red-600">highest mitigation effort</span> area (Card 10); dedicated compliance and fraud detection systems must be prioritized in the tech stack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional visual enhancement */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L12.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A.996.996 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a.996.996 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd"></path>
                  </svg>
                  Strategic Implementation Roadmap
                </div>
              </div>
            </div>

          </main>

          {/* Footer/Note */}
          <footer className="mt-8 text-center text-gray-400 text-sm">
            Note: Chart data is derived from the "CCS- Go-Pay Market Analysis Financial Projections and Strategic Outlook" report tables, converted to NGN for presentation.
          </footer>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

