const navigation = document.querySelector("nav");
const checkbox = document.querySelector("input[name=theme]");
const buyBtn = document.querySelector("#Purchase");
const popUp = document.querySelector(".bg-modal");

window.addEventListener("load", () => {
  setInterval(reset, 100);
});

reset = function() {
  if (scrollY == 0) {
    navigation.style.setProperty("background", "rgba(0, 0, 0, 1)");
  } else {
    navigation.style.setProperty("background", "rgba(0, 0, 0, .8)");
  }
};

checkbox.addEventListener("change", function() {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});
let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

AOS.init({
  offset: 400,
  duration: 1000
});

buyBtn.addEventListener("click", () => {
  popUp.style.display = "flex";
  document.querySelector("body").classList.add("stop-scrolling");
});
document.querySelector(".close").addEventListener("click", function() {
  document.querySelector("body").classList.remove("stop-scrolling");
  popUp.style.display = "none";
});
