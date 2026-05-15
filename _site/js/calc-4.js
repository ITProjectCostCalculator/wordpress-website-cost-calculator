var C4=[
{id:"ecommerce-website",name:"eCommerce Website Cost Calculator",category:"ecommerce",icon:"🛒",description:"Estimate eCommerce website development costs.",inputs:[
{id:"ec1",label:"Platform",type:"select",options:[{label:"Shopify",cost:3000},{label:"WooCommerce",cost:3500},{label:"Magento",cost:10000},{label:"Custom built",cost:25000}]},
{id:"ec2",label:"Product Count",type:"select",options:[{label:"Under 50",cost:1000},{label:"50-500",cost:3000},{label:"500-5000",cost:6000},{label:"5000+",cost:12000}]},
{id:"ec3",label:"Payment Setup",type:"select",options:[{label:"Single gateway",cost:500},{label:"Multiple gateways",cost:1500},{label:"International payments",cost:3000}]},
{id:"ec4",label:"Shipping",type:"select",options:[{label:"Flat rate",cost:300},{label:"Carrier-calculated",cost:1000},{label:"Complex shipping rules",cost:3000}]},
{id:"ec5",label:"Design Level",type:"select",options:[{label:"Theme-based",cost:1000},{label:"Custom design",cost:5000},{label:"Premium custom design",cost:12000}]},
{id:"ec6",label:"Features",type:"checkbox",options:[{label:"Product reviews",cost:500},{label:"Wishlist",cost:400},{label:"Loyalty program",cost:2000},{label:"Multi-currency",cost:1500},{label:"Subscription products",cost:2500}]}
]},
{id:"shopify-store",name:"Shopify Store Development Cost Calculator",category:"ecommerce",icon:"🟢",description:"Calculate Shopify store setup and customization costs.",inputs:[
{id:"ss1",label:"Theme",type:"select",options:[{label:"Free theme setup",cost:500},{label:"Premium theme customization",cost:2000},{label:"Fully custom theme",cost:8000}]},
{id:"ss2",label:"Custom Design",type:"select",options:[{label:"Minimal customization",cost:500},{label:"Branded design",cost:3000},{label:"Premium design",cost:7000}]},
{id:"ss3",label:"Pages",type:"range",min:1,max:30,default:5,costPerUnit:200,unit:"pages"},
{id:"ss4",label:"Apps & Integrations",type:"select",options:[{label:"Basic apps (3-5)",cost:500},{label:"Advanced apps (5-10)",cost:1500},{label:"Custom app development",cost:5000}]},
{id:"ss5",label:"Products",type:"select",options:[{label:"Under 50",cost:300},{label:"50-200",cost:800},{label:"200+",cost:1500}]},
{id:"ss6",label:"Features",type:"checkbox",options:[{label:"Custom checkout",cost:1500},{label:"Product reviews",cost:300},{label:"SEO optimization",cost:800},{label:"Email marketing setup",cost:500}]}
]},
{id:"shopify-plus",name:"Shopify Plus Development Cost Calculator",category:"ecommerce",icon:"💎",description:"Estimate Shopify Plus enterprise store development costs.",inputs:[
{id:"sp1",label:"Store Complexity",type:"select",options:[{label:"Single store",cost:10000},{label:"Multi-store (2-3)",cost:25000},{label:"Enterprise multi-store",cost:50000}]},
{id:"sp2",label:"Checkout Extensions",type:"select",options:[{label:"Standard checkout",cost:0},{label:"Custom checkout UI",cost:5000},{label:"Advanced checkout (scripts + extensions)",cost:12000}]},
{id:"sp3",label:"B2B Features",type:"select",options:[{label:"Not needed",cost:0},{label:"Basic B2B catalog",cost:5000},{label:"Full B2B portal",cost:15000}]},
{id:"sp4",label:"ERP Integration",type:"select",options:[{label:"No ERP",cost:0},{label:"Basic sync",cost:5000},{label:"Full ERP integration",cost:15000}]},
{id:"sp5",label:"Features",type:"checkbox",options:[{label:"Custom apps",cost:5000},{label:"Headless setup",cost:8000},{label:"Flow automation",cost:3000},{label:"Launchpad",cost:2000},{label:"Scripts",cost:3000}]}
]},
{id:"shopify-migration",name:"Shopify Migration Cost Calculator",category:"ecommerce",icon:"📦",description:"Calculate the cost of migrating to Shopify from another platform.",inputs:[
{id:"sm1",label:"Source Platform",type:"select",options:[{label:"WooCommerce",cost:3000},{label:"Magento",cost:6000},{label:"BigCommerce",cost:3500},{label:"Custom/Other",cost:5000}]},
{id:"sm2",label:"Products (SKUs)",type:"select",options:[{label:"Under 100",cost:1000},{label:"100-1000",cost:3000},{label:"1000-10000",cost:6000},{label:"10000+",cost:12000}]},
{id:"sm3",label:"Historical Data",type:"select",options:[{label:"Products only",cost:0},{label:"Products + Orders",cost:2000},{label:"Full history (orders + customers)",cost:5000}]},
{id:"sm4",label:"URL Redirects & SEO",type:"select",options:[{label:"Basic redirects",cost:500},{label:"Full SEO migration",cost:2000},{label:"Enterprise SEO preservation",cost:5000}]},
{id:"sm5",label:"Additional",type:"checkbox",options:[{label:"App replacement setup",cost:2000},{label:"Theme matching",cost:3000},{label:"Custom functionality rebuild",cost:5000},{label:"Staff training",cost:1000}]}
]},
{id:"shopify-app",name:"Shopify App Development Cost Calculator",category:"ecommerce",icon:"🧩",description:"Estimate custom Shopify app development costs.",inputs:[
{id:"sha1",label:"App Type",type:"select",options:[{label:"Simple embedded app",cost:5000},{label:"Complex embedded app",cost:15000},{label:"Public marketplace app",cost:25000}]},
{id:"sha2",label:"Admin Features",type:"select",options:[{label:"Basic settings",cost:1000},{label:"Full admin dashboard",cost:4000},{label:"Advanced analytics + admin",cost:8000}]},
{id:"sha3",label:"Storefront Features",type:"select",options:[{label:"No storefront changes",cost:0},{label:"Theme app extension",cost:3000},{label:"Custom storefront blocks",cost:6000}]},
{id:"sha4",label:"API Usage",type:"select",options:[{label:"Basic APIs",cost:1000},{label:"Advanced API (GraphQL)",cost:3000},{label:"Complex multi-API",cost:6000}]},
{id:"sha5",label:"Additional",type:"checkbox",options:[{label:"Billing integration",cost:2000},{label:"Webhooks",cost:1000},{label:"App listing (Shopify Store)",cost:1500},{label:"Automated testing",cost:2000}]}
]},
{id:"shopify-headless",name:"Shopify Headless Cost Calculator",category:"ecommerce",icon:"🔗",description:"Calculate Shopify headless/hydrogen storefront costs.",inputs:[
{id:"sh1",label:"Frontend Stack",type:"select",options:[{label:"Hydrogen (Remix)",cost:8000},{label:"Next.js",cost:10000},{label:"Gatsby",cost:7000},{label:"Custom React",cost:12000}]},
{id:"sh2",label:"CMS Integration",type:"select",options:[{label:"Shopify metafields only",cost:1000},{label:"Headless CMS (Contentful/Sanity)",cost:4000},{label:"Custom CMS",cost:8000}]},
{id:"sh3",label:"Checkout Setup",type:"select",options:[{label:"Shopify hosted checkout",cost:0},{label:"Custom checkout UI",cost:5000},{label:"Full custom checkout",cost:12000}]},
{id:"sh4",label:"Hosting & CI/CD",type:"select",options:[{label:"Oxygen (Shopify)",cost:500},{label:"Vercel/Netlify",cost:1000},{label:"Custom cloud hosting",cost:3000}]},
{id:"sh5",label:"Performance",type:"select",options:[{label:"Standard optimization",cost:1000},{label:"Advanced (CDN + edge)",cost:3000},{label:"Ultra-performance",cost:6000}]}
]},
{id:"shopify-b2b",name:"Shopify B2B Cost Calculator",category:"ecommerce",icon:"🤝",description:"Estimate Shopify B2B store development costs.",inputs:[
{id:"sb2b1",label:"Company Accounts",type:"select",options:[{label:"Basic company profiles",cost:3000},{label:"Advanced with locations",cost:6000},{label:"Enterprise accounts",cost:12000}]},
{id:"sb2b2",label:"Price Lists",type:"select",options:[{label:"Single price list",cost:1000},{label:"Multiple price lists",cost:3000},{label:"Dynamic pricing engine",cost:8000}]},
{id:"sb2b3",label:"Catalogs",type:"select",options:[{label:"Single catalog",cost:500},{label:"Per-company catalogs",cost:3000},{label:"Complex catalog rules",cost:6000}]},
{id:"sb2b4",label:"Payment Terms",type:"select",options:[{label:"Pay now only",cost:0},{label:"Net terms",cost:2000},{label:"Complex payment terms",cost:5000}]},
{id:"sb2b5",label:"Features",type:"checkbox",options:[{label:"Approval workflows",cost:3000},{label:"ERP integration",cost:8000},{label:"Quick order forms",cost:2000},{label:"Custom portal",cost:5000}]}
]},
{id:"shopify-audit",name:"Shopify Website Audit Cost Calculator",category:"ecommerce",icon:"🔍",description:"Calculate Shopify store audit and optimization costs.",inputs:[
{id:"sau1",label:"Store Size",type:"select",options:[{label:"Small (under 50 pages)",cost:800},{label:"Medium (50-200 pages)",cost:1500},{label:"Large (200+ pages)",cost:3000}]},
{id:"sau2",label:"Audit Scope",type:"checkbox",options:[{label:"SEO audit",cost:800},{label:"Speed/performance audit",cost:600},{label:"UX/conversion audit",cost:1000},{label:"Accessibility audit",cost:800},{label:"Security audit",cost:600},{label:"Code quality review",cost:1000}]},
{id:"sau3",label:"Report Type",type:"select",options:[{label:"Summary report",cost:0},{label:"Detailed with recommendations",cost:500},{label:"Detailed + implementation roadmap",cost:1500}]}
]},
{id:"shopify-ada",name:"Shopify ADA Compliance Cost Calculator",category:"ecommerce",icon:"♿",description:"Estimate Shopify ADA/WCAG compliance costs.",inputs:[
{id:"ada1",label:"Page Count",type:"select",options:[{label:"Under 20 pages",cost:1500},{label:"20-50 pages",cost:3000},{label:"50-100 pages",cost:5000},{label:"100+ pages",cost:8000}]},
{id:"ada2",label:"WCAG Level",type:"select",options:[{label:"WCAG 2.1 Level A",cost:1000},{label:"WCAG 2.1 Level AA",cost:2500},{label:"WCAG 2.1 Level AAA",cost:5000}]},
{id:"ada3",label:"Remediation Scope",type:"select",options:[{label:"Audit only",cost:0},{label:"Audit + basic fixes",cost:2000},{label:"Full remediation",cost:6000}]},
{id:"ada4",label:"Testing Method",type:"select",options:[{label:"Automated testing only",cost:500},{label:"Automated + manual testing",cost:2000},{label:"Full assistive technology testing",cost:4000}]},
{id:"ada5",label:"Additional",type:"checkbox",options:[{label:"Accessibility statement page",cost:300},{label:"Staff training",cost:1000},{label:"Ongoing monitoring",cost:1500}]}
]},
{id:"shopify-erp-integration",name:"Shopify ERP Integration Cost Calculator",category:"ecommerce",icon:"🔄",description:"Calculate Shopify to ERP integration costs.",inputs:[
{id:"sei1",label:"ERP System",type:"select",options:[{label:"QuickBooks",cost:3000},{label:"Odoo",cost:5000},{label:"SAP Business One",cost:10000},{label:"NetSuite",cost:12000},{label:"Microsoft Dynamics",cost:10000}]},
{id:"sei2",label:"Sync Objects",type:"checkbox",options:[{label:"Products/inventory",cost:2000},{label:"Orders",cost:2000},{label:"Customers",cost:1500},{label:"Pricing",cost:1500},{label:"Financial data",cost:3000}]},
{id:"sei3",label:"Sync Frequency",type:"select",options:[{label:"Daily sync",cost:1000},{label:"Hourly sync",cost:2000},{label:"Real-time sync",cost:5000}]},
{id:"sei4",label:"Error Handling",type:"select",options:[{label:"Basic logging",cost:500},{label:"Alerts + retry logic",cost:2000},{label:"Advanced error handling + dashboard",cost:4000}]}
]},
{id:"woocommerce",name:"WooCommerce Development Cost Calculator",category:"ecommerce",icon:"🟪",description:"Estimate WooCommerce store development costs.",inputs:[
{id:"wc1",label:"Product Count",type:"select",options:[{label:"Under 50",cost:1000},{label:"50-500",cost:2500},{label:"500-5000",cost:5000},{label:"5000+",cost:10000}]},
{id:"wc2",label:"Payment Setup",type:"select",options:[{label:"Single gateway",cost:500},{label:"Multiple gateways",cost:1500},{label:"Custom payment flow",cost:3000}]},
{id:"wc3",label:"Shipping",type:"select",options:[{label:"Simple shipping",cost:300},{label:"Zone-based shipping",cost:800},{label:"Complex shipping rules",cost:2000}]},
{id:"wc4",label:"Plugins",type:"select",options:[{label:"Basic plugins (5-10)",cost:500},{label:"Premium plugins (10-20)",cost:2000},{label:"Custom plugin development",cost:5000}]},
{id:"wc5",label:"Custom Features",type:"checkbox",options:[{label:"Custom product types",cost:2000},{label:"Subscription products",cost:2500},{label:"Bookings/appointments",cost:3000},{label:"Multi-vendor marketplace",cost:8000}]},
{id:"wc6",label:"Performance",type:"select",options:[{label:"Standard hosting",cost:500},{label:"Optimized hosting",cost:1500},{label:"Enterprise performance",cost:4000}]}
]},
{id:"magento-development",name:"Magento Development Cost Calculator",category:"ecommerce",icon:"🟧",description:"Calculate Magento/Adobe Commerce development costs.",inputs:[
{id:"mg1",label:"Store Count",type:"select",options:[{label:"Single store",cost:15000},{label:"Multi-store (2-3)",cost:30000},{label:"Enterprise multi-store",cost:60000}]},
{id:"mg2",label:"Catalog Size",type:"select",options:[{label:"Under 1000 SKUs",cost:3000},{label:"1000-10000 SKUs",cost:6000},{label:"10000+ SKUs",cost:12000}]},
{id:"mg3",label:"Extensions",type:"select",options:[{label:"Basic (3-5)",cost:2000},{label:"Advanced (5-15)",cost:5000},{label:"Enterprise (15+)",cost:12000}]},
{id:"mg4",label:"Custom Modules",type:"select",options:[{label:"No custom modules",cost:0},{label:"1-3 custom modules",cost:8000},{label:"Complex custom development",cost:20000}]},
{id:"mg5",label:"Hosting",type:"select",options:[{label:"Shared hosting",cost:1000},{label:"Dedicated/cloud",cost:3000},{label:"Enterprise cloud (Adobe)",cost:8000}]},
{id:"mg6",label:"Integrations",type:"checkbox",options:[{label:"ERP integration",cost:8000},{label:"PIM integration",cost:5000},{label:"Payment gateways",cost:2000},{label:"Shipping providers",cost:1500}]}
]},
{id:"headless-commerce",name:"Headless Commerce Cost Calculator",category:"ecommerce",icon:"🔌",description:"Estimate headless commerce platform development costs.",inputs:[
{id:"hco1",label:"Commerce Platform",type:"select",options:[{label:"Shopify (Storefront API)",cost:5000},{label:"commercetools",cost:15000},{label:"BigCommerce",cost:6000},{label:"Custom engine",cost:30000}]},
{id:"hco2",label:"Frontend Stack",type:"select",options:[{label:"Next.js",cost:8000},{label:"Nuxt.js",cost:7000},{label:"Gatsby",cost:6000},{label:"Custom SPA",cost:12000}]},
{id:"hco3",label:"CMS",type:"select",options:[{label:"Commerce CMS only",cost:0},{label:"Headless CMS integration",cost:4000},{label:"Multi-CMS setup",cost:8000}]},
{id:"hco4",label:"Checkout",type:"select",options:[{label:"Platform checkout",cost:0},{label:"Custom checkout flow",cost:6000},{label:"Full custom checkout",cost:15000}]},
{id:"hco5",label:"Hosting & Performance",type:"select",options:[{label:"Standard CDN",cost:1000},{label:"Edge computing",cost:3000},{label:"Global edge deployment",cost:6000}]},
{id:"hco6",label:"APIs",type:"select",options:[{label:"Standard APIs",cost:2000},{label:"Custom API layer",cost:6000},{label:"GraphQL federation",cost:12000}]}
]}
];
