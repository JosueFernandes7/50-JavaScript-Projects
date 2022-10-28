let panel = document.querySelectorAll('.panel');

panel.forEach(panel => {
  panel.addEventListener('click',activePanel)
})

function removeActive(panelChosen) {
  panel.forEach(panel => {
    if(panel != panelChosen) panel.classList.remove('active');
  })
}
function activePanel(event) {
  let panel = event.target;
  removeActive(panel);
  panel.classList.add('active');
}