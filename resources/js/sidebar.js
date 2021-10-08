/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function switchNav() {
  const size = '200px'
  const currentSize = document.getElementById('sidebar').style.width

  if (currentSize === size) {
    document.getElementById('sidebar').style.width = '0'
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0)'
    document.getElementById('sidebar').style.paddingRight = '0'
  } else {
    document.getElementById('sidebar').style.width = size
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
    document.getElementById('sidebar').style.paddingRight = '30px'
  }
}
