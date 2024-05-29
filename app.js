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

//Creating a variable to select the main element from HTML doc and change the background color, have text content and add a class
const mainEl  = document.querySelector("main");
let str = 'var(--main-bg)';
mainEl.style.backgroundColor = str;
mainEl.innerHTML = `<h1>DOM Manipultation</h1>`
mainEl.classList.add('flex-ctr')

//Creating the variable to select the top menu from HTML doc and change the height, change the background and add a classList to the top of the nav bar'
const topMenuEl = document.querySelector('#top-menu')
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')


//For Each loop to iterate the menu link array and create the top menu links dinamically
menuLinks.forEach(item =>{
  let aElem = document.createElement("a")
  aElem.setAttribute("href", item.href)
  aElem.textContent = item.text
  topMenuEl.append(aElem)
});


//DOM MANIPULATION: PART TWO BEGINS HERE

//Getting the sub menu element from HTML doc using query selector.
const subMenuEl = document.querySelector("#sub-menu");

//Changing height and class and adding a new class to sub menu
subMenuEl.style.height = '100%'
let str2 = 'var(--sub-menu-bg)';
subMenuEl.style.backgroundColor = str2;
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute';
subMenuEl.style.top='0'


//Getting the links within the top menu nav bar
const topMenuLinks = document.querySelector("#top-menu a")
// console.log(topMenuLinks)



//Using event listener to handle click events on the elements within the top menu element
topMenuEl.addEventListener("click", (e)=>{

  // console.log(e.target)
  e.preventDefault();
  // console.log(e)
  if(!e.target.matches("a")){
      return;
  }

  //Utilized array.from to convert a nodelist into an array 
  const arrOfTopLinks = Array.from(topMenuLinks);
    
  
  //This forEach will remove the class active from links previously clicked
  arrOfTopLinks.forEach(aElem => {
    if(aElem != e.target){
    aElem.classList.remove("active")}
  });


  //Add a active class to the clicked links
  e.target.classList.add("active");
  
 
  // console.log(e.target.textContent)
  if(e.target.textContent.toLowerCase() !== 'about'){
    //If the target content does not match the word about. The function buildSubmenu would be called and pass as parameters those sublinks of the top menu links that match with the content the target element
    buildSubmenu(menuLinks.find(item => item.text === e.target.textContent).subLinks)
    subMenuEl.style.top = '100%';
    } else{
    subMenuEl.style.top = '0%';}

  //If the about link is clicked show about
  if(e.target.textContent === "about"){
    mainEl.innerHTML= `<h1>About</h1>`
  }else{
  //Adding the header for the mainEl with the clicked <a> element
  mainEl.innerHTML=`<h1>${e.target.textContent}</h1>`
  }


});


/*This is a helper function takes as paremeters the sublinks. Then clean the subMenulEl content and use a ForEach loop to iterate over the sublinks and create links asign them 
attributes and set their content. Finally, adds the elements to the sub menu into the HTML doc
*/
function buildSubmenu(subLinks){
    subMenuEl.innerHTML = "";
    subLinks.forEach(sublink=>{
      let aElem = document.createElement("a");
      aElem.setAttribute("href", sublink.href)
      aElem.textContent = sublink.text;
      subMenuEl.append(aElem)
    })

}


//Using event listener to handle click events on elements within the sub menu in the HTML doc
subMenuEl.addEventListener("click", (e)=>{
  e.preventDefault();
  
  //console.log(e.target)
  if(!e.target.matches('a')){
    return;
  }
  
  subMenuEl.style.top = '0';

  //Adding the header for the mainEl with the clicked <a> element
  mainEl.innerHTML=`<h1>${e.target.textContent}</h1>`


});

// const subMenuLinks = Array.from(menuLinks)

// let subLinks = 




 





