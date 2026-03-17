import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface ServiceCategory {
  icon: SafeHtml;
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
  private readonly sanitizer = inject(DomSanitizer);
  private s(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  protected readonly categories: ServiceCategory[] = [
    {
      icon: this.s(
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3M9 7V5a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2h-2M9 7h2a2 2 0 012 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      ),
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
      icon: this.s(
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 14l2 2 4-4m-4-2a7 7 0 100 14A7 7 0 009 8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      ),
      label: 'Tax',
      title: 'Tax Services',
      description:
        'Comprehensive tax compliance, planning, and advisory to minimize liabilities and keep you fully compliant.',
      items: [
        'Income Tax Return Filing',
        'GST Return Filing',
        'TDS & TCS Return Filing',
        'PT, PF & ESIC Filing',
        'Income Tax & GST Audit Support',
        'Tax Authority Representation',
        'Tax Planning & Advisory',
        'Capital Gain Tax (Property / Shares / Crypto)',
        'Financial Preparation',
      ],
      anchor: '#tax',
    },
    {
      icon: this.s(
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      ),
      label: 'Finance',
      title: 'Finance Services',
      description:
        'End-to-end financial solutions to manage, arrange, and optimize resources for stability and growth.',
      items: [
        'Home Loan',
        'Mortgage Loan / Loan Against Property (LAP)',
        'Business Loan',
        'Personal Loan',
        'Cash Credit & Overdraft Loan',
        'Project Loan',
        'Government Scheme Loans',
        'Car Loan',
        'Credit Assessment & Rating',
      ],
      anchor: '#finance',
    },
    {
      icon: this.s(
        `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6M9 16h6M7 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 4a2 2 0 002 2h2a2 2 0 002-2M9 4a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      ),
      label: 'Registrations',
      title: 'Registrations & Compliance',
      description:
        'End-to-end registration and licensing support to keep your business legally compliant from day one.',
      items: [
        'PAN & TAN Application',
        'Gumasta (Shop Act) License',
        'Udyam Aadhaar / MSME Registration',
        'GST Registration',
        'Professional Tax Registration',
        'PF & ESIC Registration',
        'Partnership Deed / LLP Formation',
        'Company Incorporation',
        'Food License (FSSAI)',
      ],
      anchor: '#registrations',
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
      title: 'Income Tax Return Filing',
      desc: 'Accurate preparation and timely filing of income tax returns for individuals, professionals, and businesses to ensure full compliance with tax regulations.',
    },
    {
      num: '02',
      title: 'GST Return Filing',
      desc: 'Preparation and submission of monthly, quarterly, and annual GST returns while ensuring proper reconciliation of sales and purchase data.',
    },
    {
      num: '03',
      title: 'TDS & TCS Return Filing',
      desc: 'Preparation and filing of TDS and TCS returns with proper documentation, ensuring compliance with statutory deadlines and regulations.',
    },
    {
      num: '04',
      title: 'PT, PF & ESIC Filing',
      desc: 'Assistance with Professional Tax, Provident Fund, and ESIC returns, including calculation, filing, and compliance support for employers.',
    },
    {
      num: '05',
      title: 'Income Tax & GST Audit Support',
      desc: 'Professional assistance in preparing documents, reports, and records required during Income Tax or GST audits.',
    },
    {
      num: '06',
      title: 'Tax Authority Representation',
      desc: 'Representation and support before tax authorities for notices, assessments, queries, and compliance matters.',
    },
    {
      num: '07',
      title: 'Tax Planning & Advisory',
      desc: 'Strategic tax planning and expert advice to help individuals and businesses legally reduce tax liabilities and optimize financial decisions.',
    },
    {
      num: '08',
      title: 'Capital Gain Tax (Property / Shares / Crypto)',
      desc: 'Calculation and advisory services for capital gains arising from sale of property, shares, or cryptocurrency investments.',
    },
    {
      num: '09',
      title: 'Financial Preparation',
      desc: 'Preparation and organization of financial statements and records to support tax filing, compliance, and financial decision-making.',
    },
  ];

  protected readonly financeServices = [
    {
      num: '01',
      title: 'Home Loan',
      desc: 'Assistance in securing home loans for purchasing, constructing, or renovating residential property with competitive interest rates and flexible repayment options.',
    },
    {
      num: '02',
      title: 'Mortgage Loan / Loan Against Property (LAP)',
      desc: 'Get funds by pledging residential or commercial property as collateral for business expansion, personal needs, or financial requirements.',
    },
    {
      num: '03',
      title: 'Business Loan',
      desc: 'Financial support for businesses to manage working capital, expand operations, purchase equipment, or invest in growth opportunities.',
    },
    {
      num: '04',
      title: 'Personal Loan',
      desc: 'Quick and convenient unsecured loans to meet personal financial needs such as medical expenses, travel, education, or emergencies.',
    },
    {
      num: '05',
      title: 'Cash Credit & Overdraft Loan',
      desc: 'Flexible credit facilities that allow businesses to withdraw funds up to a sanctioned limit to manage daily working capital requirements.',
    },
    {
      num: '06',
      title: 'Project Loan',
      desc: 'Funding solutions designed for starting new projects, infrastructure development, or large-scale business expansions.',
    },
    {
      num: '07',
      title: 'Government Scheme Loans',
      desc: 'Assistance in obtaining loans under various government schemes that support startups, MSMEs, and small businesses.',
    },
    {
      num: '08',
      title: 'Car Loan',
      desc: 'Easy financing options for purchasing new or used cars with affordable interest rates and convenient repayment plans.',
    },
    {
      num: '09',
      title: 'Credit Assessment & Rating',
      desc: 'Professional evaluation of financial records and creditworthiness to improve loan approval chances and obtain better financing terms.',
    },
  ];

  protected readonly registrationServices = [
    {
      num: '01',
      title: 'PAN & TAN Application',
      desc: 'Hassle-free application and processing of PAN and TAN for individuals and businesses.',
    },
    {
      num: '02',
      title: 'Gumasta (Shop Act) License',
      desc: 'Registration under the Shops & Establishment Act for your business premises.',
    },
    {
      num: '03',
      title: 'Udyam Aadhaar / MSME Registration',
      desc: 'Online MSME/Udyam registration to unlock government schemes and priority lending.',
    },
    {
      num: '04',
      title: 'GST Registration',
      desc: 'Complete GST registration assistance for regular and composition taxpayers.',
    },
    {
      num: '05',
      title: 'Professional Tax Registration',
      desc: 'State-level professional tax enrollment for employers and self-employed professionals.',
    },
    {
      num: '06',
      title: 'PF & ESIC Registration',
      desc: 'Provident Fund and Employee State Insurance registration for compliant workforce management.',
    },
    {
      num: '07',
      title: 'Partnership Deed / LLP Formation',
      desc: 'Drafting partnership deeds and end-to-end LLP incorporation with MCA filings.',
    },
    {
      num: '08',
      title: 'Company Incorporation',
      desc: 'Private Ltd / OPC / Section 8 company formation including MCA, DSC, and DIN processing.',
    },
    {
      num: '09',
      title: 'Food License (FSSAI)',
      desc: 'Basic, State, and Central FSSAI license registration for food businesses.',
    },
  ];
}
