const toggleMenu = () => {
  const navbarNavigation = document.querySelector(".navbar-nav");
  navbarNavigation.classList.toggle("active");
};

const closeMenu = (e) => {
  const navbarNavigation = document.querySelector(".navbar-nav");
  const menuButton = document.querySelector("#menu");

  if (!menuButton.contains(e.target) && !navbarNavigation.contains(e.target)) {
    navbarNavigation.classList.remove("active");
  }
};

document.addEventListener("click", closeMenu);

export { toggleMenu };
