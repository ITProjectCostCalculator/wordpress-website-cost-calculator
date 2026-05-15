/* Calculator Page Engine — runs on individual calculator pages */
(function(){
'use strict';
var SITE='https://itprojectcostcalculator.github.io';
var EMAIL='nilesh.shivlab@gmail.com';
var calc=window.CALC_DATA;
var cost={low:0,high:0,total:0,breakdown:[]};
var CATS={'web-development':'Web Development','mobile-apps':'Mobile Apps','web-apps-saas':'Web Apps & SaaS','erp-systems':'ERP Systems','ecommerce':'eCommerce','ai-data':'AI & Data','cloud-devops':'Cloud & DevOps','industry-solutions':'Industry Solutions'};

function fmt(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')}

function renderForm(){
var f=document.getElementById('calc-form');
f.innerHTML=calc.inputs.map(function(inp){
if(inp.type==='select')return selHtml(inp);
if(inp.type==='checkbox')return cbHtml(inp);
if(inp.type==='range')return rangeHtml(inp);
if(inp.type==='number')return numHtml(inp);
return '';
}).join('');
f.querySelectorAll('select,input').forEach(function(el){
el.addEventListener('change',calcCost);
el.addEventListener('input',function(e){
if(e.target.type==='range'){var d=e.target.closest('.form-field').querySelector('.range-value');if(d)d.textContent=e.target.value;}
calcCost();
});
});
f.querySelectorAll('.checkbox-item').forEach(function(item){
item.addEventListener('click',function(e){if(e.target.tagName==='INPUT')return;var cb=item.querySelector('input[type="checkbox"]');cb.checked=!cb.checked;item.classList.toggle('checked',cb.checked);calcCost();});
item.querySelector('input').addEventListener('change',function(){item.classList.toggle('checked',item.querySelector('input').checked);calcCost();});
});
}

function selHtml(inp){
var opts=inp.options.map(function(o,i){return '<option value="'+i+'"'+(i===0?' selected':'')+'>'+o.label+'</option>';}).join('');
return '<div class="form-field"><label for="'+inp.id+'">'+inp.label+'</label><select id="'+inp.id+'" name="'+inp.id+'">'+opts+'</select></div>';
}
function cbHtml(inp){
var items=inp.options.map(function(o,i){return '<label class="checkbox-item"><input type="checkbox" name="'+inp.id+'" value="'+i+'"><span>'+o.label+'</span><span class="cb-cost">+$'+fmt(o.cost)+'</span></label>';}).join('');
return '<div class="form-field"><label>'+inp.label+'</label><div class="checkbox-group">'+items+'</div></div>';
}
function rangeHtml(inp){
return '<div class="form-field"><label>'+inp.label+'</label><div class="range-wrap"><div class="range-header"><span>'+inp.min+' — '+inp.max+'</span><span class="range-value">'+(inp.default||inp.min)+'</span></div><input type="range" id="'+inp.id+'" name="'+inp.id+'" min="'+inp.min+'" max="'+inp.max+'" step="'+(inp.step||1)+'" value="'+(inp.default||inp.min)+'"></div></div>';
}
function numHtml(inp){
return '<div class="form-field"><label for="'+inp.id+'">'+inp.label+'</label><input type="number" id="'+inp.id+'" name="'+inp.id+'" min="'+(inp.min||0)+'" max="'+(inp.max||9999)+'" value="'+(inp.default||inp.min||1)+'" step="'+(inp.step||1)+'"></div>';
}

function calcCost(){
var total=0,bd=[];
calc.inputs.forEach(function(inp){
if(inp.type==='select'){var el=document.getElementById(inp.id);if(!el)return;var opt=inp.options[parseInt(el.value)];if(opt){total+=opt.cost;bd.push({label:inp.label,detail:opt.label,cost:opt.cost});}}
else if(inp.type==='checkbox'){document.querySelectorAll('input[name="'+inp.id+'"]:checked').forEach(function(cb){var opt=inp.options[parseInt(cb.value)];if(opt){total+=opt.cost;bd.push({label:opt.label,detail:'',cost:opt.cost});}});}
else if(inp.type==='range'||inp.type==='number'){var el=document.getElementById(inp.id);if(!el)return;var val=parseFloat(el.value)||0;var c=val*(inp.costPerUnit||0);total+=c;bd.push({label:inp.label,detail:val+' '+(inp.unit||'units'),cost:c});}
});
cost={low:Math.round(total*0.8),high:Math.round(total*1.3),total:Math.round(total),breakdown:bd};
document.getElementById('results-amount').textContent='$'+fmt(cost.low)+' — $'+fmt(cost.high);
document.getElementById('results-breakdown').innerHTML=bd.map(function(b){return '<div class="breakdown-item"><span class="bi-label">'+b.label+'</span><span class="bi-value">$'+fmt(b.cost)+'</span></div>';}).join('');
}

function shareText(){return calc.name+'\nEstimated Cost: $'+fmt(cost.low)+' – $'+fmt(cost.high)+' USD\n\nBreakdown:\n'+cost.breakdown.map(function(b){return '• '+b.label+': $'+fmt(b.cost);}).join('\n')+'\n\nCalculated at: '+SITE+'/calculators/'+calc.id+'/';}
function shareUrl(){return SITE+'/calculators/'+calc.id+'/';}

function genPDF(){
if(typeof window.jspdf==='undefined'){alert('PDF loading, try again.');return;}
var doc=new window.jspdf.jsPDF();var m=20,y=m;
doc.setFont('helvetica','bold');doc.setFontSize(18);doc.setTextColor(40,40,60);doc.text('IT Project Cost Estimate',m,y);y+=12;
doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(100);doc.text('Generated on '+new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}),m,y);y+=16;
doc.setDrawColor(108,99,255);doc.setLineWidth(0.5);doc.line(m,y,190,y);y+=12;
doc.setFont('helvetica','bold');doc.setFontSize(14);doc.setTextColor(40,40,60);doc.text(calc.name,m,y);y+=8;
doc.setFont('helvetica','normal');doc.setFontSize(10);doc.setTextColor(100);var dl=doc.splitTextToSize(calc.description,170);doc.text(dl,m,y);y+=dl.length*5+10;
doc.setFont('helvetica','bold');doc.setFontSize(16);doc.setTextColor(108,99,255);doc.text('Estimated Cost: $'+fmt(cost.low)+' - $'+fmt(cost.high)+' USD',m,y);y+=14;
doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor(40,40,60);doc.text('Cost Breakdown',m,y);y+=8;
doc.setFont('helvetica','normal');doc.setFontSize(10);
cost.breakdown.forEach(function(b){if(y>270){doc.addPage();y=m;}doc.setTextColor(80);doc.text(b.label+(b.detail?' ('+b.detail+')':''),m,y);doc.setTextColor(40);doc.text('$'+fmt(b.cost),160,y,{align:'right'});y+=6;});
y+=6;doc.setDrawColor(200);doc.line(m,y,190,y);y+=8;
doc.setFont('helvetica','bold');doc.text('Base Total:',m,y);doc.text('$'+fmt(cost.total),160,y,{align:'right'});y+=20;
doc.setFont('helvetica','italic');doc.setFontSize(9);doc.setTextColor(150);doc.text('This is an estimated range. Actual costs may vary.',m,y);y+=5;doc.text('Get an exact quote at: '+SITE,m,y);
doc.save(calc.id+'-cost-estimate.pdf');
}

function closeModals(){document.querySelectorAll('.modal-overlay').forEach(function(m){m.classList.remove('show');setTimeout(function(){m.classList.add('hidden');},300);});}

function init(){
renderForm();calcCost();
document.getElementById('btn-share').addEventListener('click',function(){
var modal=document.getElementById('share-modal');
document.getElementById('share-summary').innerHTML='<strong>'+calc.name+'</strong>Estimated cost: $'+fmt(cost.low)+' — $'+fmt(cost.high)+' USD';
modal.classList.remove('hidden');requestAnimationFrame(function(){modal.classList.add('show');});
});
document.getElementById('share-modal-close').addEventListener('click',closeModals);
document.getElementById('share-modal').addEventListener('click',function(e){if(e.target===e.currentTarget)closeModals();});
document.getElementById('share-pdf').addEventListener('click',genPDF);
document.getElementById('share-whatsapp').addEventListener('click',function(){window.open('https://wa.me/?text='+encodeURIComponent(shareText()),'_blank');});
document.getElementById('share-linkedin').addEventListener('click',function(){window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(shareUrl()),'_blank');});
document.getElementById('share-facebook').addEventListener('click',function(){window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(shareUrl()),'_blank');});
document.getElementById('share-twitter').addEventListener('click',function(){window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(shareText()),'_blank');});
document.getElementById('share-email').addEventListener('click',function(){window.open('mailto:?subject='+encodeURIComponent(calc.name+' - Cost Estimate')+'&body='+encodeURIComponent(shareText()),'_self');});
document.getElementById('share-copy').addEventListener('click',function(){navigator.clipboard.writeText(shareText()).then(function(){var b=document.getElementById('share-copy');b.textContent='✓ Copied!';setTimeout(function(){b.innerHTML='📋 Copy Link';},2000);});});
document.getElementById('btn-quote').addEventListener('click',function(){
var modal=document.getElementById('contact-modal');
var sel=cost.breakdown.map(function(b){return b.label+': '+(b.detail||'')+' ($'+fmt(b.cost)+')';}).join(' | ');
document.getElementById('contact-estimate-summary').innerHTML='<strong>'+calc.name+'</strong><br>Estimated: $'+fmt(cost.low)+' — $'+fmt(cost.high)+' USD';
document.getElementById('contact-calculator').value=calc.name;
document.getElementById('contact-estimate').value='$'+fmt(cost.low)+' - $'+fmt(cost.high);
document.getElementById('contact-selections').value=sel;
modal.classList.remove('hidden');requestAnimationFrame(function(){modal.classList.add('show');});
});
document.getElementById('nav-contact').addEventListener('click',function(e){e.preventDefault();document.getElementById('btn-quote').click();});
document.getElementById('contact-modal-close').addEventListener('click',closeModals);
document.getElementById('contact-modal').addEventListener('click',function(e){if(e.target===e.currentTarget)closeModals();});
document.getElementById('contact-form').addEventListener('submit',function(e){
e.preventDefault();var fd=new FormData(e.target);var d=Object.fromEntries(fd);
var subj=encodeURIComponent('Quote Request: '+(d.calculator||'IT Project'));
var body=encodeURIComponent('Name: '+d.name+'\nEmail: '+d.email+'\nPhone: '+(d.phone||'N/A')+'\nCountry: '+d.country+'\nPin Code: '+(d.pincode||'N/A')+'\nCompany: '+(d.company||'N/A')+'\n\n--- Project Details ---\nCalculator: '+(d.calculator||'General')+'\nEstimated Budget: '+(d.estimate||'N/A')+'\nSelections: '+(d.selections||'N/A')+'\n\nMessage:\n'+d.message+'\n\n---\nSent from IT Project Cost Calculator\n'+SITE);
window.open('mailto:'+EMAIL+'?subject='+subj+'&body='+body,'_self');closeModals();
});
var mb=document.getElementById('mobile-menu-btn');if(mb)mb.addEventListener('click',function(){document.querySelector('.header-nav').classList.toggle('open');});
}
document.addEventListener('DOMContentLoaded',init);
})();
