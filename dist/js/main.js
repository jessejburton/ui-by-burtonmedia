/* Navigation Sub-menu */
document.querySelectorAll("main aside > nav div a:first-child").forEach(link => {
  link.addEventListener("click", (e) => {
    e.currentTarget.parentNode.classList.toggle("open")
  })
})

/* Theme */
const themeSelect = document.querySelector("select[name=theme]")
themeSelect.addEventListener("change", (event) => {
  loading(500);
  localStorage.setItem("theme", event.target.value)
  document.querySelector("body").dataset["theme"] = event.target.value
})

let theme = localStorage.getItem("theme")
if (theme) {
  loading(500);
  select(themeSelect, theme)
  document.querySelector("body").dataset["theme"] = theme
}

/* Layout */
const layoutSelect = document.querySelector("select[name=layout]")
layoutSelect.addEventListener("change", (event) => {
  loading(500);
  localStorage.setItem("layout", event.target.value)
  document.querySelector("main").classList = event.target.value
})

let layout = localStorage.getItem("layout")
if (layout) {
  loading(500);
  select(layoutSelect, layout)
  document.querySelector("main").classList = layout
}

function loading(duration = null) {
  if (duration) {
    document.querySelector("body").classList.add("loading")
    setTimeout(() => {
      document.querySelector("body").classList.remove("loading")
    }, duration)
  } else {
    document.querySelector("body").classList.add("loading")
  }
}

function select(selectElement, value) {
  var selectOptions = selectElement.options;

  for (var opt, j = 0; opt = selectOptions[j]; j++) {
    if (opt.value == value) {
      selectElement.selectedIndex = j;
      break;
    }
  }
}