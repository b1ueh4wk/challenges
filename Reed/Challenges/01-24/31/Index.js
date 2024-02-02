string = "aacdls"

frequincy = {}

for (var i = 0; i < string.length; i++) {
    if (frequincy[string[i]] !== undefined) {
        frequincy[string[i]] += 1}
    else {
        frequincy[string[i]] = 1 
    } 
}

console.log(Object.keys(frequincy).reduce((a, b) => frequincy[a] > frequincy[b] ? a : b))