async function fetchJSON() {
  try {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.error(error.message, '[THERE WAS AN ERROR]')
  }
}

fetchJSON()
