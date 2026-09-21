/* VOORUIT premium UI interactions — presentation only. */
(()=>{
  'use strict';
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const enhance=()=>{
    document.documentElement.classList.add('vp-ui-ready');
    document.querySelectorAll('.vp-card,.glass').forEach(card=>{
      card.addEventListener('pointerenter',()=>{if(!reduce)card.classList.add('vp-card-hover')},{passive:true});
      card.addEventListener('pointerleave',()=>card.classList.remove('vp-card-hover'),{passive:true});
    });
    document.querySelectorAll('button').forEach(button=>{
      if(!button.getAttribute('aria-label')&&button.textContent.trim()==='‹')button.setAttribute('aria-label','Terug naar overzicht');
      button.addEventListener('click',()=>{if(!reduce){button.classList.remove('vp-press');void button.offsetWidth;button.classList.add('vp-press')}},{passive:true});
    });
  };
  const observe=()=>new MutationObserver(()=>enhance()).observe(document.body,{childList:true,subtree:true});
  const boot=()=>{enhance();observe()};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
