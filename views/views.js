const game = require('../models/game')
const Err = require('../models/CustomError')

const getForm = () =>
  `
  <form action="/" method="post">
    <p><input type="submit" name="Rock" value="Rock" /></p>
    <p><input type="submit" name="Paper" value="Paper" /></p>
    <p><input type="submit" name="Scissors" value="Scissors" /></p>
  </form>
  `

const getResult = input => {
  const computerHand = game.getComputerHand()

  const displayHands = `
  <p>Player: ${input}</p>
  <p>Computer: ${computerHand}</p>
  `

  try {
    const isPlayerWinner = game.isPlayerWinner(input, computerHand)
    const result = isPlayerWinner
      ? '<p>Player wins!</p>'
      : '<p>Computer wins!</p>'

    return `${displayHands} ${result}`
  } catch (error) {
    if (error instanceof Err.TieError) {
      return `${displayHands} <p>Ooh it's a Tie!</p>`
    }

    return '<p>500</p>'
  }
}

module.exports = {
  getForm,
  getResult
}
