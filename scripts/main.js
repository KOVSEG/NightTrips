// Pick your trip block
let getPickmenuTabs = document.querySelectorAll('.pickmenu__tabs'); //Get links of muenu in Pick your trip page
let getPickInfo = document.querySelectorAll('.pick__info'); //Get 'pick__info' blocks 

//Change class for 'pickmenu__tabs'
function activeTab() {
  getPickmenuTabs.forEach((item) => item.classList.remove('choosed'));
  this.classList.add('choosed');

  changePickInfo(this);
};

//Toggle active tab of 'pickmenu__tabs'
getPickmenuTabs.forEach(function(item) {
  item.addEventListener('click', activeTab);
});

//Change 'pick__info' block by mouse click
function changePickInfo(el) {
  let textEl = el.innerHTML; //Get text of choosed element of 'pickmenu__tabs'

  getPickInfo.forEach(function(elem) {
    let getCurrenBlockText = elem.children[1].children[0].innerText; //Get text of 'description__title' like a child of 'pick__info'

    elem.classList.add('disactive__link');

    //Compare text of 'pickmenu__tabs' and 'description__title' blocks
    if(getCurrenBlockText == textEl) {
      elem.classList.remove('disactive__link');
    }
  });
};


// About Us block
let getStaffCards = document.querySelectorAll('.about__card'); //Get all cards of employees
let getCardNames = document.querySelectorAll('.card__name'); // Get cards with names and roles 

// Show person card and card with name and role
function showCard() {
  getStaffCards.forEach(function(staffcard) {
    staffcard.style.opacity = 0.4;

    //Hide card with name and role of person
    staffcard.children[0].classList.add('hide__role');
  });

  this.style.opacity = 1;

  //Hide card with name and role of person
  this.children[0].classList.remove('hide__role');
};


// Show cards by mouseclick
getStaffCards.forEach(function(staffcard) {
  staffcard.addEventListener('click', showCard);
});