const mainEl  = document.querySelector("main");
let str = 'var(--main-bg)';
mainEl.style.backgroundColor = str;
mainEl.innerHTML = `<h1>DOM Manipultation</h1>`
mainEl.classList.add('flex-ctr')


const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')