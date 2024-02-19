function PanlindromeChecker(word) {
    let first = 0
    let second = word.length - 1
    let res = true


    while (first < second && res) {

        if (word[first] === " "){
            first += 1
            continue;
        } else if (word[second] === " "){
            second -= 1
            continue;
        }
        
        if (word[first] !== word[second]) {
            res = false
            break
        }

        first += 1;
        second -= 1;
    }

    return res
        

  }
  console.log(PanlindromeChecker("racecar")) // true
  console.log(PanlindromeChecker("level"))  // true
  console.log(PanlindromeChecker("table"))  // false
  console.log(PanlindromeChecker("mom")) // true
  console.log(PanlindromeChecker("02022020"))  //true
  console.log(PanlindromeChecker("a santa at nasa")) // true 
  console.log(PanlindromeChecker("checker")) // false
  console.log(PanlindromeChecker("was it a car or a cat i saw")) // true