let username = prompt('Please enter your username')
let userPoint = 0
let stage = 1

function main(range) {
  while (range) {
    const computerGuess = Math.floor((Math.random() * range) + 1)
    let userGuess = parseInt(prompt(`For stage ${stage} choose a number between 1-${range}`))

    if (computerGuess === userGuess) {
      console.log('You guessed correctly')
      range++
      stage++
      userPoint++
      console.log(`You scored ${userPoint} points`)
    } else {
      console.log('You lose')
      range = false
      break
    }
  }
}

main(2)
