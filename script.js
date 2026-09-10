const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
document.querySelectorAll('.logo').forEach(logo=>{logo.innerHTML='<img class="brand-logo" src="assets/logo.png" alt="SHIFT Healing Center">';});
// A clickable YouTube preview is reliable in local files, Live Server and the final hosted site.
// Replace this single video ID when the clinic's final video is ready.
const frame=document.querySelector('.video-wrap iframe');
if(frame){
  const videoId='M7lc1UVf-VE';
  const url=`https://www.youtube.com/watch?v=${videoId}`;
  frame.outerHTML=`<a class="video-fallback" href="${url}" target="_blank" rel="noopener" aria-label="Watch the video on YouTube"><img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="Video preview"><span class="video-fallback-play">▶</span><strong>Watch video on YouTube</strong></a>`;
}
toggle?.addEventListener('click',()=>{links.classList.toggle('open');toggle.setAttribute('aria-expanded',links.classList.contains('open'));});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

// Turn every What We Treat entry into a compact, accessible disclosure.
document.querySelectorAll('.treatment-list article').forEach((card,index)=>{
  const heading=card.querySelector('h2');
  if(!heading)return;
  const body=document.createElement('div');
  body.className='treatment-body';
  while(heading.nextSibling)body.appendChild(heading.nextSibling);
  const trigger=document.createElement('button');
  trigger.className='treatment-trigger';
  trigger.type='button';
  trigger.setAttribute('aria-expanded','false');
  trigger.setAttribute('aria-controls',`treatment-panel-${index}`);
  body.id=`treatment-panel-${index}`;
  body.hidden=true;
  const mark=document.createElement('span');
  mark.className='treatment-mark';
  mark.setAttribute('aria-hidden','true');
  mark.textContent='+';
  trigger.append(heading,mark);
  card.append(trigger,body);
  trigger.addEventListener('click',()=>{
    const open=trigger.getAttribute('aria-expanded')==='true';
    trigger.setAttribute('aria-expanded',String(!open));
    body.hidden=open;
    card.classList.toggle('open',!open);
  });
});

// Design preview controls: the iPhone preview becomes a dedicated full-screen stage.
if(window.self===window.top){
  const controls=document.createElement('div');
  controls.className='preview-switcher';
  controls.innerHTML='<button class="active" type="button" data-preview="laptop">▱ Laptop</button><button type="button" data-preview="iphone">▯ iPhone</button>';
  document.body.appendChild(controls);
  let preview;
  controls.addEventListener('click',event=>{
    const button=event.target.closest('button');
    if(!button)return;
    controls.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));
    if(button.dataset.preview==='iphone'){
      if(!preview){preview=document.createElement('div');preview.className='device-preview';preview.innerHTML=`<div class="phone-shell"><iframe title="iPhone page preview" src="${location.href}"></iframe></div>`;document.body.appendChild(preview);document.body.classList.add('preview-open');}
    }else{preview?.remove();preview=null;document.body.classList.remove('preview-open');}
  });
}
