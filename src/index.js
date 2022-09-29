/* WebPack 5 | index.js */ 
import 'bootstrap';
import './scss/style.scss';

// Dark/Light Theme Switch Logic
let mode = localStorage.getItem("mode");
var checkbox = document.querySelector('input[name=theme]');
if (mode === "darkTheme") {
  checkbox.checked = true
  document.documentElement.setAttribute('data-theme', 'dark')
} else {
  checkbox.checked = false
  document.documentElement.setAttribute('data-theme', 'light')
}
mode = localStorage.getItem("mode");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem("mode", "darkTheme")
    trans()
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    localStorage.setItem("mode", null)
    trans()
    document.documentElement.setAttribute('data-theme', 'light')
  }
})
let trans = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition')
  }, 1000)
 }
