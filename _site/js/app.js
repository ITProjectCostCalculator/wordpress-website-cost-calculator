/* Home Page — Grid, Search, Filter (no routing, uses <a> links to individual pages) */
(function () {
    'use strict';
    var CATEGORY_LABELS = {
        'web-development': '🌐 Web Development', 'mobile-apps': '📱 Mobile Apps',
        'web-apps-saas': '🖥️ Web Apps & SaaS', 'erp-systems': '🏢 ERP Systems',
        'ecommerce': '🛒 eCommerce', 'ai-data': '🤖 AI & Data',
        'cloud-devops': '☁️ Cloud & DevOps', 'industry-solutions': '🏗️ Industry Solutions'
    };

    function renderGrid(calcs) {
        var grid = document.getElementById('calculator-grid');
        var noRes = document.getElementById('no-results');
        document.getElementById('search-count').textContent = calcs.length + ' calculator' + (calcs.length !== 1 ? 's' : '');
        if (!calcs.length) { grid.innerHTML = ''; noRes.classList.remove('hidden'); return; }
        noRes.classList.add('hidden');
        grid.innerHTML = calcs.map(function(c) {
            var catShort = (CATEGORY_LABELS[c.category] || c.category).replace(/^[^\s]+\s/, '');
            return '<a href="/calculators/' + c.id + '/" class="calc-card" aria-label="Open ' + c.name + '">' +
                '<div class="calc-card-icon">' + c.icon + '</div>' +
                '<div class="calc-card-name">' + c.name + '</div>' +
                '<span class="calc-card-category">' + catShort + '</span>' +
                '<div class="calc-card-arrow">→</div></a>';
        }).join('');
    }

    function getFiltered() {
        var q = (document.getElementById('search-input').value || '').toLowerCase().trim();
        var cat = (document.querySelector('.filter-tab.active') || {}).dataset;
        cat = cat ? cat.category : 'all';
        return CALCULATORS.filter(function(c) {
            var matchCat = cat === 'all' || c.category === cat;
            var matchQ = !q || c.name.toLowerCase().indexOf(q) > -1 || c.category.toLowerCase().indexOf(q) > -1 || (c.description || '').toLowerCase().indexOf(q) > -1;
            return matchCat && matchQ;
        });
    }

    function init() {
        // Check URL params for category pre-filter
        var params = new URLSearchParams(window.location.search);
        var catParam = params.get('cat');
        if (catParam) {
            document.querySelectorAll('.filter-tab').forEach(function(t) {
                t.classList.toggle('active', t.dataset.category === catParam);
            });
        }
        renderGrid(getFiltered());
        document.getElementById('search-input').addEventListener('input', function() { renderGrid(getFiltered()); });
        document.getElementById('filter-tabs').addEventListener('click', function(e) {
            var tab = e.target.closest('.filter-tab');
            if (!tab) return;
            document.querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            renderGrid(getFiltered());
        });
        var mb = document.getElementById('mobile-menu-btn');
        if (mb) mb.addEventListener('click', function() { document.querySelector('.header-nav').classList.toggle('open'); });
    }
    document.addEventListener('DOMContentLoaded', init);
})();
