(function () {
  const hideAll = (items) => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("accordion-item--open");
    }
  };

  const accordions = document.querySelectorAll(".accordion__items");

  for (let i = 0; i < accordions.length; i++) {
    const items = accordions[i].querySelectorAll(".accordion-item");

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.dataset.init) {
        const button = item.querySelector(".accordion-item__title-wrap");

        const openItem = () => {
          hideAll(items);
          item.classList.toggle("accordion-item--open");
        };

        button.addEventListener("click", openItem);

        item.dataset.init = true;

        // Open first item on init
        if (i === 0) {
          openItem();
        }
      }
    }
  }
})();
