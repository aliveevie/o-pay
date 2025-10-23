import { useEffect } from 'react';

const InfographicsDashboard2 = () => {
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
      if (document.body.contains(chartScript)) {
        document.body.removeChild(chartScript);
      }
    };
  }, []);

  const initializeCharts = () => {
    // @ts-ignore - Chart is loaded from CDN
    const Chart = window.Chart;

    const P = 3.14159; // Placeholder for common constants
    const brilliantBlue = '#004AAD';
    const steelBlue = '#0096C7';
    const skyBlue = '#00B4D8';
    const accentOrange = '#F48C06';
    const accentRed = '#D00000';
    const accentGreen = '#40916C';

    // Utility function to generate a generic chart configuration
    const createChart = (id: string, config: any) => {
      const canvas = document.getElementById(id) as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      new Chart(ctx, config);
    };

    const defaultChartOptions = (title: string) => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top' as const,
          labels: { boxWidth: 10 }
        },
        title: {
          display: true,
          text: title,
          font: { size: 14, weight: 'bold' as const }
        }
      }
    });

    // --- 1. Financials & Investment Charts (1-11) ---

    // Chart 1: Initial CAPEX Breakdown (₦3.828B)
    createChart('chart1', {
      type: 'pie',
      data: {
        labels: ['Technology', 'Hardware (POS)', 'HR/Training', 'Licenses/Legal'],
        datasets: [{
          label: 'CAPEX (₦M)',
          data: [2488, 765.6, 382.8, 191.4], // 65%, 20%, 10%, 5% of 3828M
          backgroundColor: [brilliantBlue, accentOrange, accentGreen, steelBlue],
          hoverOffset: 4
        }]
      },
      options: defaultChartOptions('1. Initial CAPEX Breakdown (₦3.828B)')
    });

    // Chart 2: Year 1 OPEX Allocation (₦2.433B)
    createChart('chart2', {
      type: 'doughnut',
      data: {
        labels: ['Personnel (45%)', 'Marketing (27%)', 'Cloud/IT Ops (18%)', 'G&A (10%)'],
        datasets: [{
          label: 'OPEX Share',
          data: [1094.85, 656.91, 437.94, 243.3],
          backgroundColor: [accentOrange, brilliantBlue, skyBlue, accentGreen],
          hoverOffset: 4
        }]
      },
      options: defaultChartOptions('2. Y1 OPEX Allocation (₦2.433B)')
    });

    // Chart 3: Total Annual Cost Projection
    createChart('chart3', {
      type: 'bar',
      data: {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [{
          label: 'Total Cost (₦B)',
          data: [6.261, 2.676, 2.943], // Y1: CAPEX+OPEX (3.828+2.433); Y2: OPEX*1.1; Y3: OPEX*1.1^2
          backgroundColor: [brilliantBlue, steelBlue, skyBlue],
        }]
      },
      options: {
        ...defaultChartOptions('3. Total Annual Cost Projection (₦B)'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `₦${v}B` } } }
      }
    });

    // Chart 4: OPEX Growth Trajectory (10% Annual Growth)
    createChart('chart4', {
      type: 'line',
      data: {
        labels: ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'],
        datasets: [{
          label: 'Projected OPEX (₦B)',
          data: [2.43, 2.67, 2.94, 3.23, 3.55],
          borderColor: accentOrange,
          tension: 0.3
        }]
      },
      options: {
        ...defaultChartOptions('4. Annual OPEX Growth Trajectory (10%)'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `₦${v}B` } } }
      }
    });

    // Chart 5: LTV:CAC Ratio Goal
    createChart('chart5', {
      type: 'doughnut',
      data: {
        labels: ['Achieved LTV (4)', 'Required CAC (1)'],
        datasets: [{
          label: 'Ratio',
          data: [4, 1],
          backgroundColor: [accentGreen, accentRed],
        }]
      },
      options: {
        ...defaultChartOptions('5. LTV:CAC Ratio Goal (4:1)'),
        cutout: '70%',
        plugins: { legend: { display: true, position: 'right' as const } }
      }
    });

    // Chart 6: Technology CAPEX Component Split (65% Share)
    createChart('chart6', {
      type: 'polarArea',
      data: {
        labels: ['Core Platform Dev', 'Cloud/Hosting', 'Security & Compliance', 'API Integration'],
        datasets: [{
          label: 'Share (%)',
          data: [40, 30, 15, 15],
          backgroundColor: [brilliantBlue, steelBlue, skyBlue, accentOrange],
        }]
      },
      options: defaultChartOptions('6. Tech CAPEX Component Split')
    });

    // Chart 7: Breakeven Analysis (Month 30 Target)
    createChart('chart7', {
      type: 'line',
      data: {
        labels: Array.from({ length: 36 }, (_, i) => `M${i + 1}`),
        datasets: [{
          label: 'Cumulative Profit (₦B)',
          data: Array.from({ length: 36 }, (_, i) => {
            if (i < 30) return (i * 0.1) - 3;
            return -0.2 + (i - 29) * 0.15;
          }),
          borderColor: brilliantBlue,
          backgroundColor: 'rgba(0, 74, 173, 0.1)',
          fill: true,
          pointRadius: (ctx: any) => (ctx.dataIndex === 29) ? 5 : 0
        }, {
          label: 'Breakeven (0)',
          data: Array(36).fill(0),
          borderColor: accentRed,
          borderDash: [5, 5],
          pointRadius: 0
        }]
      },
      options: {
        ...defaultChartOptions('7. Cumulative Profit (Breakeven Month 30)'),
        scales: { 
          y: { 
            ticks: { callback: (v: any) => `₦${v.toFixed(1)}B` },
            min: -3,
          } 
        }
      }
    });

    // Chart 8: Year 1 Marketing Budget Allocation (₦650M)
    createChart('chart8', {
      type: 'bar',
      data: {
        labels: ['Agent Incentives', 'Digital/Social', 'Traditional Media', 'Partnerships'],
        datasets: [{
          label: 'Budget (₦M)',
          data: [250, 200, 100, 100],
          backgroundColor: accentOrange,
        }]
      },
      options: {
        ...defaultChartOptions('8. Y1 Marketing Budget Allocation (₦M)'),
        indexAxis: 'y' as const
      }
    });

    // Chart 9: ATV Progression Target (₦5,000)
    createChart('chart9', {
      type: 'bar',
      data: {
        labels: ['Q1 Y1', 'Q4 Y1', 'Q2 Y2', 'Y3 Target'],
        datasets: [{
          label: 'ATV (₦)',
          data: [2500, 3200, 4100, 5000],
          backgroundColor: accentOrange
        }]
      },
      options: defaultChartOptions('9. ATV Progression Target (₦)')
    });

    // Chart 10: Gross Margin Progression to 35%
    createChart('chart10', {
      type: 'line',
      data: {
        labels: ['Y1 Q1', 'Y1 Q4', 'Y2 Q4', 'Y3 Target'],
        datasets: [{
          label: 'Gross Margin (%)',
          data: [15, 22, 30, 35],
          borderColor: accentGreen,
          fill: true,
          backgroundColor: 'rgba(64, 145, 108, 0.2)'
        }]
      },
      options: defaultChartOptions('10. Gross Margin Progression (%)')
    });

    // Chart 11: Hardware (POS) CAPEX Distribution (20% Share)
    createChart('chart11', {
      type: 'pie',
      data: {
        labels: ['Smart POS Devices', 'Basic POS Terminals', 'Maintenance Stock'],
        datasets: [{
          label: 'Hardware Split (%)',
          data: [60, 30, 10],
          backgroundColor: [brilliantBlue, skyBlue, steelBlue],
        }]
      },
      options: defaultChartOptions('11. POS Hardware CAPEX Distribution')
    });

    // --- 2. Market & Growth Charts (12-23) ---

    // Chart 12: E-Payments Market Volume Share
    createChart('chart12', {
      type: 'bar',
      data: {
        labels: ['Total Market', 'Incumbents (80%)', 'Go-Pay Target (0.44%)'],
        datasets: [{
          label: 'Volume (₦ Trillion)',
          data: [384, 307.2, 1.7],
          backgroundColor: [steelBlue, accentOrange, brilliantBlue],
        }]
      },
      options: {
        ...defaultChartOptions('12. E-Payments Market Volume Share (₦T)'),
        scales: { y: { ticks: { callback: (v: any) => `₦${v}T` }, beginAtZero: true } }
      }
    });

    // Chart 13: Y3 Annual Revenue Target Achievement
    createChart('chart13', {
      type: 'line',
      data: {
        labels: ['Y1', 'Y2', 'Y3'],
        datasets: [{
          label: 'Target Revenue (₦B)',
          data: [3.2, 5.8, 8.52],
          borderColor: brilliantBlue,
        }]
      },
      options: {
        ...defaultChartOptions('13. Annual Revenue Progression (₦B)'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `₦${v}B` } } }
      }
    });

    // Chart 14: Active Customer Growth (Monthly Y1)
    createChart('chart14', {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `M${i+1}`),
        datasets: [{
          label: 'Active Customers (Thousands)',
          data: [10, 25, 50, 75, 100, 130, 170, 210, 250, 300, 350, 400],
          borderColor: accentOrange,
          tension: 0.3
        }]
      },
      options: defaultChartOptions('14. Y1 Active Customer Growth (Target: 1M+)')
    });

    // Chart 15: Y1 Agent Network Onboarding
    createChart('chart15', {
      type: 'bar',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          label: 'New Agents',
          data: [800, 1200, 1500, 1500],
          backgroundColor: accentGreen,
        }]
      },
      options: defaultChartOptions('15. Y1 Agent Network Onboarding (Target: 5k)')
    });

    // Chart 16: Y3 Transaction Volume (TTV) Projection
    createChart('chart16', {
      type: 'bar',
      data: {
        labels: ['Y1', 'Y2', 'Y3'],
        datasets: [{
          label: 'TTV (₦ Trillion)',
          data: [0.35, 0.8, 1.7],
          backgroundColor: brilliantBlue,
        }]
      },
      options: {
        ...defaultChartOptions('16. Total Transaction Volume (TTV) Projection'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `₦${v}T` } } }
      }
    });

    // Chart 17: Target Loan Portfolio Growth (₦500M)
    createChart('chart17', {
      type: 'line',
      data: {
        labels: ['Q1 Y2', 'Q4 Y2', 'Q2 Y3', 'Q4 Y3'],
        datasets: [{
          label: 'Loan Portfolio (₦M)',
          data: [50, 150, 300, 500],
          borderColor: accentOrange,
          tension: 0.2
        }]
      },
      options: {
        ...defaultChartOptions('17. Target Loan Portfolio Growth (₦M)'),
        scales: { y: { beginAtZero: true } }
      }
    });

    // Chart 18: OPay Valuation Benchmark Comparison
    createChart('chart18', {
      type: 'bar',
      data: {
        labels: ['OPay (Current)', 'Go-Pay (Y3 Est.)'],
        datasets: [{
          label: 'Valuation (USD Billions)',
          data: [2.5, 0.9],
          backgroundColor: [steelBlue, brilliantBlue],
        }]
      },
      options: {
        ...defaultChartOptions('18. OPay Valuation Benchmark ($B)'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `$${v}B` } } }
      }
    });

    // Chart 19: Target Merchant Count Onboarding (15k)
    createChart('chart19', {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `Q${Math.floor(i/3)+1}`),
        datasets: [{
          label: 'Merchant Count (Thousands)',
          data: [1, 2.5, 4.5, 6.5, 9, 11.5, 13.5, 15],
          borderColor: brilliantBlue,
        }]
      },
      options: defaultChartOptions('19. Target Merchant Count (Y1-Y3 Q4)')
    });

    // Chart 20: Wallet Penetration Rate (Y3 Target 25%)
    createChart('chart20', {
      type: 'doughnut',
      data: {
        labels: ['Penetration Target', 'Remaining Market'],
        datasets: [{
          label: 'Penetration Rate',
          data: [25, 75],
          backgroundColor: [accentGreen, '#e2e8f0'],
        }]
      },
      options: {
        ...defaultChartOptions('20. Wallet Penetration Rate (25% Target)'),
        cutout: '60%',
        plugins: { legend: { display: true, position: 'right' as const } }
      }
    });

    // Chart 21: Cross-Border Payment Volume Split (₦200B)
    createChart('chart21', {
      type: 'bar',
      data: {
        labels: ['Inbound Remittance', 'Outbound Payments'],
        datasets: [{
          label: 'Volume (₦ Billion)',
          data: [120, 80],
          backgroundColor: [accentOrange, brilliantBlue],
        }]
      },
      options: {
        ...defaultChartOptions('21. X-Border Volume Split (₦B)'),
        indexAxis: 'y' as const
      }
    });

    // Chart 22: CAC by Acquisition Channel (₦1,200 Goal)
    createChart('chart22', {
      type: 'bar',
      data: {
        labels: ['Digital Ads', 'Agent Referral', 'POS Activation'],
        datasets: [{
          label: 'CAC (₦)',
          data: [1500, 800, 1000],
          backgroundColor: [steelBlue, accentGreen, skyBlue],
        }]
      },
      options: {
        ...defaultChartOptions('22. Customer Acquisition Cost by Channel (₦)'),
        scales: { y: { beginAtZero: true } }
      }
    });

    // Chart 23: Monthly Active Users (MAU) Target (Y1: 300k)
    createChart('chart23', {
      type: 'line',
      data: {
        labels: Array.from({ length: 12 }, (_, i) => `M${i+1}`),
        datasets: [{
          label: 'MAU (Thousands)',
          data: [20, 45, 80, 120, 160, 200, 240, 270, 300, 330, 360, 390],
          borderColor: brilliantBlue,
        }, {
          label: '300k Target',
          data: Array(12).fill(300),
          borderColor: accentRed,
          borderDash: [5, 5],
          pointRadius: 0
        }]
      },
      options: defaultChartOptions('23. Y1 MAU Progression vs. Target (Thousands)')
    });

    // --- 3. Operational & Strategic Charts (24-35) ---

    // Chart 24: Core Transaction Fee Comparison (0.5%)
    createChart('chart24', {
      type: 'bar',
      data: {
        labels: ['Go-Pay', 'Comp. A', 'Comp. B'],
        datasets: [{
          label: 'Txn Fee (%)',
          data: [0.5, 0.7, 0.6],
          backgroundColor: [accentGreen, steelBlue, skyBlue],
        }]
      },
      options: defaultChartOptions('24. Core Transaction Fee Comparison (%)')
    });

    // Chart 25: Flutterwave Valuation Benchmark ($3B)
    createChart('chart25', {
      type: 'bar',
      data: {
        labels: ['Flutterwave (Current)', 'Go-Pay Enterprise (Y5 Est.)'],
        datasets: [{
          label: 'Valuation (USD Billions)',
          data: [3.0, 1.8],
          backgroundColor: [accentGreen, brilliantBlue],
        }]
      },
      options: {
        ...defaultChartOptions('25. Flutterwave Benchmark ($B)'),
        scales: { y: { beginAtZero: true, ticks: { callback: (v: any) => `$${v}B` } } }
      }
    });

    // Chart 26: Payout Cycle Speed (Days)
    createChart('chart26', {
      type: 'bar',
      data: {
        labels: ['Go-Pay (Target)', 'Industry Average'],
        datasets: [{
          label: 'Settlement Time (Days)',
          data: [1.5, 2.5],
          backgroundColor: [brilliantBlue, steelBlue],
        }]
      },
      options: defaultChartOptions('26. Payout Cycle Speed (Days)')
    });

    // Chart 27: System Availability (99.99%)
    createChart('chart27', {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          label: 'Actual Uptime (%)',
          data: [99.85, 99.92, 99.96, 99.99],
          borderColor: accentGreen,
          tension: 0.1
        }, {
          label: 'Target (99.99%)',
          data: Array(4).fill(99.99),
          borderColor: accentRed,
          borderDash: [5, 5],
          pointRadius: 0
        }]
      },
      options: {
        ...defaultChartOptions('27. System Availability (%) - ZOOOMED'),
        scales: { 
          y: { 
            min: 99.80,
            max: 100,
            ticks: { callback: (v: any) => `${v}%` } 
          } 
        }
      }
    });

    // Chart 28: AML Alerts per 10k Transactions
    createChart('chart28', {
      type: 'bar',
      data: {
        labels: ['Month 1', 'Month 6', 'Month 12'],
        datasets: [{
          label: 'AML Alerts/10k Txn',
          data: [15, 8, 4],
          backgroundColor: accentRed,
        }]
      },
      options: defaultChartOptions('28. AML Alerts per 10k Txn (Decreasing)')
    });

    // Chart 29: Data Monetization Revenue Split (₦300M)
    createChart('chart29', {
      type: 'pie',
      data: {
        labels: ['Credit Scoring APIs (60%)', 'Market Intelligence Reports (30%)', 'Aggregated Trends (10%)'],
        datasets: [{
          label: 'Revenue Share (%)',
          data: [60, 30, 10],
          backgroundColor: [brilliantBlue, accentOrange, steelBlue],
        }]
      },
      options: defaultChartOptions('29. Data Monetization Revenue Split')
    });

    // Chart 30: Regulatory Risk Assessment (9/10 High)
    createChart('chart30', {
      type: 'radar',
      data: {
        labels: ['Licensing Renewal', 'Sanctions Policy', 'Data Privacy (NDPR)', 'Foreign Exchange Rules'],
        datasets: [{
          label: 'Risk Score (Out of 10)',
          data: [8, 9, 7, 9],
          backgroundColor: 'rgba(208, 0, 0, 0.2)',
          borderColor: accentRed,
        }]
      },
      options: {
        ...defaultChartOptions('30. Regulatory Risk Areas'),
        scales: { r: { max: 10, min: 0 } }
      }
    });

    // Chart 31: Fraud Rate Target (< 0.05%)
    createChart('chart31', {
      type: 'bar',
      data: {
        labels: ['Go-Pay Actual (Y1)', 'Industry Average', 'Target (<0.05%)'],
        datasets: [{
          label: 'Fraud Rate (%)',
          data: [0.065, 0.15, 0.05],
          backgroundColor: [accentRed, steelBlue, accentGreen],
        }]
      },
      options: {
        ...defaultChartOptions('31. Fraud Rate vs. Industry Average (%) - ZOOOMED'),
        scales: { 
          y: { 
            beginAtZero: true, 
            max: 0.20,
            ticks: { callback: (v: any) => `${v}%` } 
          } 
        }
      }
    });

    // Chart 32: Customer Support SLA (First Response) vs. 5 Min Target
    createChart('chart32', {
      type: 'bar',
      data: {
        labels: ['Chat', 'Phone', 'Email'],
        datasets: [{
          label: 'Avg First Response Time (Minutes)',
          data: [2.5, 1.8, 15],
          backgroundColor: [accentGreen, brilliantBlue, accentOrange],
        }, {
          label: 'SLA Target (5 Mins)',
          data: Array(3).fill(5),
          type: 'line',
          borderColor: accentRed,
          borderDash: [5, 5],
          pointRadius: 0
        }]
      },
      options: defaultChartOptions('32. Customer Support SLA (First Response Time)')
    });

    // Chart 33: Agent Commission Rate Comparison (1.5%)
    createChart('chart33', {
      type: 'bar',
      data: {
        labels: ['Go-Pay', 'Comp. A', 'Comp. B'],
        datasets: [{
          label: 'Commission Rate (%)',
          data: [1.5, 1.2, 1.4],
          backgroundColor: [accentGreen, steelBlue, skyBlue],
        }]
      },
      options: defaultChartOptions('33. Agent Commission Rate Comparison (%)')
    });

    // Chart 34: Average Resolution Time (ART) by Channel (< 1 Hour)
    createChart('chart34', {
      type: 'bar',
      data: {
        labels: ['Phone', 'Chat', 'Email'],
        datasets: [{
          label: 'ART (Minutes)',
          data: [35, 45, 90],
          backgroundColor: [brilliantBlue, accentOrange, steelBlue],
        }, {
          label: 'Target (60 Mins)',
          data: Array(3).fill(60),
          type: 'line',
          borderColor: accentRed,
          borderDash: [5, 5],
          pointRadius: 0
        }]
      },
      options: defaultChartOptions('34. Avg. Resolution Time (Minutes)')
    });

    // Chart 35: Tech Debt Reduction Score (Annual)
    createChart('chart35', {
      type: 'line',
      data: {
        labels: ['Y1 Start', 'Y1 End', 'Y2 End', 'Y3 End'],
        datasets: [{
          label: 'Tech Debt Score (Lower is better)',
          data: [100, 80, 64, 51.2],
          borderColor: accentGreen,
          tension: 0.4
        }]
      },
      options: defaultChartOptions('35. Tech Debt Reduction Trajectory (20% Annual)')
    });

    console.log("Go-Pay 35-Point Strategic Data Summary fully loaded.");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        .dashboard2-body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
        }
        .chart-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .kpi-card {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06);
          padding: 1.5rem;
          text-align: center;
        }
        .chart-container {
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          height: 350px;
        }
      `}</style>
      
      <div className="dashboard2-body text-gray-800">
        <div className="max-w-8xl mx-auto p-4 md:p-8">

          <header className="text-center mb-12 py-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#004AAD]">
              Go-Pay 35-Point Strategic Data Summary
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              Executive Overview: 35 KPI Cards & 35 Detailed Charts
            </p>
          </header>
          
          {/* SECTION 1: Executive KPI Cards (35 Total) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">1. Executive KPI Cards (Quick Snapshot)</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6 mb-8">
              
              {/* Financials & Investment (11 Cards) */}
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Initial CAPEX</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">₦3.828B</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Year 1 OPEX</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">₦2.433B</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Total 3-Year Cost</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">₦11.88B</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Annual OPEX Growth Rate</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">10%</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">LTV:CAC Ratio Goal</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">4:1</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Technology CAPEX Share</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">65%</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Y3 Breakeven Point</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">Month 30</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Year 1 Marketing Budget</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">₦650M</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">ATV Target (Y3)</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">₦5,000</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Gross Margin Target (Y3)</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">35%</p>
              </div>
              <div className="kpi-card border-l-4 border-[#F48C06]">
                <span className="text-xs font-semibold text-gray-500 block">Hardware (POS) CAPEX Share</span>
                <p className="text-2xl font-bold text-[#F48C06] mt-1">20%</p>
              </div>

              {/* Market & Growth Targets (12 Cards) */}
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">E-Payments Market Volume</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦384 Trillion</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Y3 Annual Revenue Target</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦8.52 Billion</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Active Customer Target</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">1 Million+</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Y1 Agent Network Target</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">5,000 Agents</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Y3 Transaction Volume Target (TTV)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦1.7 Trillion</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Target Loan Portfolio (Y3)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦500 Million</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">OPay Valuation (Benchmark)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">$2.5B USD</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Target Merchant Count (Y3)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">15,000</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Wallet Penetration Rate (Y3)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">25%</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Cross-Border Payment Volume (Y3)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦200 Billion</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">Customer Acquisition Cost (CAC) Goal</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">₦1,200</p>
              </div>
              <div className="kpi-card border-l-4 border-[#004AAD]">
                <span className="text-xs font-semibold text-gray-500 block">MAU Target (Y1)</span>
                <p className="text-2xl font-bold text-[#004AAD] mt-1">300,000</p>
              </div>

              {/* Operational & Strategic Metrics (12 Cards) */}
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Core Transaction Fee</span>
                <p className="text-2xl font-bold text-green-700 mt-1">0.5%</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Flutterwave Valuation (Benchmark)</span>
                <p className="text-2xl font-bold text-green-700 mt-1">$3B USD</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Payout Cycle Speed</span>
                <p className="text-2xl font-bold text-green-700 mt-1">1-3 Days</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">System Availability Target</span>
                <p className="text-2xl font-bold text-green-700 mt-1">99.99%</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">KYC/AML Status</span>
                <p className="text-2xl font-bold text-green-700 mt-1">Full Compliance</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Data Monetization Rev. (Y3)</span>
                <p className="text-2xl font-bold text-green-700 mt-1">₦300 Million</p>
              </div>
              <div className="kpi-card border-l-4 border-red-700">
                <span className="text-xs font-semibold text-gray-500 block">Regulatory Risk Impact</span>
                <p className="text-2xl font-bold text-red-700 mt-1">9/10 (High)</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Fraud Rate Target</span>
                <p className="text-2xl font-bold text-green-700 mt-1">&lt; 0.05%</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Customer Support SLA (First Response)</span>
                <p className="text-2xl font-bold text-green-700 mt-1">&lt; 5 Minutes</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Agent Commission Rate</span>
                <p className="text-2xl font-bold text-green-700 mt-1">1.5%</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Average Resolution Time (ART)</span>
                <p className="text-2xl font-bold text-green-700 mt-1">&lt; 1 Hour</p>
              </div>
              <div className="kpi-card border-l-4 border-green-700">
                <span className="text-xs font-semibold text-gray-500 block">Tech Debt Reduction Target (Annual)</span>
                <p className="text-2xl font-bold text-green-700 mt-1">20%</p>
              </div>
            </div>
          </section>

          {/* SECTION 2: Detailed Financial & Investment Charts (11 Charts) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">2. Financial & Investment Charts (11 Charts)</h2>
            <div className="chart-grid">
              <div className="chart-container"><canvas id="chart1"></canvas></div>
              <div className="chart-container"><canvas id="chart2"></canvas></div>
              <div className="chart-container"><canvas id="chart3"></canvas></div>
              <div className="chart-container"><canvas id="chart4"></canvas></div>
              <div className="chart-container"><canvas id="chart5"></canvas></div>
              <div className="chart-container"><canvas id="chart6"></canvas></div>
              <div className="chart-container"><canvas id="chart7"></canvas></div>
              <div className="chart-container"><canvas id="chart8"></canvas></div>
              <div className="chart-container"><canvas id="chart9"></canvas></div>
              <div className="chart-container"><canvas id="chart10"></canvas></div>
              <div className="chart-container"><canvas id="chart11"></canvas></div>
            </div>
          </section>

          {/* SECTION 3: Detailed Market & Growth Charts (12 Charts) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">3. Market & Growth Charts (12 Charts)</h2>
            <div className="chart-grid">
              <div className="chart-container"><canvas id="chart12"></canvas></div>
              <div className="chart-container"><canvas id="chart13"></canvas></div>
              <div className="chart-container"><canvas id="chart14"></canvas></div>
              <div className="chart-container"><canvas id="chart15"></canvas></div>
              <div className="chart-container"><canvas id="chart16"></canvas></div>
              <div className="chart-container"><canvas id="chart17"></canvas></div>
              <div className="chart-container"><canvas id="chart18"></canvas></div>
              <div className="chart-container"><canvas id="chart19"></canvas></div>
              <div className="chart-container"><canvas id="chart20"></canvas></div>
              <div className="chart-container"><canvas id="chart21"></canvas></div>
              <div className="chart-container"><canvas id="chart22"></canvas></div>
              <div className="chart-container"><canvas id="chart23"></canvas></div>
            </div>
          </section>

          {/* SECTION 4: Detailed Operational & Strategic Charts (12 Charts) */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">4. Operational & Strategic Charts (12 Charts)</h2>
            <div className="chart-grid">
              <div className="chart-container"><canvas id="chart24"></canvas></div>
              <div className="chart-container"><canvas id="chart25"></canvas></div>
              <div className="chart-container"><canvas id="chart26"></canvas></div>
              <div className="chart-container"><canvas id="chart27"></canvas></div>
              <div className="chart-container"><canvas id="chart28"></canvas></div>
              <div className="chart-container"><canvas id="chart29"></canvas></div>
              <div className="chart-container"><canvas id="chart30"></canvas></div>
              <div className="chart-container"><canvas id="chart31"></canvas></div>
              <div className="chart-container"><canvas id="chart32"></canvas></div>
              <div className="chart-container"><canvas id="chart33"></canvas></div>
              <div className="chart-container"><canvas id="chart34"></canvas></div>
              <div className="chart-container"><canvas id="chart35"></canvas></div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default InfographicsDashboard2;

