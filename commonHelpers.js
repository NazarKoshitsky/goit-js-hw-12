import{S as F,a as L,i as c}from"./assets/vendor-483db976.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function B(o){return o.hits.map(({webformatURL:t,tags:r,largeImageURL:i,likes:e,views:s,comments:n,downloads:b})=>` <li>
        <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${t}" 
        alt="${r}"
        data-source="${i}">
        <div class="image-info">
                            <ul class="image-info-list">
                                <li class="image-item">
                                    <h2 class="image-text">Likes</h2>
                                    <p class="image-quantity">${e}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Views</h2>
                                    <p class="image-quantity">${s}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Comments</h2>
                                    <p class="image-quantity">${n}</p>
                                </li>
                                <li class="image-item">
                                    <h2 class="image-text">Downloads</h2>
                                    <p class="image-quantity">${b}</p>
                                </li>
                            </ul>
                        </div>
      </li>`).join("")}function q(){return new F(".gallery-link",{captionsData:"alt",captionDelay:250})}const p=15;async function P(o,t){const r=new URLSearchParams({key:"42773289-557706e6fefb377aba1f00ed4",q:o,per_page:p,page:t}),i="https://pixabay.com/api/",e=await L.get(`${i}?${r}`);return{hits:e.data.hits,totalHits:e.data.totalHits}}const g=document.querySelector(".form"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),m=document.querySelector(".load-more");let u,l=1,d="",f=1;g.addEventListener("submit",S);m.addEventListener("click",v);function S(o){o.preventDefault();const t=g.elements.search.value;f=l,t!==d&&(l=1,d=t),y.innerHTML="",a.style.display="block",m.style.display="none",h(t,l),g.reset()}function v(){a.style.display="block",l+=1,l===f+1?h(d,l):console.log("Page was change...")}async function h(o,t){try{const r=await P(o,t);if(o.trim())if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"}),a.style.display="none";return}else{const i=B(r);y.insertAdjacentHTML("beforeend",i),a.style.display="none",u?u.refresh():u=q(),w(),f=t;const e=r.totalHits,s=Math.ceil(e/p);if(t>=s)return m.style.display="none",c.error({position:"topRight",message:"We're sorry, there are no more images to load"});m.style.display="block"}else{c.error({message:"Please search for something",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),a.style.display="none";return}}catch{a.style.display="none",c.error({message:"Fetch error. Please try again later.",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"center"})}}function w(){const o=y.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
