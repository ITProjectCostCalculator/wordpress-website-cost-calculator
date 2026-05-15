/* build.js — Generates 80 individual calculator HTML pages + sitemap */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE = 'https://itprojectcostcalculator.github.io';
const CATS = {
  'web-development':'🌐 Web Development','mobile-apps':'📱 Mobile Apps',
  'web-apps-saas':'🖥️ Web Apps & SaaS','erp-systems':'🏢 ERP Systems',
  'ecommerce':'🛒 eCommerce','ai-data':'🤖 AI & Data',
  'cloud-devops':'☁️ Cloud & DevOps','industry-solutions':'🏗️ Industry Solutions'
};

// Load calculator data
let allCalcs = [];
for (let i = 1; i <= 6; i++) {
  const code = fs.readFileSync(path.join(ROOT, 'js', `calc-${i}.js`), 'utf8');
  const match = code.match(/var\s+C\d+\s*=\s*(\[[\s\S]*\]);/);
  if (match) {
    try { allCalcs = allCalcs.concat(eval(match[1])); } catch(e) { console.error(`Error parsing calc-${i}.js:`, e.message); }
  }
}
console.log(`Loaded ${allCalcs.length} calculators`);

// Shared modal HTML (share + contact)
const modalsHtml = `
    <div class="modal-overlay hidden" id="share-modal">
        <div class="modal-content share-modal-content">
            <button class="modal-close" id="share-modal-close">&times;</button>
            <h2 class="modal-title">Share Your Estimate</h2>
            <div class="share-summary" id="share-summary"></div>
            <div class="share-buttons">
                <button class="share-btn share-pdf" id="share-pdf">📄 Download PDF</button>
                <button class="share-btn share-whatsapp" id="share-whatsapp">💬 WhatsApp</button>
                <button class="share-btn share-linkedin" id="share-linkedin">💼 LinkedIn</button>
                <button class="share-btn share-facebook" id="share-facebook">👤 Facebook</button>
                <button class="share-btn share-twitter" id="share-twitter">🐦 X / Twitter</button>
                <button class="share-btn share-email" id="share-email">✉️ Email</button>
                <button class="share-btn share-copy" id="share-copy">📋 Copy Link</button>
            </div>
        </div>
    </div>
    <div class="modal-overlay hidden" id="contact-modal">
        <div class="modal-content contact-modal-content">
            <button class="modal-close" id="contact-modal-close">&times;</button>
            <h2 class="modal-title">Get an Exact Quote</h2>
            <p class="modal-subtitle">Our team will review your requirements and provide a detailed proposal.</p>
            <div class="contact-estimate-summary" id="contact-estimate-summary"></div>
            <form id="contact-form" class="contact-form">
                <div class="form-row"><div class="form-group"><label for="contact-name">Full Name <span class="req">*</span></label><input type="text" id="contact-name" name="name" required placeholder="John Doe"></div><div class="form-group"><label for="contact-email">Email <span class="req">*</span></label><input type="email" id="contact-email" name="email" required placeholder="john@company.com"></div></div>
                <div class="form-row"><div class="form-group"><label for="contact-phone">Phone</label><input type="tel" id="contact-phone" name="phone" placeholder="+1 (555) 000-0000"></div><div class="form-group"><label for="contact-country">Country <span class="req">*</span></label><input type="text" id="contact-country" name="country" required placeholder="United States"></div></div>
                <div class="form-row"><div class="form-group"><label for="contact-pincode">Pin / Zip Code</label><input type="text" id="contact-pincode" name="pincode" placeholder="10001"></div><div class="form-group"><label for="contact-company">Company</label><input type="text" id="contact-company" name="company" placeholder="Acme Corp"></div></div>
                <div class="form-group full-width"><label for="contact-message">Project Details <span class="req">*</span></label><textarea id="contact-message" name="message" rows="4" required placeholder="Describe your project requirements..."></textarea></div>
                <input type="hidden" id="contact-calculator" name="calculator"><input type="hidden" id="contact-estimate" name="estimate"><input type="hidden" id="contact-selections" name="selections">
                <button type="submit" class="btn btn-primary btn-full">📩 Send Quote Request</button>
            </form>
        </div>
    </div>`;

function esc(s) { return s.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escJson(s) { return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n'); }

function generatePage(calc) {
  const catLabel = (CATS[calc.category] || calc.category).replace(/^[^\s]+\s/, '');
  const title = `${calc.name} | IT Project Cost Calculator`;
  const desc = `${calc.description} Free instant estimate tool — get a realistic USD budget range for your ${catLabel.toLowerCase()} project.`;
  const url = `${SITE}/calculators/${calc.id}/`;
  const dataJson = JSON.stringify(calc);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc.slice(0,160))}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
    <link rel="canonical" href="${url}">
    <meta property="og:title" content="${esc(calc.name)}">
    <meta property="og:description" content="${esc(desc.slice(0,160))}">
    <meta property="og:url" content="${url}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="IT Project Cost Calculator">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${esc(calc.name)}">
    <meta name="twitter:description" content="${esc(desc.slice(0,160))}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>
    <script type="application/ld+json">
    {"@context":"https://schema.org","@graph":[
      {"@type":"WebPage","@id":"${url}#webpage","url":"${url}","name":"${escJson(calc.name)}","description":"${escJson(desc.slice(0,160))}","isPartOf":{"@id":"${SITE}/#website"},"breadcrumb":{"@id":"${url}#breadcrumb"},"inLanguage":"en-US"},
      {"@type":"WebSite","@id":"${SITE}/#website","url":"${SITE}/","name":"IT Project Cost Calculator","description":"Free IT project cost calculators for 80+ project types.","inLanguage":"en-US"},
      {"@type":"BreadcrumbList","@id":"${url}#breadcrumb","itemListElement":[
        {"@type":"ListItem","position":1,"name":"Home","item":"${SITE}/"},
        {"@type":"ListItem","position":2,"name":"${escJson(catLabel)}","item":"${SITE}/?cat=${calc.category}"},
        {"@type":"ListItem","position":3,"name":"${escJson(calc.name)}","item":"${url}"}
      ]}
    ]}
    </script>
</head>
<body>
    <header id="site-header">
        <div class="header-inner">
            <a href="/" class="logo"><span class="logo-icon">⚡</span><span class="logo-text">IT Project Cost Calculator</span></a>
            <nav class="header-nav">
                <a href="/" class="nav-link" id="nav-home">All Calculators</a>
                <a href="#contact" class="nav-link btn-nav-cta" id="nav-contact">Get a Quote</a>
            </nav>
            <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
    </header>
    <main id="calculator-view">
        <div class="calc-header-bar">
            <a href="/" class="back-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg> All Calculators</a>
            <div class="calc-breadcrumb"><a href="/">Home</a> <span>›</span> <a href="/?cat=${calc.category}">${catLabel}</a> <span>›</span> <span>${esc(calc.name)}</span></div>
        </div>
        <div class="calc-layout">
            <div class="calc-form-panel">
                <div class="calc-title-block">
                    <span class="calc-icon">${calc.icon}</span>
                    <div>
                        <h1 class="calc-title">${esc(calc.name)}</h1>
                        <p class="calc-desc">${esc(calc.description)}</p>
                    </div>
                </div>
                <form id="calc-form" class="calc-form"></form>
            </div>
            <div class="calc-results-panel">
                <div class="results-card" id="results-card">
                    <div class="results-label">Estimated Project Cost</div>
                    <div class="results-amount" id="results-amount">$0 — $0</div>
                    <div class="results-note">Estimated range based on your selections</div>
                    <div class="results-breakdown" id="results-breakdown"></div>
                    <div class="results-actions">
                        <button type="button" class="btn btn-primary" id="btn-share">📤 Share Estimate</button>
                        <button type="button" class="btn btn-accent" id="btn-quote">💬 Get Exact Quote</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    ${modalsHtml}
    <footer id="site-footer"><div class="footer-inner"><div class="footer-brand"><span class="logo-icon">⚡</span> IT Project Cost Calculator</div><p class="footer-note">Free estimation tool for IT project budgeting. All estimates are approximate ranges based on industry standards.</p><p class="footer-copy">&copy; 2025 IT Project Cost Calculator. All rights reserved.</p></div></footer>
    <script>var CALC_DATA=${dataJson};</script>
    <script src="/js/calc-engine.js"></script>
</body>
</html>`;
}

// Generate all pages
let count = 0;
allCalcs.forEach(calc => {
  const dir = path.join(ROOT, 'calculators', calc.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generatePage(calc), 'utf8');
  count++;
});
console.log(`Generated ${count} calculator pages`);

// Generate sitemap.xml
const today = new Date().toISOString().split('T')[0];
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
sitemap += `  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n`;
allCalcs.forEach(c => {
  sitemap += `  <url><loc>${SITE}/calculators/${c.id}/</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
});
sitemap += '</urlset>';
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log('Generated sitemap.xml');

// Generate robots.txt
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
console.log('Generated robots.txt');
console.log('Build complete!');
