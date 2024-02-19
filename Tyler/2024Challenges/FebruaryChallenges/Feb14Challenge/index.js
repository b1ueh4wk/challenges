
let inputStr = 'we are going to combine this so good'

function combineString(inputStr){
  for(let i = 0; i < inputStr.length; i++){
    if(inputStr[i] == ' '){
      console.log(inputStr[i])
      inputStr[i] = '%20'
    }
  }

  console.log('Your string changed into a URL format is: ' + inputStr)

  return inputStr;
}

combineString(inputStr)