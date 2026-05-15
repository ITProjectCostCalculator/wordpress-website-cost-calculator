var C1=[
{id:"website-development",name:"Website Development Cost Calculator",category:"web-development",icon:"🌐",description:"Estimate the cost of building a custom website based on type, design, features and timeline.",inputs:[
{id:"w1",label:"Website Type",type:"select",options:[{label:"Basic Informational (5-7 pages)",cost:2000},{label:"Business Website (10-20 pages)",cost:5000},{label:"Corporate Portal (20+ pages)",cost:12000},{label:"Custom Web Application",cost:25000}]},
{id:"w2",label:"Design Level",type:"select",options:[{label:"Template-based",cost:500},{label:"Custom Design",cost:3000},{label:"Premium UI/UX",cost:8000}]},
{id:"w3",label:"CMS Integration",type:"select",options:[{label:"No CMS",cost:0},{label:"WordPress",cost:1000},{label:"Custom CMS",cost:5000}]},
{id:"w4",label:"Number of Pages",type:"range",min:1,max:50,default:5,costPerUnit:200,unit:"pages"},
{id:"w5",label:"Additional Features",type:"checkbox",options:[{label:"Contact Forms",cost:300},{label:"SEO Setup",cost:800},{label:"Blog Section",cost:600},{label:"Third-party Integrations",cost:1500},{label:"Multilingual Support",cost:2000}]},
{id:"w6",label:"Timeline",type:"select",options:[{label:"Standard (8-12 weeks)",cost:0},{label:"Accelerated (4-6 weeks)",cost:3000},{label:"Rush (2-3 weeks)",cost:8000}]}
]},
{id:"corporate-website",name:"Corporate Website Cost Calculator",category:"web-development",icon:"🏢",description:"Calculate the cost of a professional corporate website with advanced features.",inputs:[
{id:"c1",label:"Page Count",type:"select",options:[{label:"Up to 10 pages",cost:3000},{label:"10-25 pages",cost:7000},{label:"25-50 pages",cost:14000},{label:"50+ pages",cost:25000}]},
{id:"c2",label:"Custom UI Design",type:"select",options:[{label:"Standard Template",cost:1000},{label:"Custom Branded Design",cost:5000},{label:"Premium Interactive Design",cost:12000}]},
{id:"c3",label:"CMS Platform",type:"select",options:[{label:"WordPress",cost:1500},{label:"Drupal",cost:3000},{label:"Custom CMS",cost:8000}]},
{id:"c4",label:"Animations & Interactions",type:"select",options:[{label:"Basic (hover effects)",cost:500},{label:"Moderate (scroll animations)",cost:2000},{label:"Advanced (parallax, video)",cost:5000}]},
{id:"c5",label:"Additional Features",type:"checkbox",options:[{label:"Lead Capture Forms",cost:600},{label:"Multilingual Pages",cost:3000},{label:"Content Support / Copywriting",cost:2500},{label:"Analytics & Tracking Setup",cost:800}]},
{id:"c6",label:"Timeline",type:"select",options:[{label:"Standard (10-14 weeks)",cost:0},{label:"Fast Track (6-8 weeks)",cost:4000}]}
]},
{id:"landing-page",name:"Landing Page Cost Calculator",category:"web-development",icon:"📄",description:"Estimate the cost of high-converting landing pages for marketing campaigns.",inputs:[
{id:"l1",label:"Number of Sections",type:"select",options:[{label:"3-5 sections",cost:800},{label:"6-10 sections",cost:1500},{label:"10+ sections",cost:3000}]},
{id:"l2",label:"Copywriting",type:"select",options:[{label:"Client provides copy",cost:0},{label:"Basic copywriting",cost:600},{label:"Professional conversion copywriting",cost:2000}]},
{id:"l3",label:"Form & CRM Integration",type:"select",options:[{label:"Simple contact form",cost:200},{label:"Multi-step form + CRM",cost:1200},{label:"Advanced automation + CRM",cost:3000}]},
{id:"l4",label:"A/B Testing Setup",type:"select",options:[{label:"No A/B testing",cost:0},{label:"Basic A/B testing",cost:800},{label:"Advanced multivariate testing",cost:2000}]},
{id:"l5",label:"Speed Optimization",type:"select",options:[{label:"Standard",cost:0},{label:"Performance optimized",cost:500},{label:"Ultra-fast (<1s load)",cost:1500}]},
{id:"l6",label:"Additional Pages",type:"range",min:0,max:10,default:0,costPerUnit:500,unit:"pages"}
]},
{id:"wordpress-development",name:"WordPress Development Cost Calculator",category:"web-development",icon:"📝",description:"Calculate WordPress site development costs including themes, plugins and customization.",inputs:[
{id:"wp1",label:"Theme Type",type:"select",options:[{label:"Free/Premium Theme",cost:500},{label:"Customized Premium Theme",cost:2500},{label:"Fully Custom Theme",cost:8000}]},
{id:"wp2",label:"Page Count",type:"range",min:1,max:50,default:5,costPerUnit:150,unit:"pages"},
{id:"wp3",label:"Plugin Requirements",type:"select",options:[{label:"Basic (5-10 plugins)",cost:500},{label:"Moderate (10-20 plugins)",cost:1500},{label:"Complex (20+ custom plugins)",cost:4000}]},
{id:"wp4",label:"WooCommerce / eCommerce",type:"select",options:[{label:"Not needed",cost:0},{label:"Basic store (under 50 products)",cost:2000},{label:"Advanced store (50+ products)",cost:5000}]},
{id:"wp5",label:"Additional Features",type:"checkbox",options:[{label:"Custom Fields (ACF)",cost:800},{label:"Speed Optimization",cost:1000},{label:"Security Hardening",cost:600},{label:"SEO Setup",cost:800},{label:"Multilingual (WPML)",cost:1500}]},
{id:"wp6",label:"Timeline",type:"select",options:[{label:"Standard (6-10 weeks)",cost:0},{label:"Rush (3-4 weeks)",cost:3000}]}
]},
{id:"wordpress-plugin",name:"WordPress Plugin Development Cost Calculator",category:"web-development",icon:"🔌",description:"Estimate the cost of custom WordPress plugin development.",inputs:[
{id:"wpp1",label:"Plugin Complexity",type:"select",options:[{label:"Simple (single feature)",cost:2000},{label:"Moderate (multiple features)",cost:6000},{label:"Complex (full application)",cost:15000},{label:"Enterprise-grade",cost:30000}]},
{id:"wpp2",label:"Admin Settings Panel",type:"select",options:[{label:"Basic settings page",cost:500},{label:"Advanced settings with tabs",cost:1500},{label:"Custom React-based admin",cost:4000}]},
{id:"wpp3",label:"API Integrations",type:"select",options:[{label:"No API",cost:0},{label:"1-2 APIs",cost:1500},{label:"3+ APIs",cost:4000}]},
{id:"wpp4",label:"User Role Management",type:"select",options:[{label:"Not needed",cost:0},{label:"Basic roles",cost:800},{label:"Advanced RBAC",cost:2500}]},
{id:"wpp5",label:"Additional",type:"checkbox",options:[{label:"Security audit",cost:1000},{label:"Unit testing",cost:1500},{label:"Documentation",cost:800},{label:"WordPress.org submission",cost:500}]}
]},
{id:"wordpress-maintenance",name:"WordPress Maintenance Cost Calculator",category:"web-development",icon:"🔧",description:"Calculate ongoing WordPress maintenance and support costs.",inputs:[
{id:"wm1",label:"Monthly Support Hours",type:"select",options:[{label:"5 hours/month",cost:250},{label:"10 hours/month",cost:450},{label:"20 hours/month",cost:800},{label:"40 hours/month",cost:1500}]},
{id:"wm2",label:"Updates & Patches",type:"select",options:[{label:"Monthly updates",cost:100},{label:"Weekly updates",cost:250},{label:"Real-time monitoring",cost:500}]},
{id:"wm3",label:"Backup Frequency",type:"select",options:[{label:"Weekly backups",cost:50},{label:"Daily backups",cost:100},{label:"Real-time backups",cost:250}]},
{id:"wm4",label:"Security Services",type:"checkbox",options:[{label:"Malware scanning",cost:100},{label:"Firewall setup",cost:150},{label:"SSL management",cost:50},{label:"Security monitoring",cost:200}]},
{id:"wm5",label:"Performance Monitoring",type:"select",options:[{label:"Monthly speed checks",cost:50},{label:"Weekly optimization",cost:150},{label:"Continuous monitoring",cost:300}]},
{id:"wm6",label:"Support SLA",type:"select",options:[{label:"48-hour response",cost:0},{label:"24-hour response",cost:200},{label:"4-hour response",cost:500}]}
]},
{id:"webflow-development",name:"Webflow Development Cost Calculator",category:"web-development",icon:"🎨",description:"Estimate Webflow website development costs with CMS and animations.",inputs:[
{id:"wf1",label:"Page Count",type:"range",min:1,max:30,default:5,costPerUnit:300,unit:"pages"},
{id:"wf2",label:"CMS Collections",type:"select",options:[{label:"No CMS",cost:0},{label:"1-3 collections",cost:800},{label:"4-10 collections",cost:2000},{label:"10+ collections",cost:4000}]},
{id:"wf3",label:"Animations",type:"select",options:[{label:"Basic transitions",cost:500},{label:"Custom scroll animations",cost:2000},{label:"Complex interactions",cost:5000}]},
{id:"wf4",label:"Forms & Integrations",type:"select",options:[{label:"Basic contact form",cost:200},{label:"Multi-step forms + Zapier",cost:1000},{label:"Custom integrations",cost:3000}]},
{id:"wf5",label:"Custom Code",type:"select",options:[{label:"No custom code",cost:0},{label:"Minor custom code",cost:500},{label:"Extensive custom code",cost:2000}]},
{id:"wf6",label:"Third-party Integrations",type:"checkbox",options:[{label:"Analytics",cost:200},{label:"CRM integration",cost:800},{label:"Payment processing",cost:600},{label:"Marketing automation",cost:500}]}
]},
{id:"headless-cms",name:"Headless CMS Development Cost Calculator",category:"web-development",icon:"⚡",description:"Calculate headless CMS setup costs with frontend framework and API integration.",inputs:[
{id:"hc1",label:"CMS Platform",type:"select",options:[{label:"Strapi",cost:2000},{label:"Contentful",cost:3000},{label:"Sanity",cost:2500},{label:"Custom headless CMS",cost:10000}]},
{id:"hc2",label:"Frontend Stack",type:"select",options:[{label:"Next.js",cost:5000},{label:"Gatsby",cost:4000},{label:"Nuxt.js",cost:4500},{label:"Custom React/Vue",cost:7000}]},
{id:"hc3",label:"Content Models",type:"select",options:[{label:"Simple (3-5 models)",cost:1000},{label:"Moderate (6-15 models)",cost:3000},{label:"Complex (15+ models)",cost:6000}]},
{id:"hc4",label:"API Endpoints",type:"select",options:[{label:"5-10 endpoints",cost:1500},{label:"10-25 endpoints",cost:4000},{label:"25+ endpoints",cost:8000}]},
{id:"hc5",label:"Additional",type:"checkbox",options:[{label:"Preview/draft mode",cost:1500},{label:"Image optimization pipeline",cost:1000},{label:"Search functionality",cost:2000},{label:"Hosting & CI/CD setup",cost:1500}]}
]},
{id:"mobile-app",name:"Mobile App Development Cost Calculator",category:"mobile-apps",icon:"📱",description:"Estimate mobile app development costs across platforms and feature sets.",inputs:[
{id:"ma1",label:"Platform",type:"select",options:[{label:"iOS only",cost:15000},{label:"Android only",cost:14000},{label:"Both (native)",cost:28000},{label:"Cross-platform (React Native/Flutter)",cost:20000}]},
{id:"ma2",label:"App Complexity",type:"select",options:[{label:"Simple (5-10 screens)",cost:5000},{label:"Medium (10-25 screens)",cost:15000},{label:"Complex (25+ screens)",cost:35000}]},
{id:"ma3",label:"UI/UX Design Level",type:"select",options:[{label:"Standard UI",cost:2000},{label:"Custom branded UI",cost:6000},{label:"Premium animated UI",cost:15000}]},
{id:"ma4",label:"Backend",type:"select",options:[{label:"Firebase/BaaS",cost:3000},{label:"Custom Node.js/Python",cost:10000},{label:"Enterprise backend",cost:25000}]},
{id:"ma5",label:"Features",type:"checkbox",options:[{label:"User authentication",cost:2000},{label:"Payment integration",cost:3000},{label:"Push notifications",cost:1500},{label:"Chat/messaging",cost:5000},{label:"Maps/location",cost:2500},{label:"Camera/media",cost:2000}]},
{id:"ma6",label:"Timeline",type:"select",options:[{label:"Standard (16-24 weeks)",cost:0},{label:"Accelerated (10-14 weeks)",cost:10000},{label:"Rush (6-8 weeks)",cost:25000}]}
]},
{id:"ios-app",name:"iOS App Development Cost Calculator",category:"mobile-apps",icon:"🍎",description:"Calculate iOS-specific app development costs with native Swift features.",inputs:[
{id:"ios1",label:"Device Support",type:"select",options:[{label:"iPhone only",cost:5000},{label:"iPhone + iPad",cost:9000},{label:"Universal (all Apple devices)",cost:14000}]},
{id:"ios2",label:"Native Features",type:"select",options:[{label:"Basic (standard UI)",cost:3000},{label:"Advanced (ARKit, Core ML)",cost:10000},{label:"Complex (HealthKit, HomeKit)",cost:18000}]},
{id:"ios3",label:"Screen Count",type:"range",min:3,max:50,default:8,costPerUnit:800,unit:"screens"},
{id:"ios4",label:"Backend & API",type:"select",options:[{label:"Simple REST API",cost:3000},{label:"Complex API + real-time",cost:8000},{label:"Enterprise API suite",cost:18000}]},
{id:"ios5",label:"Features",type:"checkbox",options:[{label:"Apple Sign-In",cost:1000},{label:"In-App Purchases",cost:3000},{label:"Push Notifications (APNs)",cost:1200},{label:"Offline mode",cost:3000},{label:"Biometric auth",cost:1500}]},
{id:"ios6",label:"App Store Submission",type:"select",options:[{label:"Self-managed",cost:0},{label:"Managed submission + ASO",cost:1500}]}
]}
];
