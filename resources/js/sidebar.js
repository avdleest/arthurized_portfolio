/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function switchNav() {
  const size = '250px'
  const currentSize = document.getElementById('sidebar').style.width

  if (currentSize === size) {
    document.getElementById('sidebar').style.width = '0'
    document.getElementById('main').style.marginLeft = '0'
  } else {
    document.getElementById('sidebar').style.width = size
    document.getElementById('main').style.marginLeft = size
  }
}
