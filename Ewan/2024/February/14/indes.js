function urlCreator(str) {
  str = str.replaceAll(/\W/g, '%20')
  return str
}

console.log(urlCreator('This is an url')) // Should return 'This%20is%20an%20url'
