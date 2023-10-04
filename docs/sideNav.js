const sideNavContainer = document.querySelector('.sideNavContainer');
const sideNavIconContainer = document.querySelector('.sideNav-icon-container');
const sideNav = document.querySelector('.sideNav');
const siteTitle = document.querySelector('.siteTitle');
  
const contentContainer = document.querySelector('.content-container');
  
// sidenav icon event listeners
  
const openSideNav = () => {
  contentContainer.style = 'margin-left: 20vw;';
  sideNavContainer.style.width = '20vw';
  // siteTitle.hidden = false;
}

const sideNavIconComponents = document.querySelectorAll('.sideNav-icon');
sideNavIconComponents.forEach((component) => {
  component.addEventListener('click', openSideNav);
})

const sideNavCloseBtn = document.querySelector('#sideNavClose');

const closeSideNav = () => {
  contentContainer.style = 'margin-left: 0vw;';
  sideNavContainer.style.width = '0vw';
  // siteTitle.hidden = true;
}

sideNavCloseBtn.addEventListener('click', closeSideNav);