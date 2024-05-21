var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];



const mainEl  = document.querySelector("main");
let str = 'var(--main-bg)';
mainEl.style.backgroundColor = str;
mainEl.innerHTML = `<h1>DOM Manipultation</h1>`
mainEl.classList.add('flex-ctr')


const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')



for(let i=0; i<menuLinks.length; i++) {
        
    let link = document.createElement("a")
    link.setAttribute("href", `${menuLinks[i].href}`)
    link.innerHTML = `${menuLinks[i].text}`
    topMenuEl.append(link)
};


//DOM MANIPULATION: PART TWO BEGINS HERE
const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = '100%'
let str2 = 'var(--sub-menu-bg)';
subMenuEl.style.backgroundColor = str2;