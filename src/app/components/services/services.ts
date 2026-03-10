import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ServiceCategory {
  icon: string;
  label: string;
  title: string;
  description: string;
  items: string[];
  anchor: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly categories: ServiceCategory[] = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2h-2M9 7h2a2 2 0 012 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: 'Accounting',
      title: 'Accounting Services',
      description:
        'Structured financial management, statutory accuracy, and complete transparency to support your business decisions.',
      items: [
        'Bookkeeping & Day-To-Day Accounting',
        'Accounts Payable & Receivable',
        'Bank & Credit Card Reconciliation',
        'GST Accounting & Reconciliation',
        'TDS Accounting & Compliance',
        'Payroll Processing',
        'Financial Statement Preparation',
        'MIS Reporting & Analysis',
        'Year-End Finalization & Audit Support',
      ],
      anchor: '#accounting',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14l2 2 4-4m-4-2a7 7 0 100 14A7 7 0 009 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: 'Tax',
      title: 'Tax Services',
      description:
        'Comprehensive tax compliance, planning, and advisory to minimize liabilities and keep you fully compliant.',
      items: [
        'Income Tax Compliance & Filing',
        'Tax Planning & Advisory',
        'GST Registration & Filing',
        'TDS Return Filing',
        'Tax Audit Support',
        'Representation before Tax Authorities',
        'International & Transfer Pricing',
      ],
      anchor: '#tax',
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      label: 'Finance',
      title: 'Finance Services',
      description:
        'End-to-end financial solutions to manage, arrange, and optimize resources for stability and growth.',
      items: [
        'Business Loan Assistance',
        'Project Finance & Loan Syndication',
        'Working Capital Management',
        'CMA Data Preparation',
        'Financial Projections & Business Plans',
        'Credit Rating and Assessment',
        'Restructuring & Refinancing',
      ],
      anchor: '#finance',
    },
  ];

  protected readonly accountingServices = [
    {
      num: '01',
      title: 'Bookkeeping & Day-To-Day Accounting',
      desc: 'Systematic recording of all financial transactions maintaining accurate and up-to-date books.',
    },
    {
      num: '02',
      title: 'Accounts Payable & Receivable',
      desc: 'Efficient vendor payment and customer collection management with ageing reports.',
    },
    {
      num: '03',
      title: 'Bank & Credit Card Reconciliation',
      desc: 'Regular reconciliation to ensure accuracy and identify discrepancies.',
    },
    {
      num: '04',
      title: 'GST Accounting & Reconciliation',
      desc: 'GST-compliant accounting, ITC reconciliation, and GSTR matching.',
    },
    {
      num: '05',
      title: 'TDS Accounting & Compliance',
      desc: 'TDS calculations, deduction records, and Form 26AS reconciliation.',
    },
    {
      num: '06',
      title: 'Payroll Processing',
      desc: 'Comprehensive payroll management with statutory deductions and payslip generation.',
    },
    {
      num: '07',
      title: 'Financial Statement Preparation',
      desc: 'P&L, Balance Sheet, and Cash Flow Statements with detailed schedules.',
    },
    {
      num: '08',
      title: 'MIS Reporting & Financial Analysis',
      desc: 'Customized MIS reports with revenue analysis and performance indicators.',
    },
    {
      num: '09',
      title: 'Year-End Finalization & Audit Support',
      desc: 'Ledger scrutiny, provision entries, depreciation workings and auditor coordination.',
    },
  ];

  protected readonly taxServices = [
    {
      num: '01',
      title: 'Income Tax Compliance',
      desc: 'ITR preparation and filing for individuals, firms, LLPs, and companies.',
    },
    {
      num: '02',
      title: 'Tax Planning & Advisory',
      desc: 'Strategic tax planning to minimize liability while staying fully compliant.',
    },
    {
      num: '03',
      title: 'GST Registration & Filing',
      desc: 'GST registration, monthly/quarterly GSTR filings and annual returns.',
    },
    {
      num: '04',
      title: 'TDS Return Filing',
      desc: 'Quarterly TDS returns (24Q, 26Q, 27Q) with reconciliation.',
    },
    {
      num: '05',
      title: 'Tax Audit Support',
      desc: 'Preparation for tax audits under Section 44AB and related compliance.',
    },
    {
      num: '06',
      title: 'Tax Authority Representation',
      desc: 'Expert representation before Income Tax and GST authorities.',
    },
  ];

  protected readonly financeServices = [
    {
      num: '01',
      title: 'Business Loan Assistance',
      desc: 'End-to-end support for Term Loans, Working Capital, CC and OD facilities.',
    },
    {
      num: '02',
      title: 'Project Finance',
      desc: 'Detailed project reports, CMA data, and financial projections for funding.',
    },
    {
      num: '03',
      title: 'Working Capital Management',
      desc: 'Optimizing current assets and liabilities for healthy cash flow.',
    },
    {
      num: '04',
      title: 'CMA Data Preparation',
      desc: 'Comprehensive financial analysis for bank lending requirements.',
    },
    {
      num: '05',
      title: 'Financial Projections',
      desc: 'Business plans with 3-5 year financial projections for investors and banks.',
    },
    {
      num: '06',
      title: 'Credit Assessment & Rating',
      desc: 'Credit health analysis and guidance on improving creditworthiness.',
    },
  ];
}
