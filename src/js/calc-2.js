var C2=[
{id:"android-app",name:"Android App Development Cost Calculator",category:"mobile-apps",icon:"🤖",description:"Estimate Android app development costs with Kotlin and device support.",inputs:[
{id:"an1",label:"Device Support",type:"select",options:[{label:"Phones only",cost:5000},{label:"Phones + Tablets",cost:8000},{label:"All Android devices",cost:12000}]},
{id:"an2",label:"App Complexity",type:"select",options:[{label:"Simple (5-10 screens)",cost:5000},{label:"Medium (10-25 screens)",cost:14000},{label:"Complex (25+ screens)",cost:30000}]},
{id:"an3",label:"Backend & API",type:"select",options:[{label:"Firebase",cost:2500},{label:"Custom API",cost:8000},{label:"Enterprise backend",cost:18000}]},
{id:"an4",label:"Features",type:"checkbox",options:[{label:"Google Sign-In",cost:800},{label:"Offline mode",cost:3000},{label:"Push notifications (FCM)",cost:1000},{label:"Payment gateway",cost:2500},{label:"Maps integration",cost:2000}]},
{id:"an5",label:"Timeline",type:"select",options:[{label:"Standard (14-20 weeks)",cost:0},{label:"Accelerated (8-12 weeks)",cost:8000}]}
]},
{id:"flutter-app",name:"Flutter App Development Cost Calculator",category:"mobile-apps",icon:"🦋",description:"Calculate Flutter cross-platform app development costs.",inputs:[
{id:"fl1",label:"Platforms",type:"select",options:[{label:"Mobile only (iOS + Android)",cost:8000},{label:"Mobile + Web",cost:14000},{label:"Mobile + Web + Desktop",cost:22000}]},
{id:"fl2",label:"Screen Count",type:"range",min:3,max:50,default:10,costPerUnit:600,unit:"screens"},
{id:"fl3",label:"Design Level",type:"select",options:[{label:"Material Design standard",cost:2000},{label:"Custom branded design",cost:6000},{label:"Premium animations",cost:12000}]},
{id:"fl4",label:"Backend",type:"select",options:[{label:"Firebase",cost:2500},{label:"Custom backend",cost:8000},{label:"Enterprise backend",cost:18000}]},
{id:"fl5",label:"Features",type:"checkbox",options:[{label:"State management (BLoC/Riverpod)",cost:1500},{label:"Push notifications",cost:1200},{label:"Payment integration",cost:2500},{label:"Maps & location",cost:2000},{label:"Real-time chat",cost:4000}]},
{id:"fl6",label:"Testing",type:"select",options:[{label:"Basic testing",cost:1000},{label:"Comprehensive testing",cost:3000},{label:"Full QA automation",cost:6000}]}
]},
{id:"react-native-app",name:"React Native App Development Cost Calculator",category:"mobile-apps",icon:"⚛️",description:"Estimate React Native cross-platform app development costs.",inputs:[
{id:"rn1",label:"Platforms",type:"select",options:[{label:"iOS + Android",cost:8000},{label:"iOS + Android + Web",cost:15000}]},
{id:"rn2",label:"Native Modules",type:"select",options:[{label:"No native modules",cost:0},{label:"1-3 native modules",cost:3000},{label:"Complex native bridge",cost:8000}]},
{id:"rn3",label:"Screen Count",type:"range",min:3,max:50,default:10,costPerUnit:550,unit:"screens"},
{id:"rn4",label:"API Integrations",type:"select",options:[{label:"1-3 APIs",cost:2000},{label:"4-8 APIs",cost:5000},{label:"8+ APIs",cost:10000}]},
{id:"rn5",label:"Features",type:"checkbox",options:[{label:"Chat system",cost:4000},{label:"Maps integration",cost:2000},{label:"Payment processing",cost:2500},{label:"Push notifications",cost:1200},{label:"Offline support",cost:3000}]}
]},
{id:"mvp-app",name:"MVP App Cost Calculator",category:"mobile-apps",icon:"🚀",description:"Calculate the cost of building a minimum viable product app.",inputs:[
{id:"mv1",label:"Core Features Count",type:"select",options:[{label:"3-5 core features",cost:8000},{label:"6-10 features",cost:15000},{label:"10+ features",cost:25000}]},
{id:"mv2",label:"Platform",type:"select",options:[{label:"Single platform",cost:0},{label:"Cross-platform",cost:6000}]},
{id:"mv3",label:"User Roles",type:"select",options:[{label:"Single role",cost:0},{label:"2-3 roles",cost:3000},{label:"Complex role system",cost:6000}]},
{id:"mv4",label:"Backend Complexity",type:"select",options:[{label:"Simple (BaaS)",cost:2000},{label:"Custom API",cost:6000},{label:"Complex microservices",cost:15000}]},
{id:"mv5",label:"Additional",type:"checkbox",options:[{label:"Admin panel",cost:3000},{label:"Analytics dashboard",cost:2000},{label:"Third-party integrations",cost:2500}]},
{id:"mv6",label:"Launch Timeline",type:"select",options:[{label:"3-4 months",cost:0},{label:"6-8 weeks",cost:5000},{label:"4 weeks sprint",cost:12000}]}
]},
{id:"app-maintenance",name:"App Maintenance Cost Calculator",category:"mobile-apps",icon:"🛠️",description:"Estimate ongoing mobile app maintenance and support costs per month.",inputs:[
{id:"am1",label:"Monthly Updates",type:"select",options:[{label:"Bug fixes only",cost:500},{label:"Bug fixes + minor features",cost:1200},{label:"Full ongoing development",cost:3000}]},
{id:"am2",label:"OS Upgrades",type:"select",options:[{label:"Annual OS compatibility",cost:300},{label:"Immediate OS updates",cost:800}]},
{id:"am3",label:"Monitoring",type:"select",options:[{label:"Basic crash reporting",cost:100},{label:"Full APM monitoring",cost:400},{label:"24/7 monitoring + alerts",cost:800}]},
{id:"am4",label:"App Store Support",type:"select",options:[{label:"Self-managed",cost:0},{label:"Managed submissions",cost:300},{label:"Full ASO + management",cost:800}]},
{id:"am5",label:"Support Hours",type:"select",options:[{label:"5 hrs/month",cost:200},{label:"10 hrs/month",cost:400},{label:"20 hrs/month",cost:750},{label:"Unlimited",cost:1500}]}
]},
{id:"app-redesign",name:"App Redesign Cost Calculator",category:"mobile-apps",icon:"🎨",description:"Calculate the cost of redesigning an existing mobile application.",inputs:[
{id:"ar1",label:"Screen Count",type:"range",min:3,max:60,default:10,costPerUnit:500,unit:"screens"},
{id:"ar2",label:"UX Audit",type:"select",options:[{label:"No audit",cost:0},{label:"Basic UX review",cost:2000},{label:"Comprehensive UX audit",cost:5000}]},
{id:"ar3",label:"Design System",type:"select",options:[{label:"Adapt existing system",cost:1500},{label:"New design system",cost:5000},{label:"Premium design system + guidelines",cost:10000}]},
{id:"ar4",label:"Frontend Implementation",type:"select",options:[{label:"Design only (no code)",cost:0},{label:"Implement new designs",cost:8000},{label:"Full rebuild with new designs",cost:20000}]},
{id:"ar5",label:"Usability Testing",type:"select",options:[{label:"No testing",cost:0},{label:"Basic user testing",cost:1500},{label:"Professional usability study",cost:4000}]},
{id:"ar6",label:"Platforms",type:"select",options:[{label:"Single platform",cost:0},{label:"Both iOS + Android",cost:5000}]}
]},
{id:"web-app",name:"Web App Development Cost Calculator",category:"web-apps-saas",icon:"🖥️",description:"Estimate custom web application development costs.",inputs:[
{id:"wa1",label:"User Roles",type:"select",options:[{label:"Single role",cost:2000},{label:"2-3 roles",cost:5000},{label:"Complex RBAC (5+ roles)",cost:12000}]},
{id:"wa2",label:"Dashboard Complexity",type:"select",options:[{label:"Simple dashboard",cost:3000},{label:"Multi-widget dashboard",cost:8000},{label:"Real-time analytics dashboard",cost:18000}]},
{id:"wa3",label:"Admin Panel",type:"select",options:[{label:"Basic admin",cost:3000},{label:"Full-featured admin",cost:8000},{label:"Enterprise admin suite",cost:15000}]},
{id:"wa4",label:"API & Database",type:"select",options:[{label:"Simple REST + SQL",cost:5000},{label:"Complex API + NoSQL",cost:12000},{label:"Microservices architecture",cost:30000}]},
{id:"wa5",label:"Authentication",type:"select",options:[{label:"Email/password",cost:1000},{label:"Social + SSO",cost:3000},{label:"Enterprise SSO (SAML/OIDC)",cost:6000}]},
{id:"wa6",label:"Features",type:"checkbox",options:[{label:"Reporting & export",cost:3000},{label:"Real-time notifications",cost:2000},{label:"File management",cost:2500},{label:"Audit logging",cost:1500}]}
]},
{id:"saas-development",name:"SaaS Development Cost Calculator",category:"web-apps-saas",icon:"☁️",description:"Calculate SaaS platform development costs including billing and multi-tenancy.",inputs:[
{id:"sa1",label:"Tenant Structure",type:"select",options:[{label:"Single-tenant",cost:10000},{label:"Multi-tenant (shared DB)",cost:20000},{label:"Multi-tenant (isolated DB)",cost:35000}]},
{id:"sa2",label:"Subscription & Billing",type:"select",options:[{label:"Simple plans (Stripe)",cost:3000},{label:"Complex billing (usage-based)",cost:8000},{label:"Enterprise billing + invoicing",cost:15000}]},
{id:"sa3",label:"User Roles",type:"select",options:[{label:"Basic (admin/user)",cost:2000},{label:"Team-based roles",cost:5000},{label:"Organization hierarchy",cost:10000}]},
{id:"sa4",label:"Dashboards",type:"select",options:[{label:"Basic metrics",cost:3000},{label:"Interactive dashboards",cost:8000},{label:"Custom analytics engine",cost:18000}]},
{id:"sa5",label:"Integrations",type:"select",options:[{label:"2-3 integrations",cost:3000},{label:"5-10 integrations",cost:8000},{label:"Open API + marketplace",cost:20000}]},
{id:"sa6",label:"Additional",type:"checkbox",options:[{label:"White-labeling",cost:5000},{label:"API documentation portal",cost:3000},{label:"Onboarding wizard",cost:2000},{label:"Email system",cost:2500}]}
]},
{id:"mvp-development",name:"MVP Development Cost Calculator",category:"web-apps-saas",icon:"💡",description:"Estimate MVP development costs for your startup idea.",inputs:[
{id:"mvd1",label:"Product Type",type:"select",options:[{label:"Web app",cost:8000},{label:"Mobile app",cost:12000},{label:"Web + Mobile",cost:18000}]},
{id:"mvd2",label:"Must-have Features",type:"select",options:[{label:"3-5 features",cost:5000},{label:"6-10 features",cost:12000},{label:"10+ features",cost:22000}]},
{id:"mvd3",label:"UI Level",type:"select",options:[{label:"Basic functional UI",cost:2000},{label:"Polished UI",cost:5000},{label:"Premium design",cost:10000}]},
{id:"mvd4",label:"Backend Complexity",type:"select",options:[{label:"Simple BaaS",cost:2000},{label:"Custom backend",cost:6000},{label:"Complex architecture",cost:15000}]},
{id:"mvd5",label:"Integrations",type:"checkbox",options:[{label:"Payment processing",cost:2000},{label:"Email/SMS notifications",cost:1000},{label:"Social login",cost:800},{label:"Analytics",cost:500}]},
{id:"mvd6",label:"Launch Timeline",type:"select",options:[{label:"3-4 months",cost:0},{label:"6-8 weeks",cost:5000},{label:"4 weeks",cost:12000}]}
]}
];
