const navigation = document.querySelector("nav");

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

AOS.init({
  offset: 400,
  duration: 1000
});
