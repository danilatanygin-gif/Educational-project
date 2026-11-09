const header = document.querySelector(".site-header__inner");

(function handleBurger() {
  const burgerBtn = document.querySelector(".burger");

  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = header.dataset.menuOpen !== "true";
      header.dataset.menuOpen = String(isOpen);
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
      burgerBtn.setAttribute(
        "aria-label",
        isOpen ? "Открыть меню" : "Закрыть меню",
      );
    });
  }
})();

(function handleHeaderScroll(){
  const firstBlock = document.querySelector(".hero");

  if (header && firstBlock) {
    const options = {
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          header.classList.add("site-header__inner--is-scrolled");
        } else {
          header.classList.remove("site-header__inner--is-scrolled");
        }
      });
    }, options);

    observer.observe(firstBlock);
  }
})();