let sidebarVisible = false

function switchNav() {
  const size = '200px'
  const currentSize = document.getElementById('sidebar').style.width

  if (currentSize === size) {
    document.getElementById('sidebar').style.width = '0px'
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0)'
    document.getElementById('sidebar').style.paddingRight = '0'
    sidebarVisible = false
  } else if (sidebarVisible === false) {
    document.getElementById('sidebar').style.width = size
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
    document.getElementById('sidebar').style.paddingRight = '30px'
    sidebarVisible = true
  }
}

function clickListener() {
  if (sidebarVisible) {
    switchNav()
  }
}

document.addEventListener('click', clickListener, true)
