const sidebar = document.querySelector(".sidebar");
const themeToggle = document.querySelector(".theme-toggle");
const menuItems = document.querySelectorAll(".menu-list .item");
const indicator = document.querySelector(".indicator");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove("active");
    });

    item.classList.add("active");

    indicator.style.transform = `translateY(${item.offsetTop}px)`;
  });
});

function onClickToggle() {
  sidebar.classList.toggle("active");
}

let dark = false;
const root = document.documentElement;

function changeTheme() {
  if (dark) {
    dark = false;
    root.style.setProperty("--secondary", "#fff");
    themeToggle.innerHTML = `<ion-icon name="moon"></ion-icon>`;
  } else {
    dark = true;
    root.style.setProperty("--secondary", "#0f172a");
    themeToggle.innerHTML = `<ion-icon name="sunny"></ion-icon>`;
  }
}
