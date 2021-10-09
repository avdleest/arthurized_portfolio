function clickListener() {
  document.onclick = function (event) {
    // Compensate for IE<9's non-standard event model
    //
    if (event === undefined) event = window.event
    alert('clicklistener fired')
    document.removeEventListener('click', clickListener, false)
    const target = 'target' in event ? event.target : event.srcElement
    if (!['0px', ''].includes(document.getElementById('sidebar').style.width)) {
      console.log(document.getElementById('sidebar').style.width)
      switchNav()
      document.removeEventListener('click', clickListener, false)
    }
  }
}

function switchNav() {
  const size = '200px'
  const currentSize = document.getElementById('sidebar').style.width
  document.removeEventListener('click', clickListener, false)

  if (currentSize === size) {
    document.getElementById('sidebar').style.width = '0px'
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0)'
    document.getElementById('sidebar').style.paddingRight = '0'
  } else {
    document.getElementById('sidebar').style.width = size
    document.getElementById('sidebar').style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
    document.getElementById('sidebar').style.paddingRight = '30px'
    document.addEventListener('click', clickListener)
  }
}
