
fetch("https://randomuser.me/api")
.then((request) => {
    return request.json()
}).then((data) => {
    console.log(data)
})