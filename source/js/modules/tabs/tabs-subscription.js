const tabsButton = document.querySelectorAll('.subscription__control-button');
const tabsItems = document.querySelectorAll('.subscription__description-list');


tabsButton.forEach(onTabClikc);


function onTabClikc(item) {
  item.addEventListener('click', () => {
    const currentButton = item;
    const tabId = currentButton.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if (!currentButton.classList.contains('subscription__control-active')) {

      tabsButton.forEach((button) => {
        button.classList.remove('subscription__control-active');
      });

      tabsItems.forEach((list) => {
        list.classList.remove('is-active');
      });

      currentButton.classList.add('subscription__control-active');
      currentTab.classList.add('is-active');
    }
  });
}

document.querySelector('.subscription__control-button').click();

export {onTabClikc};
