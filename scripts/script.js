(function handleBurger() {
  const header = document.querySelector(".site-header__inner");
  const burgerBtn = document.querySelector(".burger");
  const primaryNav = document.querySelector(".site-header__nav--primary");
  const secondaryNav = document.querySelector(".site-header__nav--secondary");
  const logo = document.querySelector(".site-header__logo");
  const localeBlock = document.querySelector(".site-header__locale");
  const actionsBlock = document.querySelector(".site-header__actions");

  const mq = window.matchMedia("(max-width: 768px)");
  const handleChange = (e) => {};
  mq.addEventListener("change", handleChange(e));

  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      primaryNav.toggleAttribute("hidden");
      secondaryNav.toggleAttribute("hidden");
      logo.toggleAttribute("hidden");
      localeBlock.toggleAttribute("hidden");
      actionsBlock.toggleAttribute("hidden");

      const isOpen = header.dataset.menuOpen !== "true";
      header.dataset.menuOpen = String(isOpen);
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
      burgerBtn.setAttribute(
        "aria-label",
        isOpen ? "Открыть меню" : "Закрыть меню",
      );
    });
  }

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
