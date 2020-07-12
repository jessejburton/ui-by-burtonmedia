document.querySelectorAll("main aside > nav div a:first-child").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    e.currentTarget.parentNode.classList.toggle("open")
  })
})