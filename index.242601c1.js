!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,o;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return o}),(function(t){return o=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var o={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=o[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),o[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.242601c1.js","1sXxD":"noimage.2ec20c5a.jpg"}')),function(){var t={openModalBtn:document.querySelector("[data-modal-open-team]"),closeModalBtn:document.querySelector("[data-modal-close-team]"),modal:document.querySelector("[data-modal-team]")};function e(){event.preventDefault(),t.modal.classList.toggle("is-hidden")}t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e)}();var a={watchedBtn:document.querySelector(".watched"),queueBtn:document.querySelector(".queue"),adwBtn:document.querySelector(".adw"),atqBtn:document.querySelector(".atq"),gokBtn:document.querySelector(".gok")},c="films",u="queue",s=-1,l=-1;try{localStorage.getItem(c)||localStorage.setItem(c,JSON.stringify([])),localStorage.getItem(u)||localStorage.setItem(u,JSON.stringify([]))}catch(t){console.log(t)}function d(t,e,n,r){var o=[];try{o=JSON.parse(localStorage.getItem(e))}catch(t){console.log(t)}if(o.length){var i=o.findIndex((function(e){return e.id===t.id}));return i>-1?(console.log("Фільм знаходиться в збережених у памяті кнопка remove під номером - ",i),n.innerText="REMOVE TO "+r,i):(console.log("Фільма немає в збережених у памяті кнопка add to watch"),n.innerText="ADD TO "+r,-1)}return console.log("Список фільмів збережених у памяті пустий кнопка add to watch"),n.innerText="ADD TO "+r,0}function f(t,e,n,r){try{var o=JSON.parse(localStorage.getItem(e));o.push(t),localStorage.setItem(e,JSON.stringify(o)),console.log("фільм додано"),n.innerText="REMOVE TO "+r}catch(t){console.log(t)}}function h(t,e,n,r){try{var o=JSON.parse(localStorage.getItem(e));o.splice(t,1),localStorage.setItem(e,JSON.stringify(o)),console.log("фільм видалено"),n.innerText="ADD TO "+r}catch(t){console.log(t)}}function g(t){try{return JSON.parse(localStorage.getItem(t))}catch(t){console.log(t)}}function g(t){try{return JSON.parse(localStorage.getItem(t))}catch(t){console.log(t)}}a.adwBtn.addEventListener("click",(function(){var t=a.adwBtn.innerText;console.log(t),"ADD TO WATCHED"===t?f(films[0],c,a.adwBtn,"WATCHED"):h(s,c,a.adwBtn,"WATCHED")})),a.watchedBtn.addEventListener("click",(function(){g(c)})),a.queueBtn.addEventListener("click",(function(){g(u)})),a.atqBtn.addEventListener("click",(function(){var t=a.atqBtn.innerText;console.log(t),"ADD TO QUEUE"===t?f(films[0],u,a.atqBtn,"QUEUE"):h(l,u,a.atqBtn,"QUEUE")})),a.gokBtn.addEventListener("click",(function(){console.log("Рандомний фільм",films[0]),s=d(films[0],c,a.adwBtn,"WATCHED"),l=d(films[0],u,a.atqBtn,"QUEUE")}));var p,m=i("l5bVx"),y=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,x=/^0o[0-7]+$/i,_=parseInt,b="object"==typeof n&&n&&n.Object===Object&&n,S="object"==typeof self&&self&&self.Object===Object&&self,E=b||S||Function("return this")(),q=Object.prototype.toString,T=Math.max,k=Math.min,L=function(){return E.Date.now()};function O(t){var n=void 0===t?"undefined":e(m)(t);return!!t&&("object"==n||"function"==n)}function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(m)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==q.call(t)}(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(y,"");var r=C.test(t);return r||x.test(t)?_(t.slice(2),r?2:8):v.test(t)?NaN:+t}p=function(t,e,n){var r,o,i,a,c,u,s=0,l=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=r,i=o;return r=o=void 0,s=e,a=t.apply(i,n)}function g(t){return s=t,c=setTimeout(m,e),l?h(t):a}function p(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-s>=i}function m(){var t=L();if(p(t))return y(t);c=setTimeout(m,function(t){var n=e-(t-u);return d?k(n,i-(t-s)):n}(t))}function y(t){return c=void 0,f&&r?h(t):(r=o=void 0,a)}function v(){var t=L(),n=p(t);if(r=arguments,o=this,u=t,n){if(void 0===c)return g(u);if(d)return c=setTimeout(m,e),h(u)}return void 0===c&&(c=setTimeout(m,e)),a}return e=M(e)||0,O(n)&&(l=!!n.leading,i=(d="maxWait"in n)?T(M(n.maxWait)||0,e):i,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},v.flush=function(){return void 0===c?a:y(L())},v};var B,w=i("8MBJY"),j=i("a2hTj"),D=i("dDDEV");B=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("1sXxD");var N="2f8d6050c74d5f454a522d74a8cedbb8",U="https://api.themoviedb.org/3",I=function(){"use strict";function t(){e(w)(this,t),this.searchQuery="",this.page=1,this.maxPage=1}return e(j)(t,[{key:"fetchPopularMoviesMaxPage",value:function(){return fetch("".concat(U,"/trending/movie/day?api_key=").concat(N,"&language=en-US")).then((function(t){return t.json()}))}},{key:"fetchPopularMovies",value:function(){var t=this,n="".concat(U,"/trending/movie/day?api_key=").concat(N,"&language=en-US&page=").concat(this.page);return fetch(n).then((function(t){return t.json()})).then((function(n){var r=n.results,o=t;return t.fetchFilmGenre().then((function(t){var n=o;return r.map((function(r){return e(D)({},r,{release_date:r.release_date?r.release_date.split("-")[0]:r.release_date,genres:n.filterGenres(t,r),poster_path:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):e(B)})}))}))}))}},{key:"filterGenres",value:function(t,e){var n=e.genre_ids.map((function(e){return t.filter((function(t){return t.id===e})).map((function(t){return t.name}))})).flat();return 2===n.length&&(n=["".concat(n[0],", ").concat(n[1])]),n.length>2&&(n="".concat(n[0],", ").concat(n[1],", Other")),n}},{key:"filterGenresLib",value:function(t){var e=t.genres.map((function(t){return t.name})).flat();return 2===e.length&&(e=["".concat(e[0],", ").concat(e[1])]),e.length>2&&(e="".concat(e[0],", ").concat(e[1],", Other")),e}},{key:"fetchSearchMovies",value:function(){var t=this,n="".concat(U,"/search/movie?api_key=").concat(N,"&language=en-US&page=").concat(this.page,"&query=").concat(this.searchQuery);return fetch(n).then((function(t){return t.json()})).then((function(n){var r=n.results,o=t;return t.fetchFilmGenre().then((function(t){var n=o;return r.map((function(r){return e(D)({},r,{release_date:r.release_date?r.release_date.split("-")[0]:r.release_date,genres:n.filterGenres(t,r),poster_path:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):e(B)})}))}))}))}},{key:"fetchFilmByID",value:function(t){var n=this,r="".concat(U,"/movie/").concat(t,"?api_key=").concat(N,"&language=en-US");return fetch(r).then((function(t){return t.json()})).then((function(t){return e(D)({},t,{release_date:t.release_date?t.release_date.split("-")[0]:t.release_date,genres:n.filterGenresLib(t),poster_path:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):e(B)})}))}},{key:"fetchFilmGenre",value:function(){var t="".concat(U,"/genre/movie/list?api_key=").concat(N,"&language=en-US");return fetch(t).then((function(t){return t.json()})).then((function(t){return t.genres}))}},{key:"fetchPopularMoviesPages",value:function(){var t="".concat(U,"/trending/movie/day?api_key=").concat(N,"&language=en-US&page=").concat(this.page);return fetch(t).then((function(t){return t.json()}))}},{key:"fetchSearchMoviesPages",value:function(){var t="".concat(U,"/trending/movie/day?api_key=").concat(N,"&language=en-US&page=").concat(this.page,"&query=").concat(this.searchQuery);return fetch(t).then((function(t){return t.json()}))}},{key:"fetchTrailers",value:function(t){var e="".concat("https://youtube.googleapis.com/youtube/v3/search?part=snippet","&q=").concat(t,' + "trailer"&key=').concat("AIzaSyBsjU_AyffyMHxyv2KNKiEnDPB3n0dY8XE");return fetch(e).then((function(t){return t.json()})).then((function(t){return t.items[0].id.videoId}))}},{key:"pageNum",get:function(){return this.page},set:function(t){this.page=t}},{key:"resetPageNum",value:function(){return this.page=1}},{key:"maxPageNum",get:function(){return this.maxPage},set:function(t){this.maxPage=t}},{key:"query",get:function(){return this.searchQuery},set:function(t){this.searchQuery=t}}]),t}(),A=document.querySelector(".js-spinner");function P(){A.classList.add("is-open")}function H(){setTimeout((function(){A.classList.remove("is-open")}),300)}var R={searchError:document.querySelector(".header__error-text"),emptyGalleryText:document.querySelector(".info-notify-text"),emptyGalleryImg:document.querySelector(".info-notify")};function G(t){R.emptyGalleryText.textContent="".concat(t),R.emptyGalleryImg.classList.remove("is-hidden")}function J(){R.emptyGalleryImg.classList.add("is-hidden")}var Q=new I,F={gallery:document.querySelector(".js-gallery"),search:document.querySelector(".header__form-input"),pagination:document.querySelector(".pagination")};function V(){z(),J(),ot(),P(),Q.fetchPopularMovies().then($).catch(console.log).finally(H)}function W(){J(),P(),Q.fetchSearchMovies().then((function(t){0===t.length?(R.searchError.classList.remove("is-hidden"),setTimeout((function(){return R.searchError.classList.add("is-hidden")}),2500),G("Film not found"),X()):$(t)})).catch(console.log).finally(H)}function $(t){F.gallery.insertAdjacentHTML("beforeend",cardTpl(t))}function z(){F.gallery.innerHTML=""}function X(){document.querySelectorAll(".film-average").forEach((function(t){return t.classList.remove("is-hidden")})),document.querySelectorAll(".card-delete-btn").forEach((function(t){return t.classList.remove("is-hidden")})),F.pagination.classList.add("is-hidden")}V(),F.search.addEventListener("input",e(p)((function(t){Q.query=t.target.value,z(),it(),Q.resetPageNum(),F.pagination.classList.remove("is-hidden"),Q.query?(ot(),W()):V()}),1e3)),F.search.addEventListener("keydown",(function(t){if("Enter"===t.code||13===t.keyCode)return void t.preventDefault()}));var K="2f8d6050c74d5f454a522d74a8cedbb8",Y="https://api.themoviedb.org/3",Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e="".concat(Y,"/trending/movie/day?api_key=").concat(K,"&language=en-US&page=").concat(t),n="".concat(Y,"/search/movie?api_key=").concat(K,"&language=en-US&page=").concat(t,"&query=").concat(Q.searchQuery),r=Q.searchQuery?n:e;return fetch(r).then((function(t){return t.json()})).then((function(t){return t.total_pages}))},tt={dec:document.querySelector("#dec"),inc:document.querySelector("#inc"),page_numbers:document.querySelectorAll(".pag_text"),page_items:document.querySelectorAll(".pag_item"),pageMax:document.querySelector(".last_page"),dotsLeft:document.querySelector('[data-dots="left"]'),dotsRigth:document.querySelector('[data-dots="rigth"]'),middleBtn:document.querySelector("#l3"),btn4:document.querySelector("#l4"),btn2:document.querySelector("#l2"),pageFirst:document.querySelector(".first_page")};function et(){tt.page_items.forEach((function(t){return t.classList.remove("pag_item__current")}))}function nt(t){t.classList.add("is-hidden")}function rt(t){t.classList.remove("is-hidden")}function ot(){Z().then((function(t){return tt.pageMax.firstChild.textContent=t}))}function it(){rt(tt.dotsRigth),tt.btn2.firstChild.textContent="2",tt.middleBtn.firstChild.textContent="3",tt.btn4.firstChild.textContent="4",nt(tt.dotsLeft),et(),tt.pageFirst.classList.add("pag_item__current")}tt.inc.addEventListener("click",(function(){Z().then((function(t){+tt.page_numbers[4].textContent!==t?(1==tt.dec.disabled&&(tt.dec.disabled=!1),tt.page_items.forEach((function(t){1!=+t.firstChild.textContent&&"..."!==t.firstChild.textContent&&t.firstChild.textContent!==tt.pageMax.firstChild.textContent&&t.firstChild.textContent++}))):tt.inc.disabled=!0}))})),tt.dec.addEventListener("click",(function(){"1"!==tt.page_numbers[0].textContent?(1==tt.inc.disabled&&(tt.inc.disabled=!1),tt.page_numbers.forEach((function(t){t.textContent=+t.textContent-1}))):tt.dec.disabled=!0})),tt.page_items.forEach((function(t){t.addEventListener("click",(function(e){Q.pageNum=t.firstChild.textContent,et(),"..."!==t.firstChild.textContent&&(setTimeout((function(){t.firstChild.textContent,tt.page_items.forEach((function(t){+Q.pageNum==+t.firstChild.textContent&&t.classList.add("pag_item__current")}))}),300),e.currentTarget===tt.btn4&&(tt.page_items.forEach((function(t){1!=+t.firstChild.textContent&&"..."!==t.firstChild.textContent&&t.firstChild.textContent!==tt.pageMax.firstChild.textContent&&t.firstChild.textContent++})),rt(tt.dotsLeft)),e.currentTarget===tt.btn2&&3==+t.firstChild.textContent&&(tt.page_items.forEach((function(t){1!=+t.firstChild.textContent&&"..."!==t.firstChild.textContent&&t.firstChild.textContent!==tt.pageMax.firstChild.textContent&&t.firstChild.textContent--})),nt(tt.dotsLeft)),e.currentTarget===tt.btn2&&+t.firstChild.textContent>3&&tt.page_items.forEach((function(t){1!=+t.firstChild.textContent&&"..."!==t.firstChild.textContent&&t.firstChild.textContent!==tt.pageMax.firstChild.textContent&&t.firstChild.textContent--})),1==+t.firstChild.textContent&&(rt(tt.dotsRigth),tt.btn2.firstChild.textContent="2",tt.middleBtn.firstChild.textContent="3",tt.btn4.firstChild.textContent="4",nt(tt.dotsLeft)),t.firstChild.textContent===tt.pageMax.firstChild.textContent&&(rt(tt.dotsLeft),tt.btn2.firstChild.textContent=+tt.pageMax.firstChild.textContent-3,tt.middleBtn.firstChild.textContent=+tt.pageMax.firstChild.textContent-2,tt.btn4.firstChild.textContent=+tt.pageMax.firstChild.textContent-1,nt(tt.dotsRigth)),e.currentTarget===tt.btn2&&+tt.pageMax.firstChild.textContent-3&&rt(tt.dotsRigth),e.currentTarget===tt.btn4&&+e.currentTarget.firstChild.textContent==+tt.pageMax.firstChild.textContent-1&&nt(tt.dotsRigth),z(),Q.searchQuery?W():V())}))}))}();
//# sourceMappingURL=index.242601c1.js.map
