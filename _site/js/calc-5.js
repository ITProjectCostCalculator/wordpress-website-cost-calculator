var C5=[
{id:"ai-app",name:"AI App Development Cost Calculator",category:"ai-data",icon:"🧠",description:"Estimate AI-powered application development costs.",inputs:[
{id:"ai1",label:"AI Use Case",type:"select",options:[{label:"Text generation/chatbot",cost:15000},{label:"Image/video analysis",cost:25000},{label:"Recommendation engine",cost:20000},{label:"Predictive analytics",cost:30000}]},
{id:"ai2",label:"Model Type",type:"select",options:[{label:"Pre-trained API (OpenAI, etc.)",cost:3000},{label:"Fine-tuned model",cost:15000},{label:"Custom trained model",cost:40000}]},
{id:"ai3",label:"Data Source",type:"select",options:[{label:"Structured data",cost:3000},{label:"Unstructured data",cost:8000},{label:"Multi-source data pipeline",cost:18000}]},
{id:"ai4",label:"Frontend",type:"select",options:[{label:"Simple web interface",cost:3000},{label:"Full web app",cost:8000},{label:"Web + mobile app",cost:18000}]},
{id:"ai5",label:"Features",type:"checkbox",options:[{label:"User authentication",cost:2000},{label:"API access",cost:3000},{label:"Usage analytics",cost:2000},{label:"Model monitoring",cost:3000}]}
]},
{id:"ai-chatbot",name:"AI Chatbot Development Cost Calculator",category:"ai-data",icon:"💬",description:"Calculate AI chatbot development and deployment costs.",inputs:[
{id:"cb1",label:"Channels",type:"select",options:[{label:"Web chat only",cost:3000},{label:"Web + mobile",cost:6000},{label:"Omnichannel (web, mobile, WhatsApp, Slack)",cost:12000}]},
{id:"cb2",label:"Training Data",type:"select",options:[{label:"FAQ-based (under 100 Q&As)",cost:2000},{label:"Document-trained (knowledge base)",cost:6000},{label:"Custom domain training",cost:15000}]},
{id:"cb3",label:"CRM Integration",type:"select",options:[{label:"No CRM",cost:0},{label:"Basic CRM sync",cost:3000},{label:"Deep CRM integration",cost:7000}]},
{id:"cb4",label:"Live Handoff",type:"select",options:[{label:"No handoff",cost:0},{label:"Basic agent handoff",cost:2000},{label:"Smart routing + handoff",cost:5000}]},
{id:"cb5",label:"Features",type:"checkbox",options:[{label:"Multi-language support",cost:3000},{label:"Sentiment analysis",cost:2000},{label:"Analytics dashboard",cost:2500},{label:"Voice support",cost:4000}]}
]},
{id:"ai-agent",name:"AI Agent Development Cost Calculator",category:"ai-data",icon:"🤖",description:"Estimate autonomous AI agent development costs.",inputs:[
{id:"ag1",label:"Task Complexity",type:"select",options:[{label:"Simple (single task)",cost:10000},{label:"Multi-step tasks",cost:25000},{label:"Complex autonomous agent",cost:50000}]},
{id:"ag2",label:"Tools/API Access",type:"select",options:[{label:"1-3 tools",cost:3000},{label:"4-8 tools",cost:8000},{label:"10+ tools + custom",cost:18000}]},
{id:"ag3",label:"Memory & Context",type:"select",options:[{label:"Stateless",cost:0},{label:"Session memory",cost:3000},{label:"Long-term memory (vector DB)",cost:8000}]},
{id:"ag4",label:"Monitoring",type:"select",options:[{label:"Basic logging",cost:1000},{label:"Full observability",cost:4000},{label:"Advanced monitoring + alerts",cost:8000}]},
{id:"ag5",label:"Features",type:"checkbox",options:[{label:"Approval workflows",cost:3000},{label:"Data access controls",cost:2000},{label:"Human-in-the-loop",cost:4000},{label:"Multi-agent orchestration",cost:8000}]}
]},
{id:"ai-integration",name:"AI Integration Cost Calculator",category:"ai-data",icon:"🔗",description:"Calculate AI feature integration costs into existing systems.",inputs:[
{id:"aii1",label:"Current System",type:"select",options:[{label:"Web application",cost:3000},{label:"Mobile application",cost:5000},{label:"Enterprise software",cost:10000}]},
{id:"aii2",label:"AI Feature Type",type:"select",options:[{label:"Text generation",cost:5000},{label:"Image recognition",cost:8000},{label:"Search / recommendations",cost:10000},{label:"Process automation",cost:12000}]},
{id:"aii3",label:"API Integration",type:"select",options:[{label:"Single AI API",cost:2000},{label:"Multiple AI APIs",cost:5000},{label:"Custom model + API",cost:15000}]},
{id:"aii4",label:"Data Quality Work",type:"select",options:[{label:"Data ready",cost:0},{label:"Minor cleanup",cost:3000},{label:"Major data preparation",cost:8000}]},
{id:"aii5",label:"Additional",type:"checkbox",options:[{label:"Security review",cost:2000},{label:"Load testing",cost:1500},{label:"A/B testing setup",cost:2000},{label:"Documentation",cost:1000}]}
]},
{id:"ml-project",name:"Machine Learning Project Cost Calculator",category:"ai-data",icon:"📈",description:"Estimate machine learning project development costs.",inputs:[
{id:"ml1",label:"Dataset Size",type:"select",options:[{label:"Small (under 10K samples)",cost:5000},{label:"Medium (10K-100K)",cost:12000},{label:"Large (100K-1M)",cost:25000},{label:"Very large (1M+)",cost:50000}]},
{id:"ml2",label:"Model Type",type:"select",options:[{label:"Classification/Regression",cost:8000},{label:"NLP model",cost:15000},{label:"Computer Vision",cost:20000},{label:"Deep Learning (custom)",cost:35000}]},
{id:"ml3",label:"Data Labeling",type:"select",options:[{label:"Pre-labeled data",cost:0},{label:"Semi-automated labeling",cost:5000},{label:"Manual labeling required",cost:15000}]},
{id:"ml4",label:"Training & Validation",type:"select",options:[{label:"Standard training",cost:3000},{label:"Hyperparameter optimization",cost:8000},{label:"Advanced MLOps pipeline",cost:20000}]},
{id:"ml5",label:"Deployment",type:"select",options:[{label:"Batch predictions",cost:3000},{label:"Real-time API",cost:8000},{label:"Edge deployment",cost:15000}]}
]},
{id:"data-analytics-dashboard",name:"Data Analytics Dashboard Cost Calculator",category:"ai-data",icon:"📊",description:"Calculate data analytics dashboard development costs.",inputs:[
{id:"da1",label:"Data Sources",type:"select",options:[{label:"1-2 sources",cost:3000},{label:"3-5 sources",cost:7000},{label:"6+ sources",cost:15000}]},
{id:"da2",label:"Reports",type:"select",options:[{label:"3-5 reports",cost:3000},{label:"6-15 reports",cost:7000},{label:"15+ reports",cost:15000}]},
{id:"da3",label:"Chart Types",type:"select",options:[{label:"Standard charts",cost:2000},{label:"Advanced visualizations",cost:5000},{label:"Custom interactive visuals",cost:10000}]},
{id:"da4",label:"User Roles",type:"select",options:[{label:"Single view",cost:0},{label:"Role-based views",cost:3000},{label:"Custom per-user",cost:6000}]},
{id:"da5",label:"Features",type:"checkbox",options:[{label:"Scheduled refresh",cost:1500},{label:"Export (PDF/CSV/Excel)",cost:1000},{label:"Alerts & notifications",cost:2000},{label:"Embedded sharing",cost:2500}]}
]},
{id:"power-bi-dashboard",name:"Power BI Dashboard Cost Calculator",category:"ai-data",icon:"📉",description:"Estimate Power BI dashboard development costs.",inputs:[
{id:"pb1",label:"Data Connectors",type:"select",options:[{label:"1-2 connectors",cost:1000},{label:"3-5 connectors",cost:3000},{label:"6+ connectors",cost:6000}]},
{id:"pb2",label:"Report Pages",type:"range",min:1,max:20,default:3,costPerUnit:800,unit:"pages"},
{id:"pb3",label:"DAX Complexity",type:"select",options:[{label:"Simple measures",cost:1000},{label:"Moderate DAX",cost:3000},{label:"Complex DAX + calculated tables",cost:7000}]},
{id:"pb4",label:"Row-Level Security",type:"select",options:[{label:"No RLS",cost:0},{label:"Basic RLS",cost:1000},{label:"Dynamic RLS",cost:3000}]},
{id:"pb5",label:"Features",type:"checkbox",options:[{label:"Scheduled refresh setup",cost:500},{label:"Paginated reports",cost:1500},{label:"Embedded analytics",cost:3000},{label:"Mobile layout",cost:1000},{label:"Gateway setup",cost:1500}]}
]},
{id:"data-migration",name:"Data Migration Cost Calculator",category:"ai-data",icon:"💾",description:"Calculate data migration project costs.",inputs:[
{id:"dm1",label:"Source System",type:"select",options:[{label:"Single database",cost:3000},{label:"Multiple databases",cost:8000},{label:"Legacy mainframe",cost:20000}]},
{id:"dm2",label:"Record Count",type:"select",options:[{label:"Under 100K",cost:2000},{label:"100K-1M",cost:5000},{label:"1M-10M",cost:12000},{label:"10M+",cost:25000}]},
{id:"dm3",label:"Field Mapping",type:"select",options:[{label:"Simple 1:1 mapping",cost:1000},{label:"Complex transformations",cost:5000},{label:"Multi-system mapping",cost:10000}]},
{id:"dm4",label:"Data Cleansing",type:"select",options:[{label:"Minimal cleansing",cost:1000},{label:"Moderate cleansing",cost:4000},{label:"Heavy cleansing + dedup",cost:10000}]},
{id:"dm5",label:"Validation & Testing",type:"select",options:[{label:"Basic validation",cost:1000},{label:"Comprehensive testing",cost:3000},{label:"Full regression testing",cost:6000}]}
]},
{id:"cloud-migration",name:"Cloud Migration Cost Calculator",category:"cloud-devops",icon:"☁️",description:"Estimate cloud migration project costs.",inputs:[
{id:"cm1",label:"Current Hosting",type:"select",options:[{label:"Shared hosting",cost:3000},{label:"Dedicated servers",cost:8000},{label:"On-premise data center",cost:20000}]},
{id:"cm2",label:"Application Count",type:"select",options:[{label:"1-3 apps",cost:5000},{label:"4-10 apps",cost:15000},{label:"10+ apps",cost:35000}]},
{id:"cm3",label:"Data Size",type:"select",options:[{label:"Under 100GB",cost:2000},{label:"100GB-1TB",cost:5000},{label:"1TB-10TB",cost:12000},{label:"10TB+",cost:25000}]},
{id:"cm4",label:"Cloud Provider",type:"select",options:[{label:"AWS",cost:3000},{label:"Azure",cost:3000},{label:"Google Cloud",cost:3000},{label:"Multi-cloud",cost:8000}]},
{id:"cm5",label:"Additional",type:"checkbox",options:[{label:"Zero-downtime migration",cost:5000},{label:"Security hardening",cost:3000},{label:"Disaster recovery setup",cost:4000},{label:"Performance optimization",cost:3000},{label:"Staff training",cost:2000}]}
]},
{id:"aws-development",name:"AWS Development Cost Calculator",category:"cloud-devops",icon:"🔶",description:"Calculate AWS infrastructure setup and development costs.",inputs:[
{id:"aw1",label:"Compute",type:"select",options:[{label:"Simple EC2/Lambda",cost:3000},{label:"Auto-scaling + containers",cost:8000},{label:"EKS/ECS cluster",cost:18000}]},
{id:"aw2",label:"Storage",type:"select",options:[{label:"S3 only",cost:1000},{label:"S3 + EBS + EFS",cost:3000},{label:"Complex storage architecture",cost:6000}]},
{id:"aw3",label:"Database",type:"select",options:[{label:"RDS single instance",cost:2000},{label:"RDS multi-AZ",cost:4000},{label:"DynamoDB + Aurora",cost:8000}]},
{id:"aw4",label:"CDN & Networking",type:"select",options:[{label:"Basic VPC",cost:1000},{label:"CloudFront + VPC",cost:3000},{label:"Multi-region network",cost:8000}]},
{id:"aw5",label:"Features",type:"checkbox",options:[{label:"Monitoring (CloudWatch)",cost:1500},{label:"Backup automation",cost:1000},{label:"CI/CD pipeline",cost:3000},{label:"Security (WAF, GuardDuty)",cost:2500},{label:"IaC (Terraform/CDK)",cost:3000}]}
]},
{id:"devops-setup",name:"DevOps Setup Cost Calculator",category:"cloud-devops",icon:"🔧",description:"Estimate DevOps infrastructure and pipeline setup costs.",inputs:[
{id:"do1",label:"CI/CD Pipeline",type:"select",options:[{label:"Basic pipeline",cost:3000},{label:"Multi-stage pipeline",cost:6000},{label:"Advanced (blue-green, canary)",cost:12000}]},
{id:"do2",label:"Cloud Provider",type:"select",options:[{label:"Single cloud",cost:2000},{label:"Multi-cloud",cost:5000},{label:"Hybrid (cloud + on-prem)",cost:10000}]},
{id:"do3",label:"Environments",type:"select",options:[{label:"Dev + Production",cost:2000},{label:"Dev + Staging + Production",cost:4000},{label:"Multiple environments + feature envs",cost:8000}]},
{id:"do4",label:"Monitoring",type:"select",options:[{label:"Basic (logs + metrics)",cost:1500},{label:"Full observability stack",cost:5000},{label:"Enterprise APM",cost:10000}]},
{id:"do5",label:"Additional",type:"checkbox",options:[{label:"Container orchestration",cost:4000},{label:"Security scanning",cost:2000},{label:"Automated testing",cost:3000},{label:"IaC setup",cost:3000},{label:"Documentation",cost:1000}]}
]},
{id:"dedicated-team",name:"Dedicated Development Team Cost Calculator",category:"cloud-devops",icon:"👥",description:"Calculate dedicated development team costs per month.",inputs:[
{id:"dt1",label:"Team Size",type:"range",min:1,max:20,default:3,costPerUnit:3000,unit:"developers"},
{id:"dt2",label:"Seniority Mix",type:"select",options:[{label:"Junior developers",cost:0},{label:"Mid-level developers",cost:3000},{label:"Senior developers",cost:8000},{label:"Mixed team (junior to senior)",cost:5000}]},
{id:"dt3",label:"Duration",type:"select",options:[{label:"3 months",cost:0},{label:"6 months (5% discount)",cost:-1000},{label:"12 months (10% discount)",cost:-3000}]},
{id:"dt4",label:"Engagement Model",type:"select",options:[{label:"Part-time (20 hrs/week)",cost:0},{label:"Full-time (40 hrs/week)",cost:5000},{label:"Extended (with PM + QA)",cost:10000}]},
{id:"dt5",label:"Additional Roles",type:"checkbox",options:[{label:"Project Manager",cost:3000},{label:"UI/UX Designer",cost:2500},{label:"QA Engineer",cost:2000},{label:"DevOps Engineer",cost:3000},{label:"Business Analyst",cost:2500}]}
]},
{id:"staff-augmentation",name:"Staff Augmentation Cost Calculator",category:"cloud-devops",icon:"🧑‍💻",description:"Estimate staff augmentation and resource hiring costs.",inputs:[
{id:"st1",label:"Developer Type",type:"select",options:[{label:"Frontend developer",cost:3000},{label:"Backend developer",cost:3500},{label:"Full-stack developer",cost:4000},{label:"Mobile developer",cost:4000},{label:"DevOps engineer",cost:4500}]},
{id:"st2",label:"Experience Level",type:"select",options:[{label:"Junior (1-3 years)",cost:0},{label:"Mid (3-5 years)",cost:2000},{label:"Senior (5-8 years)",cost:4000},{label:"Lead/Architect (8+)",cost:7000}]},
{id:"st3",label:"Hours per Week",type:"select",options:[{label:"20 hours/week",cost:0},{label:"40 hours/week",cost:3000}]},
{id:"st4",label:"Duration",type:"select",options:[{label:"1-3 months",cost:1000},{label:"3-6 months",cost:0},{label:"6-12 months (discount)",cost:-1000}]},
{id:"st5",label:"Timezone Overlap",type:"select",options:[{label:"4+ hours overlap",cost:0},{label:"Full US business hours",cost:2000},{label:"24/7 coverage",cost:5000}]}
]},
{id:"server-maintenance",name:"Server Maintenance Cost Calculator",category:"cloud-devops",icon:"🖥️",description:"Calculate ongoing server maintenance and management costs.",inputs:[
{id:"sv1",label:"Server Count",type:"range",min:1,max:50,default:2,costPerUnit:200,unit:"servers"},
{id:"sv2",label:"Monitoring",type:"select",options:[{label:"Basic uptime monitoring",cost:100},{label:"Performance monitoring",cost:300},{label:"Full infrastructure monitoring",cost:800}]},
{id:"sv3",label:"Backups",type:"select",options:[{label:"Weekly backups",cost:100},{label:"Daily backups",cost:200},{label:"Continuous backups",cost:500}]},
{id:"sv4",label:"Patches & Updates",type:"select",options:[{label:"Monthly patching",cost:100},{label:"Weekly patching",cost:250},{label:"Auto-patching + testing",cost:500}]},
{id:"sv5",label:"Support",type:"select",options:[{label:"Business hours support",cost:200},{label:"Extended hours",cost:500},{label:"24/7 support",cost:1200}]}
]},
{id:"api-development",name:"API Development Cost Calculator",category:"cloud-devops",icon:"🔌",description:"Estimate API design and development costs.",inputs:[
{id:"ap1",label:"API Count",type:"select",options:[{label:"1-5 endpoints",cost:3000},{label:"6-15 endpoints",cost:8000},{label:"16-30 endpoints",cost:15000},{label:"30+ endpoints",cost:25000}]},
{id:"ap2",label:"Authentication",type:"select",options:[{label:"API keys",cost:500},{label:"OAuth 2.0",cost:2000},{label:"Enterprise (JWT + RBAC)",cost:5000}]},
{id:"ap3",label:"Documentation",type:"select",options:[{label:"Basic docs",cost:500},{label:"OpenAPI/Swagger",cost:1500},{label:"Developer portal",cost:4000}]},
{id:"ap4",label:"Rate Limiting",type:"select",options:[{label:"Basic throttling",cost:500},{label:"Tiered rate limits",cost:1500},{label:"Usage-based metering",cost:4000}]},
{id:"ap5",label:"Additional",type:"checkbox",options:[{label:"Automated testing",cost:2000},{label:"Versioning strategy",cost:1000},{label:"Webhook support",cost:1500},{label:"GraphQL layer",cost:4000},{label:"SDKs/client libraries",cost:3000}]}
]},
{id:"website-audit",name:"Website Audit Cost Calculator",category:"cloud-devops",icon:"🔍",description:"Calculate comprehensive website audit costs.",inputs:[
{id:"wa1",label:"Page Count",type:"select",options:[{label:"Under 20 pages",cost:800},{label:"20-100 pages",cost:1500},{label:"100-500 pages",cost:3000},{label:"500+ pages",cost:5000}]},
{id:"wa2",label:"Audit Types",type:"checkbox",options:[{label:"SEO audit",cost:1000},{label:"Speed/performance audit",cost:800},{label:"UX/usability audit",cost:1200},{label:"Accessibility audit",cost:1000},{label:"Technical/code audit",cost:1500},{label:"Security audit",cost:1500}]},
{id:"wa3",label:"Report Detail",type:"select",options:[{label:"Summary report",cost:0},{label:"Detailed recommendations",cost:500},{label:"Full report + action plan",cost:1500}]}
]},
{id:"app-testing",name:"App Testing Cost Calculator",category:"cloud-devops",icon:"🧪",description:"Estimate mobile and web application testing costs.",inputs:[
{id:"at1",label:"Platforms",type:"select",options:[{label:"Single platform",cost:3000},{label:"iOS + Android",cost:5000},{label:"iOS + Android + Web",cost:8000}]},
{id:"at2",label:"Device Coverage",type:"select",options:[{label:"5 devices",cost:1000},{label:"10 devices",cost:2500},{label:"20+ devices",cost:5000}]},
{id:"at3",label:"Test Types",type:"checkbox",options:[{label:"Functional testing",cost:2000},{label:"Performance testing",cost:2000},{label:"Security testing",cost:2500},{label:"Usability testing",cost:1500},{label:"Compatibility testing",cost:1500}]},
{id:"at4",label:"Automation",type:"select",options:[{label:"Manual testing only",cost:0},{label:"Partial automation",cost:3000},{label:"Full automation",cost:8000}]},
{id:"at5",label:"Regression",type:"select",options:[{label:"One-time testing",cost:0},{label:"Monthly regression",cost:2000},{label:"Continuous testing",cost:5000}]}
]},
{id:"qa-automation",name:"QA Automation Cost Calculator",category:"cloud-devops",icon:"⚙️",description:"Calculate QA automation framework and testing costs.",inputs:[
{id:"qa1",label:"Test Cases",type:"select",options:[{label:"Under 50",cost:3000},{label:"50-200",cost:8000},{label:"200-500",cost:15000},{label:"500+",cost:25000}]},
{id:"qa2",label:"Framework",type:"select",options:[{label:"Selenium",cost:2000},{label:"Cypress",cost:2000},{label:"Playwright",cost:2000},{label:"Appium (mobile)",cost:3000},{label:"Custom framework",cost:6000}]},
{id:"qa3",label:"Browser Coverage",type:"select",options:[{label:"Chrome only",cost:0},{label:"Top 3 browsers",cost:1000},{label:"All major browsers",cost:2500}]},
{id:"qa4",label:"CI/CD Integration",type:"select",options:[{label:"Manual trigger",cost:500},{label:"CI/CD integrated",cost:2000},{label:"Full pipeline integration",cost:4000}]},
{id:"qa5",label:"Maintenance",type:"select",options:[{label:"One-time setup",cost:0},{label:"Monthly maintenance",cost:1500},{label:"Continuous maintenance",cost:3000}]}
]}
];
