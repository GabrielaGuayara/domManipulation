var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
subMenuEl.classList.add('flex-around')


const topMenuLinks = document.querySelector("#top-menu a")


topMenuEl.addEventListener("click", (e)=>{
e.preventDefault();
if(!e.target.matches("a")){
    return;
}

console.log(e.target)

e.target.classList.add("active");

})


