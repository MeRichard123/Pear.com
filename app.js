const navigation = document.querySelector("nav");

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    navigation.style.setProperty("background", "rgba(0, 0, 0, .8)");
  });
});
