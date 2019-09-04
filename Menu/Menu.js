/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuMaker() {
  const div1 = document.createElement("div");
  const ul = document.createElement("ul");

  for (let i = 0; i < menuItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = menuItems[i];
    ul.appendChild(li);
  }

  div1.setAttribute("class", "menu");
  // span.textContent = "toggle";
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", e => {
    div1.classList.toggle("menu--open");
  });

  div1.appendChild(ul);

  return div1;
}

// const articles1 = menuItems.map(menuMaker);
const Menu = menuMaker();
const articlesDiv = document.querySelector(".articles");
articlesDiv.insertAdjacentElement("afterend", Menu);

// const menuContainer = document.querySelector("body");

// articles1.forEach(element => {
//   menuContainer.appendChild(element);
// });
