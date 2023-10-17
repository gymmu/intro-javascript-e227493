function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText() { 
  const elemtodeletetext = document.querySelector("#to-delete")
elemtodeletetext.textContent = "Inhalt gelöscht"
}
