var C3=[
{id:"crm-development",name:"CRM Development Cost Calculator",category:"web-apps-saas",icon:"📇",description:"Calculate custom CRM system development costs.",inputs:[
{id:"cr1",label:"Contact Management",type:"select",options:[{label:"Basic contacts & leads",cost:5000},{label:"Advanced segmentation",cost:10000},{label:"Enterprise contact management",cost:20000}]},
{id:"cr2",label:"Sales Pipeline",type:"select",options:[{label:"Simple pipeline",cost:3000},{label:"Multi-pipeline + stages",cost:7000},{label:"AI-powered pipeline",cost:15000}]},
{id:"cr3",label:"Automation",type:"select",options:[{label:"Basic workflows",cost:2000},{label:"Advanced automation",cost:6000},{label:"AI-driven automation",cost:12000}]},
{id:"cr4",label:"Reports & Analytics",type:"select",options:[{label:"Standard reports",cost:2000},{label:"Custom dashboards",cost:5000},{label:"Advanced BI analytics",cost:10000}]},
{id:"cr5",label:"Integrations",type:"checkbox",options:[{label:"Email integration",cost:2000},{label:"Calendar sync",cost:1500},{label:"Phone/VoIP",cost:3000},{label:"Marketing tools",cost:2500}]}
]},
{id:"marketplace-development",name:"Marketplace Development Cost Calculator",category:"web-apps-saas",icon:"🏪",description:"Estimate online marketplace platform development costs.",inputs:[
{id:"mk1",label:"Marketplace Type",type:"select",options:[{label:"Simple listing marketplace",cost:15000},{label:"Transaction marketplace",cost:30000},{label:"Full service marketplace",cost:60000}]},
{id:"mk2",label:"User Roles",type:"select",options:[{label:"Buyer + Seller",cost:5000},{label:"Buyer + Seller + Admin",cost:8000},{label:"Multi-role with sub-accounts",cost:15000}]},
{id:"mk3",label:"Commission & Payments",type:"select",options:[{label:"Simple fixed commission",cost:3000},{label:"Tiered commission + escrow",cost:8000},{label:"Complex split payments",cost:15000}]},
{id:"mk4",label:"Features",type:"checkbox",options:[{label:"Ratings & reviews",cost:3000},{label:"Dispute resolution system",cost:5000},{label:"Moderation tools",cost:3000},{label:"Search & filters",cost:4000},{label:"Chat/messaging",cost:5000}]},
{id:"mk5",label:"Admin Panel",type:"select",options:[{label:"Basic admin",cost:3000},{label:"Full admin suite",cost:8000},{label:"Enterprise admin + analytics",cost:15000}]}
]},
{id:"booking-platform",name:"Booking Platform Cost Calculator",category:"web-apps-saas",icon:"📅",description:"Calculate booking and reservation platform development costs.",inputs:[
{id:"bk1",label:"Calendar & Scheduling",type:"select",options:[{label:"Simple date picker",cost:3000},{label:"Advanced calendar with slots",cost:8000},{label:"Multi-resource scheduling",cost:15000}]},
{id:"bk2",label:"Payment Processing",type:"select",options:[{label:"Simple checkout",cost:2000},{label:"Deposits + full payment",cost:4000},{label:"Complex pricing rules",cost:8000}]},
{id:"bk3",label:"User Roles",type:"select",options:[{label:"Customer + Provider",cost:3000},{label:"Multi-role + teams",cost:7000},{label:"Enterprise hierarchy",cost:12000}]},
{id:"bk4",label:"Features",type:"checkbox",options:[{label:"Reminders (email/SMS)",cost:1500},{label:"Cancellation rules",cost:1000},{label:"Waitlist management",cost:2000},{label:"Review system",cost:1500},{label:"Calendar integrations",cost:2000}]},
{id:"bk5",label:"Admin Panel",type:"select",options:[{label:"Basic admin",cost:2000},{label:"Full admin dashboard",cost:6000}]}
]},
{id:"dashboard-development",name:"Dashboard Development Cost Calculator",category:"web-apps-saas",icon:"📊",description:"Estimate custom dashboard and reporting tool costs.",inputs:[
{id:"db1",label:"Data Sources",type:"select",options:[{label:"1-2 sources",cost:2000},{label:"3-5 sources",cost:5000},{label:"6+ sources (data warehouse)",cost:12000}]},
{id:"db2",label:"Charts & Visualizations",type:"select",options:[{label:"Basic charts (5-10)",cost:3000},{label:"Advanced charts (10-20)",cost:7000},{label:"Complex interactive visuals",cost:15000}]},
{id:"db3",label:"Filters & Interactivity",type:"select",options:[{label:"Basic filters",cost:1000},{label:"Advanced drill-down",cost:3000},{label:"AI-powered insights",cost:8000}]},
{id:"db4",label:"User Roles",type:"select",options:[{label:"Single role",cost:0},{label:"Role-based views",cost:3000},{label:"Custom per-user dashboards",cost:6000}]},
{id:"db5",label:"Features",type:"checkbox",options:[{label:"Export (PDF/CSV)",cost:1500},{label:"Scheduled reports",cost:2000},{label:"Real-time refresh",cost:3000},{label:"Embedded analytics",cost:4000}]}
]},
{id:"admin-panel",name:"Admin Panel Development Cost Calculator",category:"web-apps-saas",icon:"⚙️",description:"Calculate admin panel and back-office tool development costs.",inputs:[
{id:"ap1",label:"Modules",type:"select",options:[{label:"3-5 modules",cost:5000},{label:"6-10 modules",cost:10000},{label:"10+ modules",cost:20000}]},
{id:"ap2",label:"Permission System",type:"select",options:[{label:"Basic admin/viewer",cost:1000},{label:"Role-based access",cost:3000},{label:"Granular permissions",cost:6000}]},
{id:"ap3",label:"CRUD Screens",type:"range",min:3,max:30,default:8,costPerUnit:400,unit:"screens"},
{id:"ap4",label:"Features",type:"checkbox",options:[{label:"Advanced reporting",cost:3000},{label:"Audit logs",cost:2000},{label:"Bulk operations",cost:1500},{label:"Data import/export",cost:2000},{label:"Activity dashboard",cost:2500}]}
]},
{id:"erp-implementation",name:"ERP Implementation Cost Calculator",category:"erp-systems",icon:"🏢",description:"Estimate ERP system implementation costs.",inputs:[
{id:"er1",label:"User Count",type:"select",options:[{label:"1-10 users",cost:15000},{label:"11-50 users",cost:35000},{label:"51-200 users",cost:80000},{label:"200+ users",cost:150000}]},
{id:"er2",label:"Modules",type:"select",options:[{label:"Core (Finance + HR)",cost:10000},{label:"Standard (5-7 modules)",cost:25000},{label:"Full suite (10+ modules)",cost:50000}]},
{id:"er3",label:"Data Migration",type:"select",options:[{label:"Minimal data",cost:3000},{label:"Moderate migration",cost:10000},{label:"Complex legacy migration",cost:25000}]},
{id:"er4",label:"Customization",type:"select",options:[{label:"Out-of-the-box",cost:0},{label:"Minor customization",cost:10000},{label:"Heavy customization",cost:30000}]},
{id:"er5",label:"Additional",type:"checkbox",options:[{label:"Integration with existing tools",cost:8000},{label:"Training program",cost:5000},{label:"Go-live support",cost:3000},{label:"Post-launch support (3 months)",cost:8000}]}
]},
{id:"odoo-implementation",name:"Odoo Implementation Cost Calculator",category:"erp-systems",icon:"🟣",description:"Calculate Odoo ERP implementation and customization costs.",inputs:[
{id:"od1",label:"Odoo Apps",type:"select",options:[{label:"1-3 apps",cost:5000},{label:"4-8 apps",cost:12000},{label:"Full suite (10+ apps)",cost:25000}]},
{id:"od2",label:"Users",type:"select",options:[{label:"1-10 users",cost:3000},{label:"11-50 users",cost:8000},{label:"50+ users",cost:15000}]},
{id:"od3",label:"Customization",type:"select",options:[{label:"Standard configuration",cost:2000},{label:"Custom modules",cost:8000},{label:"Heavy customization",cost:20000}]},
{id:"od4",label:"Data Migration",type:"select",options:[{label:"Basic import",cost:2000},{label:"Complex migration",cost:8000},{label:"Full legacy migration",cost:18000}]},
{id:"od5",label:"Hosting",type:"select",options:[{label:"Odoo Online (SaaS)",cost:0},{label:"Odoo.sh",cost:1500},{label:"Self-hosted",cost:3000}]},
{id:"od6",label:"Additional",type:"checkbox",options:[{label:"Training",cost:3000},{label:"Support plan (6 months)",cost:5000},{label:"Custom reporting",cost:2500}]}
]},
{id:"sap-b1",name:"SAP Business One Implementation Cost Calculator",category:"erp-systems",icon:"🔷",description:"Estimate SAP Business One implementation costs.",inputs:[
{id:"sb1",label:"Users",type:"select",options:[{label:"1-5 users",cost:25000},{label:"6-20 users",cost:50000},{label:"21-50 users",cost:90000},{label:"50+ users",cost:150000}]},
{id:"sb2",label:"License Type",type:"select",options:[{label:"Professional",cost:5000},{label:"Limited",cost:2500},{label:"Starter package",cost:8000}]},
{id:"sb3",label:"Add-ons",type:"select",options:[{label:"No add-ons",cost:0},{label:"1-3 add-ons",cost:8000},{label:"5+ add-ons",cost:20000}]},
{id:"sb4",label:"Data Migration",type:"select",options:[{label:"Basic",cost:5000},{label:"Complex",cost:15000},{label:"Enterprise migration",cost:30000}]},
{id:"sb5",label:"Additional",type:"checkbox",options:[{label:"Custom reports (Crystal)",cost:5000},{label:"Training",cost:5000},{label:"Integrations",cost:10000},{label:"Go-live support",cost:5000}]}
]},
{id:"dynamics-365",name:"Microsoft Dynamics 365 Implementation Cost Calculator",category:"erp-systems",icon:"🟦",description:"Calculate Microsoft Dynamics 365 implementation costs.",inputs:[
{id:"dy1",label:"Modules",type:"select",options:[{label:"Sales only",cost:15000},{label:"Sales + Service",cost:30000},{label:"Full ERP suite",cost:60000},{label:"Enterprise (all modules)",cost:120000}]},
{id:"dy2",label:"User Count",type:"select",options:[{label:"1-10 users",cost:5000},{label:"11-50 users",cost:15000},{label:"50-200 users",cost:35000},{label:"200+ users",cost:60000}]},
{id:"dy3",label:"Integrations",type:"select",options:[{label:"Office 365 only",cost:2000},{label:"Multiple systems",cost:10000},{label:"Complex enterprise integration",cost:25000}]},
{id:"dy4",label:"Data Migration",type:"select",options:[{label:"Simple",cost:5000},{label:"Complex",cost:15000},{label:"Legacy system migration",cost:30000}]},
{id:"dy5",label:"Additional",type:"checkbox",options:[{label:"Custom workflows",cost:5000},{label:"Training program",cost:5000},{label:"Power BI integration",cost:3000},{label:"Support plan",cost:8000}]}
]},
{id:"netsuite",name:"NetSuite Implementation Cost Calculator",category:"erp-systems",icon:"🔶",description:"Estimate Oracle NetSuite implementation costs.",inputs:[
{id:"ns1",label:"Subsidiaries",type:"select",options:[{label:"Single entity",cost:20000},{label:"2-5 subsidiaries",cost:45000},{label:"5+ subsidiaries",cost:80000}]},
{id:"ns2",label:"Users",type:"select",options:[{label:"1-10 users",cost:8000},{label:"11-50 users",cost:20000},{label:"50+ users",cost:40000}]},
{id:"ns3",label:"Custom Workflows",type:"select",options:[{label:"Standard",cost:0},{label:"5-10 workflows",cost:8000},{label:"Complex automation",cost:20000}]},
{id:"ns4",label:"Integrations",type:"select",options:[{label:"Basic",cost:5000},{label:"Multiple systems",cost:15000},{label:"Enterprise integration suite",cost:35000}]},
{id:"ns5",label:"Additional",type:"checkbox",options:[{label:"Custom reporting",cost:5000},{label:"Data migration",cost:10000},{label:"Training",cost:5000},{label:"Support plan",cost:8000}]}
]},
{id:"erp-migration",name:"ERP Migration Cost Calculator",category:"erp-systems",icon:"🔄",description:"Calculate the cost of migrating between ERP systems.",inputs:[
{id:"em1",label:"Source ERP",type:"select",options:[{label:"Legacy/custom system",cost:10000},{label:"Small ERP (QuickBooks, Tally)",cost:5000},{label:"Mid-range ERP",cost:12000},{label:"Enterprise ERP (SAP, Oracle)",cost:25000}]},
{id:"em2",label:"Data Volume",type:"select",options:[{label:"Small (under 100K records)",cost:3000},{label:"Medium (100K-1M records)",cost:8000},{label:"Large (1M+ records)",cost:20000}]},
{id:"em3",label:"Field Mapping & Cleansing",type:"select",options:[{label:"Simple mapping",cost:3000},{label:"Complex transformation",cost:8000},{label:"Heavy cleansing required",cost:15000}]},
{id:"em4",label:"Downtime Tolerance",type:"select",options:[{label:"Weekend migration OK",cost:0},{label:"Minimal downtime",cost:5000},{label:"Zero downtime required",cost:15000}]},
{id:"em5",label:"Additional",type:"checkbox",options:[{label:"Parallel run period",cost:5000},{label:"User retraining",cost:3000},{label:"Post-migration validation",cost:4000},{label:"Rollback plan",cost:2000}]}
]},
{id:"erp-customization",name:"ERP Customization Cost Calculator",category:"erp-systems",icon:"🔨",description:"Estimate ERP customization and enhancement costs.",inputs:[
{id:"ec1",label:"Custom Workflows",type:"select",options:[{label:"1-3 workflows",cost:3000},{label:"4-10 workflows",cost:8000},{label:"10+ workflows",cost:18000}]},
{id:"ec2",label:"Custom Reports",type:"select",options:[{label:"1-5 reports",cost:2000},{label:"6-15 reports",cost:5000},{label:"15+ reports",cost:12000}]},
{id:"ec3",label:"Approval Processes",type:"select",options:[{label:"Simple approvals",cost:2000},{label:"Multi-level approvals",cost:5000},{label:"Complex approval matrix",cost:10000}]},
{id:"ec4",label:"Custom Modules",type:"select",options:[{label:"Minor extensions",cost:3000},{label:"Custom module",cost:10000},{label:"Multiple custom modules",cost:25000}]},
{id:"ec5",label:"Additional",type:"checkbox",options:[{label:"User role customization",cost:2000},{label:"Automation rules",cost:3000},{label:"API customization",cost:4000},{label:"Testing & QA",cost:3000}]}
]},
{id:"business-process-automation",name:"Business Process Automation Cost Calculator",category:"erp-systems",icon:"⚡",description:"Calculate business process automation implementation costs.",inputs:[
{id:"bp1",label:"Process Count",type:"select",options:[{label:"1-3 processes",cost:5000},{label:"4-8 processes",cost:12000},{label:"8+ processes",cost:25000}]},
{id:"bp2",label:"Systems Integration",type:"select",options:[{label:"2-3 systems",cost:3000},{label:"4-6 systems",cost:8000},{label:"Complex ecosystem",cost:18000}]},
{id:"bp3",label:"Workflow Complexity",type:"select",options:[{label:"Simple linear",cost:2000},{label:"Conditional branching",cost:5000},{label:"Complex decision trees",cost:12000}]},
{id:"bp4",label:"Approval Rules",type:"select",options:[{label:"Basic approvals",cost:1000},{label:"Multi-level",cost:3000},{label:"Dynamic routing",cost:6000}]},
{id:"bp5",label:"Additional",type:"checkbox",options:[{label:"Reporting dashboard",cost:3000},{label:"Email notifications",cost:1000},{label:"Document automation",cost:2500},{label:"RPA integration",cost:5000}]}
]}
];
