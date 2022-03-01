window.onload = function() {
  setTimeout(function() {
    document
      .getElementsByClassName('sec-loading__bg--01')[0]
      .classList.add('end')
  }, 1000)
  setTimeout(function() {
    document
      .getElementsByClassName('sec-loading__bg--01')[0]
      .classList.add('none')
  }, 1500)
  setTimeout(function() {
    document
      .getElementsByClassName('sec-loading__bg--02')[0]
      .classList.add('end')
  }, 3000)
}
