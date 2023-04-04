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

