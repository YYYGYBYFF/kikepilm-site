(function(){
 var data=window.KP; if(!data) return;
 var cur=0, img=document.getElementById('mainimg'), th=document.getElementById('thumbs');
 var priceEl=document.getElementById('price'), noteEl=document.getElementById('pnote'), buy=document.getElementById('buy'), h1=document.getElementById('ptitle');
 function showImg(i){var v=data.v[cur]; img.src=data.p+v.g[i]; [].forEach.call(th.children,function(b,j){b.className=j==i?'on':'';});}
 function setV(i){
  cur=i; var v=data.v[i];
  [].forEach.call(document.querySelectorAll('.chip'),function(c,j){c.className='chip'+(j==i?' on':'');});
  th.innerHTML='';
  v.g.forEach(function(name,j){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label',(j+1)+'');
   var im=document.createElement('img');im.src=data.p+'s/'+name;im.alt='';b.appendChild(im);b.onclick=function(){showImg(j)};th.appendChild(b);});
  showImg(0);
  if(v.pr){priceEl.textContent=v.pr;noteEl.style.display='';buy.textContent=data.t.buy;}
  else{priceEl.textContent=data.t.pm;noteEl.style.display='none';buy.textContent=data.t.va;}
  buy.href=v.u;
  if(h1&&v.t){h1.textContent=v.t;}
  if(history.replaceState){history.replaceState(null,'','#'+v.a);}
 }
 [].forEach.call(document.querySelectorAll('.chip'),function(c,j){c.onclick=function(){setV(j)};});
 var start=0, h=location.hash.slice(1); data.v.forEach(function(v,j){if(v.a==h) start=j;});
 setV(start);
})();
