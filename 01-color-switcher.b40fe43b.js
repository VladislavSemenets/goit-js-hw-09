!function(){let t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")},e=null;t.startBtn.addEventListener("click",()=>{t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval(()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3)}),t.stopBtn.addEventListener("click",()=>{t.startBtn.disabled=!1,t.stopBtn.disabled=!0,clearInterval(e)})}();
//# sourceMappingURL=01-color-switcher.b40fe43b.js.map
