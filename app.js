const mainEl  = document.querySelector("main");
let str = 'var(--main-bg)';
mainEl.style.backgroundColor = str;
mainEl.innerHTML = `<h1>DOM Manipultation</h1>`
mainEl.classList.add('flex-ctr')
