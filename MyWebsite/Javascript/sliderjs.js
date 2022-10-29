var BlazeSlider=function(){"use strict";const t="start",n="no-transition",e="--offset";function s(t){t.el.classList.add(n)}function o(t){t.el.classList.remove(n)}function i(t){t.el.style.setProperty(e,"0")}function c(t){a(t,-1*t.states[t.stateIndex].page[0])}function a(t,n){t.el.style.setProperty(e,n+"")}function l(t,n){t.el.style.setProperty("--dragged",n+"")}const r=()=>"ontouchstart"in window;function u(t,n){t[n]()}function d(t){const n=this,e=n.slider;if(e.isTransitioning)return;let s=0,i=!1;const c="touches"in t?t.touches[0].clientX:t.clientX;function a(t){const n="touches"in t?t.touches[0].clientX:t.clientX;s=n-c,l(e,s),!i&&e.config.loop&&s>10&&(i=!0,u(e,"prev"))}"touches"in t||n.setPointerCapture(t.pointerId),e.el.classList.add("dragging"),e.isDragging=!0;const d=()=>{n.onpointerup=null,n.onpointermove=null,e.el.classList.remove("dragging"),e.isDragging=!1,l(e,0),o(e),i||(s<-10?u(e,"next"):s>10&&u(e,"prev"))};r()?(n.ontouchend=d,n.ontouchmove=a):(n.onpointerup=d,n.oncontextmenu=d,n.onpointermove=a)}const p={slideGap:"20px",slidesToScroll:1,slidesToShow:1,loop:!0,enableAutoplay:!1,stopAutoplayOnInteraction:!0,autoplayInterval:3e3,autoplayDirection:"to left",enablePagination:!0,transitionDuration:500,transitionTimingFunction:"ease"};function f(){const t=this.index,n=this.slider,e=n.stateIndex,s=n.config.loop,o=Math.abs(t-e),i=n.states.length-o,c=o>n.states.length/2&&s;t>e?c?n.prev(i):n.next(o):c?n.next(i):n.prev(o)}function h(t,n=t.config.transitionDuration){t.isTransitioning=!0,setTimeout((()=>{t.isTransitioning=!1}),n)}function g(n,e){const s=n.el.classList,o=n.stateIndex;n.config.loop||(0===o?s.add(t):s.remove(t),o===n.states.length-1?s.add("end"):s.remove("end"));const i=n.paginationButtons;i&&(i[e].classList.remove("active"),i[o].classList.add("active"))}return class extends class{constructor(t,n){this.config=n,this.totalSlides=t,this.stateIndex=0,this.isTransitioning=!1,function(t){const{slidesToScroll:n,slidesToShow:e}=t.config,{totalSlides:s,config:o}=t;if(s<e&&(o.slidesToShow=s),!(s<=e)&&(n>e&&(o.slidesToScroll=e),s<n+e)){const t=s-e;o.slidesToScroll=t}}(this),this.isStatic=t<=n.slidesToShow,this.states=function(t){const{totalSlides:n}=t,{loop:e}=t.config,s=function(t){const{slidesToShow:n,slidesToScroll:e,loop:s}=t.config,{isStatic:o,totalSlides:i}=t,c=[],a=i-1;for(let t=0;t<i;t+=e){const e=t+n-1;if(e>a){if(!s){const t=a-n+1,e=c.length-1;(0===c.length||c.length>0&&c[e][0]!==t)&&c.push([t,a]);break}{const n=e-i;c.push([t,n])}}else c.push([t,e]);if(o)break}return c}(t),o=[],i=s.length-1;for(let t=0;t<s.length;t++){let c,a;e?(c=t===i?0:t+1,a=0===t?i:t-1):(c=t===i?i:t+1,a=0===t?0:t-1);const l=s[t][0],r=s[c][0],u=s[a][0];let d=r-l;r<l&&(d+=n);let p=l-u;u>l&&(p+=n),o.push({page:s[t],next:{stateIndex:c,moveSlides:d},prev:{stateIndex:a,moveSlides:p}})}return o}(this)}next(t=1){if(this.isTransitioning||this.isStatic)return;const{stateIndex:n}=this;let e=0,s=n;for(let n=0;n<t;n++){const t=this.states[s];e+=t.next.moveSlides,s=t.next.stateIndex}return s!==n?(this.stateIndex=s,[n,e]):void 0}prev(t=1){if(this.isTransitioning||this.isStatic)return;const{stateIndex:n}=this;let e=0,s=n;for(let n=0;n<t;n++){const t=this.states[s];e+=t.prev.moveSlides,s=t.prev.stateIndex}return s!==n?(this.stateIndex=s,[n,e]):void 0}}{constructor(n,e){const s=e?function(t){const n={...p};for(const e in t)if(window.matchMedia(e).matches){const s=t[e];for(const t in s)n[t]=s[t]}return n}(e):{...p},o=n.querySelector(".blaze-track"),i=o.children;super(i.length,s),this.config=s,this.el=n,this.track=o,this.slides=i,this.isDragging=!1;const c=this;s.loop||c.el.classList.add(t),s.enableAutoplay&&!s.loop&&(s.enableAutoplay=!1),function(t){const{slidesToShow:n,transitionDuration:e,slideGap:s,transitionTimingFunction:o}=t.config;t.el.style.setProperty("--slides-to-show",n+""),t.el.style.setProperty("--slide-gap",s),t.el.style.setProperty("--transition-duration",e+"ms"),t.el.style.setProperty("--transition-timing-function",o+"")}(c),c.isStatic?c.el.classList.add("static"):function(t){const n=t.track;n.slider=t;const e=r()?"touchstart":"pointerdown";n.addEventListener(e,d)}(c),function(t){if(!t.config.enablePagination||t.isStatic)return;const n=t.el.querySelector(".blaze-pagination");if(!n)return;t.paginationButtons=[];const e=t.states.length;for(let s=0;s<e;s++){const o=document.createElement("button");t.paginationButtons.push(o),o.textContent=1+s+"",o.ariaLabel=`${s+1} of ${e}`,n.append(o),o.slider=t,o.index=s,o.onclick=f}t.paginationButtons[0].classList.add("active")}(c),function(t){const n=t.config;if(!n.enableAutoplay)return;const e="to left"===n.autoplayDirection?"next":"prev",s=setInterval((()=>{t[e]()}),n.autoplayInterval);n.stopAutoplayOnInteraction&&t.el.addEventListener(r()?"touchstart":"mousedown",(()=>{clearInterval(s)}),{once:!0})}(c),function(t){const n=t.el.querySelector(".blaze-prev");n&&(n.onclick=()=>{t.prev()});const e=t.el.querySelector(".blaze-next");e&&(e.onclick=()=>{t.next()})}(c)}next(t){const n=super.next(t);if(!n)return;const[e,l]=n;g(this,e),h(this),function(t,n){const e=requestAnimationFrame;t.config.loop?(a(t,-1*n),setTimeout((()=>{!function(t,n){for(let e=0;e<n;e++)t.track.append(t.slides[0])}(t,n),s(t),e((()=>{i(t),e((()=>{o(t)}))}))}),t.config.transitionDuration)):c(t)}(this,l)}prev(t){const n=super.prev(t);if(!n)return;const[e,l]=n;g(this,e),h(this),function(t,n){const e=requestAnimationFrame;if(t.config.loop){s(t),a(t,-1*n),function(t,n){const e=t.slides.length;for(let s=0;s<n;s++){const n=t.slides[e-1];t.track.prepend(n)}}(t,n);const c=()=>{e((()=>{o(t),e((()=>{i(t)}))}))};t.isDragging?r()?t.track.addEventListener("touchend",c,{once:!0}):t.track.addEventListener("pointerup",c,{once:!0}):e(c)}else c(t)}(this,l)}}}();

const slider = document.querySelector(".blaze-slider");

new BlazeSlider(slider, {
  all: {
    enableAutoplay: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    transitionDuration: 300
  }
});