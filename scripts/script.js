const header = document.querySelector(".site-header__inner");

const handleBurger = () => {
  const burgerBtn = document.querySelector(".burger");
  if (!burgerBtn || !header) return;

  burgerBtn.addEventListener("click", () => {
    const isOpen = header.dataset.menuOpen !== "true";
    header.dataset.menuOpen = String(isOpen);
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
    burgerBtn.setAttribute(
      "aria-label",
      isOpen ? "Закрыть меню" : "Открыть меню",
    );
  });
};

const handleHeaderScroll = () => {
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
};

const handleScrollTop = () => {
  const scrollTopBtn = document.querySelector(".scroll-top");

  if (!scrollTopBtn) {
    return;
  }

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("scroll-top--visible", window.scrollY > 400);
  });
};

handleBurger();
handleHeaderScroll();
handleScrollTop();
