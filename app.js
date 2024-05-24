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

//Creating a variable that allow  to change the background color, have text content and add a class
const mainEl  = document.querySelector("main");
let str = 'var(--main-bg)';
mainEl.style.backgroundColor = str;
mainEl.innerHTML = `<h1>DOM Manipultation</h1>`
mainEl.classList.add('flex-ctr')

//Creating the variable topMenuEl using querySelector that allows to change the height, change the background and add a classList to the top of the nav bar'
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')


//
menuLinks.forEach(link =>{
  let aElem = document.createElement("a")
  aElem.setAttribute("href", link.href)
  aElem.textContent = link.text
  topMenuEl.append(aElem)
});


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
// console.log(topMenuLinks)



topMenuEl.addEventListener("click", (e)=>{
  // console.log(e.target)
  e.preventDefault();
  // console.log(e)
  if(!e.target.matches("a")){
      return;
  }
  
  // console.log(e.target)
  
  e.target.classList.add("active");
  
  const arrOfLinks = Array.from(topMenuLinks);
  // console.log(arrOfLinks)

  
  arrOfLinks.forEach(aElem=>{
    
    // console.log(aElem.target)
  
    if(aElem !== e.target){
      aElem.classList.remove("active")
    }
  });

 
  // console.log(e.target.textContent)
  if(e.target.textContent !== 'About'){
    buildSubmenu(menuLinks.find(item => item.text === e.target.textContent).subLinks)
    subMenuEl.style.top = '100%';

}
  else{
    subMenuEl.style.top = '0';
  }

  });

function buildSubmenu(subLinks){
    subMenuEl.innerHTML = "";
    subLinks.forEach(link=>{
      let aElem = document.createElement("a");
      aElem.setAttribute("href", link.href)
      aElem.textContent = link.text;
      subMenuEl.append(aElem)
    })

}

subMenuEl.addEventListener("click", (e)=>{
  e.preventDefault();
  if(!e.target.matches('a')){
    return;
  }
  
  //console.log(e.target)
  
  subMenuEl.style.top = '0';
  
  topMenuLinks.forEach(aElem =>{ aElem.classList.remove('active')});

  
  mainEl.innerHTML=`<h1>${e.target.textContent}</h1>`



  // console.log(subLinks)


  if(e.target.textContent === "about"){
 
    mainEl.innerHTML= `<h1>About</h1>`
  }

});

// const subMenuLinks = Array.from(menuLinks)

// let subLinks = 




 





