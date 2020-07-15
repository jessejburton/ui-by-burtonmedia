document.querySelectorAll("main aside > nav div a:first-child").forEach(link => {
  link.addEventListener("click", (e) => {
    e.currentTarget.parentNode.classList.toggle("open")
  })
})

document.querySelector("select[name=theme]").addEventListener("change", (event) => {
  document.querySelector("body").classList = event.target.value
})