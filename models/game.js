const Err = require('./CustomError')

const hands = ['Rock', 'Paper', 'Scissors']

const getComputerHand = () => {
  const i = Math.floor(Math.random() * 3)
  return hands[i]
}

const isPlayerWinner = (playerHand, computerHand) => {
  if (playerHand === computerHand) throw new Err.TieError()

  return (
    (playerHand === hands[0] && computerHand === hands[2]) ||
    (playerHand === hands[1] && computerHand === hands[0]) ||
    (playerHand === hands[2] && computerHand === hands[1])
  )
}

module.exports = { getComputerHand, isPlayerWinner }
