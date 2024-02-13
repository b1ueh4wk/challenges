const countElem = document.getElementById('counter')
let count = 0

function alterCount(isReset) {
  isReset ? (count = 0) : count++
  countElem.innerText = count
}
