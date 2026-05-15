var C6=[
{id:"cybersecurity-audit",name:"Cybersecurity Audit Cost Calculator",category:"industry-solutions",icon:"🔐",description:"Estimate cybersecurity audit and assessment costs.",inputs:[
{id:"cy1",label:"Asset Count",type:"select",options:[{label:"1-10 assets",cost:3000},{label:"11-50 assets",cost:8000},{label:"50-200 assets",cost:18000},{label:"200+ assets",cost:35000}]},
{id:"cy2",label:"Scan Depth",type:"select",options:[{label:"Vulnerability scan",cost:2000},{label:"Full security assessment",cost:6000},{label:"Advanced threat analysis",cost:15000}]},
{id:"cy3",label:"Compliance",type:"select",options:[{label:"No compliance needed",cost:0},{label:"SOC 2",cost:5000},{label:"PCI DSS",cost:8000},{label:"HIPAA",cost:10000},{label:"ISO 27001",cost:12000}]},
{id:"cy4",label:"Report",type:"select",options:[{label:"Summary report",cost:0},{label:"Detailed report",cost:1000},{label:"Executive + technical report",cost:3000}]},
{id:"cy5",label:"Additional",type:"checkbox",options:[{label:"Remediation review",cost:3000},{label:"Staff training",cost:2000},{label:"Incident response plan",cost:4000}]}
]},
{id:"penetration-testing",name:"Penetration Testing Cost Calculator",category:"industry-solutions",icon:"🛡️",description:"Calculate penetration testing engagement costs.",inputs:[
{id:"pt1",label:"Scope",type:"checkbox",options:[{label:"Web application",cost:5000},{label:"Mobile application",cost:5000},{label:"API testing",cost:4000},{label:"Cloud infrastructure",cost:6000},{label:"Network testing",cost:5000}]},
{id:"pt2",label:"Test Depth",type:"select",options:[{label:"Automated scan + review",cost:2000},{label:"Manual testing",cost:6000},{label:"Advanced (red team)",cost:15000}]},
{id:"pt3",label:"Retest",type:"select",options:[{label:"No retest",cost:0},{label:"Single retest",cost:2000},{label:"Quarterly retesting",cost:6000}]},
{id:"pt4",label:"Report",type:"select",options:[{label:"Standard report",cost:0},{label:"Detailed + remediation guide",cost:2000}]}
]},
{id:"accessibility-audit",name:"Accessibility Audit Cost Calculator",category:"industry-solutions",icon:"♿",description:"Estimate website accessibility audit and remediation costs.",inputs:[
{id:"ac1",label:"Page Count",type:"select",options:[{label:"Under 20 pages",cost:1500},{label:"20-50 pages",cost:3000},{label:"50-100 pages",cost:5000},{label:"100+ pages",cost:8000}]},
{id:"ac2",label:"WCAG Level",type:"select",options:[{label:"Level A",cost:1000},{label:"Level AA",cost:2500},{label:"Level AAA",cost:5000}]},
{id:"ac3",label:"Testing Type",type:"select",options:[{label:"Automated only",cost:500},{label:"Automated + manual",cost:2000},{label:"Full assistive tech testing",cost:5000}]},
{id:"ac4",label:"Remediation",type:"select",options:[{label:"Audit only",cost:0},{label:"Audit + fixes",cost:3000},{label:"Full remediation",cost:8000}]},
{id:"ac5",label:"Additional",type:"checkbox",options:[{label:"PDF accessibility",cost:1500},{label:"Staff training",cost:1000},{label:"Ongoing monitoring",cost:2000},{label:"Accessibility statement",cost:300}]}
]},
{id:"speed-optimization",name:"Website Speed Optimization Cost Calculator",category:"industry-solutions",icon:"⚡",description:"Calculate website performance optimization costs.",inputs:[
{id:"so1",label:"Platform",type:"select",options:[{label:"WordPress",cost:1000},{label:"Shopify",cost:1000},{label:"Custom/Other",cost:1500},{label:"React/Next.js",cost:1500}]},
{id:"so2",label:"Page Templates",type:"select",options:[{label:"1-3 templates",cost:500},{label:"4-8 templates",cost:1200},{label:"8+ templates",cost:2500}]},
{id:"so3",label:"Core Web Vitals Issues",type:"select",options:[{label:"Minor issues",cost:500},{label:"Moderate issues",cost:1500},{label:"Major issues",cost:3000}]},
{id:"so4",label:"Optimizations",type:"checkbox",options:[{label:"Image optimization",cost:500},{label:"Script optimization",cost:800},{label:"CSS optimization",cost:500},{label:"Server/CDN setup",cost:1000},{label:"Lazy loading",cost:400},{label:"Caching setup",cost:600}]}
]},
{id:"custom-crm",name:"Custom CRM Cost Calculator",category:"industry-solutions",icon:"📋",description:"Estimate custom CRM system development costs.",inputs:[
{id:"cc1",label:"Modules",type:"select",options:[{label:"Core (contacts + deals)",cost:10000},{label:"Standard (5-7 modules)",cost:25000},{label:"Full CRM suite",cost:50000}]},
{id:"cc2",label:"User Roles",type:"select",options:[{label:"2-3 roles",cost:2000},{label:"5+ roles",cost:5000},{label:"Complex hierarchy",cost:10000}]},
{id:"cc3",label:"Sales Pipeline",type:"select",options:[{label:"Single pipeline",cost:2000},{label:"Multi-pipeline",cost:5000},{label:"AI-powered pipeline",cost:12000}]},
{id:"cc4",label:"Automation",type:"select",options:[{label:"Basic workflows",cost:3000},{label:"Advanced automation",cost:8000},{label:"AI-driven automation",cost:18000}]},
{id:"cc5",label:"Integrations",type:"checkbox",options:[{label:"Email integration",cost:2000},{label:"Phone/VoIP",cost:3000},{label:"Marketing tools",cost:2000},{label:"Accounting software",cost:2500},{label:"Custom API",cost:3000}]}
]},
{id:"custom-lms",name:"Custom LMS Development Cost Calculator",category:"industry-solutions",icon:"🎓",description:"Calculate custom Learning Management System costs.",inputs:[
{id:"lm1",label:"Course Types",type:"select",options:[{label:"Video courses only",cost:10000},{label:"Mixed media courses",cost:18000},{label:"Interactive + live classes",cost:30000}]},
{id:"lm2",label:"User Roles",type:"select",options:[{label:"Student + Admin",cost:3000},{label:"Student + Instructor + Admin",cost:6000},{label:"Multi-role with organizations",cost:12000}]},
{id:"lm3",label:"Assessment",type:"select",options:[{label:"Basic quizzes",cost:2000},{label:"Advanced assessments",cost:5000},{label:"Proctored exams",cost:10000}]},
{id:"lm4",label:"Features",type:"checkbox",options:[{label:"Certificates",cost:2000},{label:"Payment / subscriptions",cost:3000},{label:"Progress tracking",cost:1500},{label:"Discussion forums",cost:2000},{label:"Reporting dashboard",cost:3000},{label:"Mobile app",cost:10000}]}
]},
{id:"custom-pos",name:"Custom POS Development Cost Calculator",category:"industry-solutions",icon:"💳",description:"Estimate custom Point-of-Sale system development costs.",inputs:[
{id:"po1",label:"Store Count",type:"select",options:[{label:"Single store",cost:8000},{label:"2-5 stores",cost:15000},{label:"5-20 stores",cost:30000},{label:"20+ stores",cost:50000}]},
{id:"po2",label:"Billing Flow",type:"select",options:[{label:"Simple checkout",cost:3000},{label:"Advanced (discounts, tax rules)",cost:6000},{label:"Complex (split payments, holds)",cost:12000}]},
{id:"po3",label:"Inventory Sync",type:"select",options:[{label:"Single location",cost:2000},{label:"Multi-location sync",cost:5000},{label:"Real-time omnichannel",cost:10000}]},
{id:"po4",label:"Hardware",type:"select",options:[{label:"Software only",cost:0},{label:"Barcode + receipt printer",cost:2000},{label:"Full hardware integration",cost:5000}]},
{id:"po5",label:"Reports",type:"select",options:[{label:"Basic reports",cost:1000},{label:"Advanced analytics",cost:3000},{label:"Custom BI dashboard",cost:6000}]}
]},
{id:"healthcare-app",name:"Healthcare App Development Cost Calculator",category:"industry-solutions",icon:"🏥",description:"Calculate healthcare application development costs.",inputs:[
{id:"hc1",label:"User Roles",type:"select",options:[{label:"Patient only",cost:8000},{label:"Patient + Doctor",cost:15000},{label:"Patient + Doctor + Admin + Staff",cost:25000}]},
{id:"hc2",label:"Appointment System",type:"select",options:[{label:"Basic booking",cost:3000},{label:"Advanced scheduling",cost:6000},{label:"Multi-provider scheduling",cost:12000}]},
{id:"hc3",label:"Medical Records",type:"select",options:[{label:"Basic health profiles",cost:3000},{label:"EHR integration",cost:10000},{label:"Full EHR system",cost:25000}]},
{id:"hc4",label:"Compliance",type:"select",options:[{label:"Basic security",cost:2000},{label:"HIPAA compliant",cost:8000},{label:"HIPAA + HL7/FHIR",cost:18000}]},
{id:"hc5",label:"Features",type:"checkbox",options:[{label:"Telemedicine/video",cost:8000},{label:"Prescription management",cost:5000},{label:"Lab results",cost:3000},{label:"Push notifications",cost:1500},{label:"Payment integration",cost:3000}]}
]},
{id:"fintech-app",name:"Fintech App Development Cost Calculator",category:"industry-solutions",icon:"💰",description:"Estimate fintech application development costs.",inputs:[
{id:"ft1",label:"Core Features",type:"select",options:[{label:"Basic wallet/payments",cost:20000},{label:"Banking features",cost:40000},{label:"Full fintech platform",cost:80000}]},
{id:"ft2",label:"KYC/Verification",type:"select",options:[{label:"Basic KYC",cost:5000},{label:"Advanced KYC (ID verification)",cost:12000},{label:"Enterprise KYC/AML",cost:25000}]},
{id:"ft3",label:"Security",type:"select",options:[{label:"Standard encryption",cost:3000},{label:"PCI DSS Level 2",cost:10000},{label:"PCI DSS Level 1",cost:25000}]},
{id:"ft4",label:"Compliance",type:"select",options:[{label:"Basic compliance",cost:5000},{label:"Multi-region compliance",cost:15000},{label:"Enterprise regulatory",cost:30000}]},
{id:"ft5",label:"Features",type:"checkbox",options:[{label:"Payment processing",cost:8000},{label:"Transaction history",cost:3000},{label:"Reporting/analytics",cost:5000},{label:"Third-party APIs",cost:5000},{label:"Multi-currency",cost:5000}]}
]},
{id:"food-delivery-app",name:"Food Delivery App Cost Calculator",category:"industry-solutions",icon:"🍕",description:"Calculate food delivery platform development costs.",inputs:[
{id:"fd1",label:"Apps",type:"checkbox",options:[{label:"Customer app",cost:15000},{label:"Delivery driver app",cost:10000},{label:"Restaurant panel",cost:8000},{label:"Admin panel",cost:6000}]},
{id:"fd2",label:"Map & Tracking",type:"select",options:[{label:"Basic maps",cost:3000},{label:"Real-time tracking",cost:6000},{label:"Route optimization",cost:12000}]},
{id:"fd3",label:"Payment",type:"select",options:[{label:"Single gateway",cost:2000},{label:"Multiple gateways + wallet",cost:5000},{label:"Advanced (split, tips, refunds)",cost:10000}]},
{id:"fd4",label:"Features",type:"checkbox",options:[{label:"Push notifications",cost:1500},{label:"Reviews & ratings",cost:2000},{label:"Promo codes/offers",cost:2000},{label:"Chat support",cost:3000},{label:"Order scheduling",cost:2000}]}
]},
{id:"taxi-booking-app",name:"Taxi Booking App Cost Calculator",category:"industry-solutions",icon:"🚕",description:"Estimate taxi/ride-hailing app development costs.",inputs:[
{id:"tx1",label:"Apps",type:"checkbox",options:[{label:"Rider app",cost:12000},{label:"Driver app",cost:10000},{label:"Admin panel",cost:6000}]},
{id:"tx2",label:"Maps & Navigation",type:"select",options:[{label:"Basic map view",cost:3000},{label:"Real-time tracking",cost:6000},{label:"Route optimization + ETA",cost:10000}]},
{id:"tx3",label:"Fare Logic",type:"select",options:[{label:"Fixed pricing",cost:1000},{label:"Distance-based",cost:3000},{label:"Surge + dynamic pricing",cost:6000}]},
{id:"tx4",label:"Payment",type:"select",options:[{label:"Card payment",cost:2000},{label:"Card + wallet",cost:4000},{label:"Multi-payment + cash",cost:7000}]},
{id:"tx5",label:"Features",type:"checkbox",options:[{label:"Push notifications",cost:1500},{label:"Ride scheduling",cost:2000},{label:"Rating system",cost:1000},{label:"SOS/emergency",cost:1500},{label:"Ride history",cost:1000}]}
]},
{id:"real-estate-portal",name:"Real Estate Portal Cost Calculator",category:"industry-solutions",icon:"🏠",description:"Calculate real estate portal development costs.",inputs:[
{id:"re1",label:"Listings",type:"select",options:[{label:"Basic listings",cost:8000},{label:"Advanced with virtual tours",cost:15000},{label:"Enterprise MLS integration",cost:30000}]},
{id:"re2",label:"User Roles",type:"select",options:[{label:"Buyer + Agent",cost:3000},{label:"Buyer + Seller + Agent",cost:6000},{label:"Multi-role with agencies",cost:12000}]},
{id:"re3",label:"Search & Maps",type:"select",options:[{label:"Basic search + list",cost:2000},{label:"Advanced filters + map view",cost:5000},{label:"AI-powered search + neighborhood",cost:10000}]},
{id:"re4",label:"Features",type:"checkbox",options:[{label:"CRM integration",cost:3000},{label:"Lead management",cost:2000},{label:"Mortgage calculator",cost:1000},{label:"Virtual tours",cost:3000},{label:"Chat system",cost:3000},{label:"Document management",cost:2500}]}
]},
{id:"job-portal",name:"Job Portal Development Cost Calculator",category:"industry-solutions",icon:"💼",description:"Estimate job portal/recruitment platform costs.",inputs:[
{id:"jp1",label:"Core Platform",type:"select",options:[{label:"Basic job board",cost:8000},{label:"Advanced portal",cost:18000},{label:"Enterprise recruitment platform",cost:35000}]},
{id:"jp2",label:"Candidate Features",type:"select",options:[{label:"Basic profiles",cost:2000},{label:"Resume builder + matching",cost:5000},{label:"AI-powered matching",cost:12000}]},
{id:"jp3",label:"Employer Features",type:"select",options:[{label:"Job posting + basic ATS",cost:3000},{label:"Advanced ATS",cost:8000},{label:"Enterprise recruitment suite",cost:15000}]},
{id:"jp4",label:"Features",type:"checkbox",options:[{label:"Advanced search filters",cost:3000},{label:"Payment/subscription",cost:3000},{label:"Email notifications",cost:1000},{label:"Video interviews",cost:5000},{label:"Analytics dashboard",cost:3000}]}
]},
{id:"education-app",name:"Education App Development Cost Calculator",category:"industry-solutions",icon:"📚",description:"Calculate education/e-learning app development costs.",inputs:[
{id:"ed1",label:"Platform",type:"select",options:[{label:"Web only",cost:10000},{label:"Web + Mobile",cost:20000},{label:"Full platform (web + iOS + Android)",cost:30000}]},
{id:"ed2",label:"Course Delivery",type:"select",options:[{label:"Pre-recorded video",cost:5000},{label:"Live classes + recorded",cost:12000},{label:"Interactive + gamified",cost:20000}]},
{id:"ed3",label:"Assessment",type:"select",options:[{label:"Basic quizzes",cost:2000},{label:"Advanced testing",cost:5000},{label:"AI-adaptive assessments",cost:12000}]},
{id:"ed4",label:"Features",type:"checkbox",options:[{label:"Student dashboard",cost:3000},{label:"Teacher panel",cost:3000},{label:"Progress tracking",cost:2000},{label:"Certificates",cost:1500},{label:"Discussion forums",cost:2000},{label:"Payment system",cost:3000}]}
]},
{id:"inventory-management",name:"Inventory Management Software Cost Calculator",category:"industry-solutions",icon:"📦",description:"Estimate inventory management system development costs.",inputs:[
{id:"im1",label:"SKU Count",type:"select",options:[{label:"Under 500 SKUs",cost:5000},{label:"500-5000 SKUs",cost:10000},{label:"5000-50000 SKUs",cost:20000},{label:"50000+ SKUs",cost:35000}]},
{id:"im2",label:"Warehouses",type:"select",options:[{label:"Single warehouse",cost:3000},{label:"2-5 warehouses",cost:8000},{label:"5+ warehouses",cost:18000}]},
{id:"im3",label:"Features",type:"checkbox",options:[{label:"Barcode/QR scanning",cost:3000},{label:"Stock alerts",cost:1500},{label:"Purchase orders",cost:3000},{label:"Reporting dashboard",cost:3000},{label:"ERP integration",cost:5000},{label:"Lot/serial tracking",cost:4000}]},
{id:"im4",label:"Mobile Access",type:"select",options:[{label:"Web only",cost:0},{label:"Responsive web",cost:2000},{label:"Native mobile app",cost:8000}]}
]},
{id:"logistics-software",name:"Logistics Software Development Cost Calculator",category:"industry-solutions",icon:"🚛",description:"Calculate logistics and fleet management software costs.",inputs:[
{id:"lg1",label:"Fleet Size",type:"select",options:[{label:"1-10 vehicles",cost:10000},{label:"11-50 vehicles",cost:20000},{label:"50-200 vehicles",cost:40000},{label:"200+ vehicles",cost:70000}]},
{id:"lg2",label:"Route Planning",type:"select",options:[{label:"Basic routes",cost:3000},{label:"Optimized routing",cost:8000},{label:"AI-powered route optimization",cost:18000}]},
{id:"lg3",label:"Tracking",type:"select",options:[{label:"Manual updates",cost:1000},{label:"GPS tracking",cost:5000},{label:"Real-time IoT tracking",cost:12000}]},
{id:"lg4",label:"Features",type:"checkbox",options:[{label:"Driver mobile app",cost:6000},{label:"Admin dashboard",cost:5000},{label:"Customer portal",cost:4000},{label:"Reporting/analytics",cost:3000},{label:"ERP integration",cost:5000},{label:"Document management",cost:2000}]}
]},
{id:"custom-portal",name:"Custom Portal Development Cost Calculator",category:"industry-solutions",icon:"🚪",description:"Estimate custom web portal development costs.",inputs:[
{id:"cp1",label:"Portal Type",type:"select",options:[{label:"Client portal",cost:10000},{label:"Employee portal",cost:12000},{label:"Partner/vendor portal",cost:15000},{label:"Multi-portal platform",cost:30000}]},
{id:"cp2",label:"User Roles",type:"select",options:[{label:"2-3 roles",cost:2000},{label:"5+ roles",cost:5000},{label:"Complex hierarchy",cost:10000}]},
{id:"cp3",label:"Dashboard",type:"select",options:[{label:"Basic dashboard",cost:3000},{label:"Advanced widgets",cost:6000},{label:"Custom analytics dashboard",cost:12000}]},
{id:"cp4",label:"Features",type:"checkbox",options:[{label:"Document management",cost:3000},{label:"Notifications system",cost:1500},{label:"Messaging/chat",cost:3000},{label:"Approval workflows",cost:2500},{label:"Integrations",cost:3000},{label:"Reporting",cost:2500}]}
]}
];
