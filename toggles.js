function toggleMode() {
  const togglesSelect = document.getElementById("toggles");
  
  const selectedValue = togglesSelect.value;
  const el = document.querySelector("body");
  
  if (selectedValue === "dark") {
    el.classList.remove("lightMode", "normMode");
    el.classList.add("darkMode");
  } else if (selectedValue === "light") {
    el.classList.remove("darkMode", "normMode");
    el.classList.add("lightMode");
  } else if (selectedValue === "norm") {
    el.classList.remove("darkMode", "lightMode");
    el.classList.add("normMode");
  }
}
