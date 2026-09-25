'use strict';
const products=[
{id:'tastic',brand:'Tastic',name:'Long Grain Parboiled Rice',pack:'10 × 2 kg',price:31999,units:10,category:'Staples',crop:[73,35,124,150]},
{id:'ace',brand:'Ace',name:'Super Maize Meal',pack:'1 × 10 kg',price:6999,units:1,category:'Staples',crop:[83,345,124,208]},
{id:'selati',brand:'Selati',name:'Golden Brown Sugar',pack:'1 × 5 kg',price:9799,units:1,category:'Staples',crop:[414,244,91,136]},
{id:'koo',brand:'Koo',name:'Baked Beans in Tomato Sauce',pack:'12 × 400 g',price:17499,units:12,category:'Staples',crop:[409,580,80,121]},
{id:'milk',brand:'Parmalat',name:'Everfresh Full Cream Milk',pack:'6 × 1 L',price:9699,units:6,category:'Drinks',crop:[359,1105,125,131]},
{id:'redbull',brand:'Red Bull',name:'Energy Drink · Assorted',pack:'24 × 250 ml',price:36499,units:24,category:'Drinks',crop:[1344,42,64,163]},
{id:'niknaks',brand:'Simba',name:'Nik Naks Bailer',pack:'50 × 20 g',price:4999,units:50,category:'Snacks',crop:[1018,282,119,148]},
{id:'sunlight',brand:'Sunlight',name:'Laundry Soap',pack:'42 × 500 g',price:85999,units:42,category:'Household',crop:[1276,1146,193,92]}
];
const services={
finance:{title:'Business finance',icon:'M3 17l6-6 4 4 8-10M15 5h6v6',intro:'Stock up for your next opportunity.',description:'Working capital to help you buy stock and keep your business moving.',points:['Stock finance for replenishing your shelves','Clear costs and repayment terms before you decide','Applications assessed by a finance provider'],note:'Finance is planned. Provider, eligibility, rates and terms will be confirmed before applications open.'},
devices:{title:'Devices & software',icon:'M7 3h10v18H7zM10 17h4M9 6h6',intro:'The tools to run a smarter shop.',description:'Practical devices and simple software for the everyday work of running a spaza.',points:['Point-of-sale devices for your counter','Stock tracking and low-stock reminders','Sales records to help you understand your business'],note:'Device models, software packages, pricing and support will be confirmed at launch.'},
payments:{title:'Payments',icon:'M3 7h18v13H3zM3 11h18M6 16h4',intro:'More ways for customers to pay.',description:'Make taking payments easier, from your first sale to cashing up.',points:['Card and digital payment options','A clear view of transactions and settlements','Payment tools that work with your point of sale'],note:'Payment providers, transaction fees and settlement times will be confirmed before activation.'},
delivery:{title:'Last-mile delivery',icon:'M2 6h12v12H2zM14 10h4l4 4v4h-8M7 18a2 2 0 1 0 0 .1M18 18a2 2 0 1 0 0 .1',intro:'From the wholesaler to your door.',description:'Spend more time in your shop with stock delivered to your business.',points:['Collection from participating supply points','Delivery to your spaza’s address','Delivery costs and timing confirmed before you order'],note:'Delivery is planned. Coverage, fees and delivery windows still need to be confirmed. Boxer’s current bulk service is collection-based.'}
};
const money=cents=>'R'+(cents/100).toLocaleString('en-ZA',{minimumFractionDigits:2,maximumFractionDigits:2});
function renderProducts(){
 const featured=products.filter(p=>['tastic','ace','milk','niknaks'].includes(p.id));
 document.querySelector('#products').innerHTML=featured.map(p=>{
 const [x,y,w,h]=p.crop,s=Math.min(112/w,130/h),left=(120-w*s)/2,top=(140-h*s)/2;
 const [whole,decimals]=(p.price/100).toFixed(2).split('.');
 return `<article class="product"><div class="product-art"><span class="product-tag">BOXER KZN</span><div class="product-cutout" style="width:${w*s}px;height:${h*s}px" role="img" aria-label="${p.brand} ${p.name}"><img src="assets/boxer-kzn-offers.png" alt="" style="width:${1888*s}px;left:${-x*s}px;top:${-y*s}px" loading="lazy"></div></div><div class="product-body"><div class="brand">${p.brand}</div><h3>${p.name}</h3><p class="pack">${p.pack}</p><div class="product-bottom"><div><div class="price">R${whole}<small>.${decimals}</small></div><div class="unit">${money(Math.round(p.price/p.units))} per unit</div></div><span class="reference-label">Reference<br>offer</span></div></div></article>`;
 }).join('');
}
function openService(key){
 const s=services[key];if(!s)return;
 document.querySelector('#detail-heading').innerHTML=`<div class="eyebrow">COMING TO SPAZA.COOP</div><h2>${s.title}</h2>`;
 document.querySelector('#detail-content').innerHTML=`<p><strong>${s.intro}</strong></p><p>${s.description}</p><ul>${s.points.map(x=>`<li>${x}</li>`).join('')}</ul><div class="basket-info">${s.note}</div><button class="button primary" data-close>Got it</button>`;
 document.querySelector('#detail-dialog').showModal();
}
document.querySelector('#service-cards').innerHTML=Object.entries(services).map(([key,s])=>`<article class="service-card"><span class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${s.icon}"/></svg></span><h3>${s.title}</h3><p>${s.description}</p><button class="text-link" data-service="${key}">Explore service <span>↗</span></button></article>`).join('');
document.addEventListener('click',e=>{
 const close=e.target.closest('[data-close]');if(close)close.closest('dialog').close();
 const service=e.target.closest('[data-service]');if(service){e.preventDefault();openService(service.dataset.service)}
 if(e.target.closest('#view-flyer'))document.querySelector('#flyer-dialog').showModal();
});
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));
renderProducts();