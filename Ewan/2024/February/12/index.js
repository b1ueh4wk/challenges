const arr = [
  'Innovate',
  'Explore',
  'Create',
  'Design',
  'Develop',
  'Implement',
  'Achieve',
  'Navigate',
  'Discover',
  'Transform',
  'Optimize',
  'Collaborate',
  'Inspire',
  'Solve',
  'Evolve'
]

const listElem = document.getElementById('list')
let template = ''
arr.forEach(a => (template += `<h1>${a}</h1>`))
listElem.innerHTML = template
