import React from 'react'
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
  FaRegHandLizard,
  FaRegHandSpock
} from 'react-icons/fa'

export type Result = {
  value: string,
  wlt: string
}

export type Props = {
  choice?: string,
  handleResult?: (event: React.MouseEvent, choice: string) => void
}

export const globals = {
  win: "win",
  lose: "lose",
  tie: "tie"
}
export const choices = {
  spock: "spock",
  lizard: "lizard",
  scissors: "scissors",
  rock: "rock",
  paper: "paper"
}
const choicesColors = {
  lizard: "#ffbe0b",
  paper: "#fb5607",
  spock: "#3a86ff",
  rock: "#ff006e",
  scissors: "#8338ec"
}

const orWinsOrLoses = (choice: Boolean) => {
  if (choice) {
    return globals.win
  } else {
    return globals.lose
  }
}

export const randomizer = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 0;
  const result = Object.keys(choices).at(randomNumber)
  return result
}

export const returnsWinLoseTie = (userChoice: String, randomChoice: String) => {
  let result: Result = {
    value: '',
    wlt: ''
  };

    if (userChoice === randomChoice) {
      result.value = userChoice + " ties " + randomChoice
      result.wlt = globals.tie
      return result
    }

    if ((userChoice === choices.scissors || randomChoice === choices.scissors) && (userChoice === choices.paper || randomChoice === choices.paper)) {
      result.value = "scissors cuts paper"
      result.wlt = orWinsOrLoses(userChoice === choices.scissors)
    }
    if ((userChoice === choices.paper || randomChoice === choices.paper) && (userChoice === choices.rock || randomChoice === choices.rock)) {
      result.value = "paper covers rock"
      result.wlt = orWinsOrLoses(userChoice === choices.paper)
    }
    if ((userChoice === choices.rock || randomChoice === choices.rock) && (userChoice === choices.lizard || randomChoice === choices.lizard)) {
      result.value = "rock crushes lizard"
      result.wlt = orWinsOrLoses(userChoice === choices.rock)
    }
    if ((userChoice === choices.lizard || randomChoice === choices.lizard) && (userChoice === choices.spock || randomChoice === choices.spock)) {
      result.value = "lizard poisons spock"
      result.wlt = orWinsOrLoses(userChoice === choices.lizard)
    }
    if ((userChoice === choices.spock || randomChoice === choices.spock) && (userChoice === choices.scissors || randomChoice === choices.scissors)) {
      result.value = "spock smashes scissors"
      result.wlt = orWinsOrLoses(userChoice === choices.spock)
    }
    if ((userChoice === choices.scissors || randomChoice === choices.scissors) && (userChoice === choices.lizard || randomChoice === choices.lizard)) {
      result.value = "scissors decapitates lizard"
      result.wlt = orWinsOrLoses(userChoice === choices.scissors)
    }
    if ((userChoice === choices.lizard || randomChoice === choices.lizard) && (userChoice === choices.paper || randomChoice === choices.paper)) {
      result.value = "lizard eats paper"
      result.wlt = orWinsOrLoses(userChoice === choices.lizard)
    }
    if ((userChoice === choices.paper || randomChoice === choices.paper) && (userChoice === choices.spock || randomChoice === choices.spock)) {
      result.value = "paper disproves spock"
      result.wlt = orWinsOrLoses(userChoice === choices.paper)
    }
    if ((userChoice === choices.spock || randomChoice === choices.spock) && (userChoice === choices.rock || randomChoice === choices.rock)) {
      result.value = "spock vaporizes rock"
      result.wlt = orWinsOrLoses(userChoice === choices.spock)
    }
    if ((userChoice === choices.rock || randomChoice === choices.rock) && (userChoice === choices.scissors || randomChoice === choices.scissors)) {
      result.value = "rock crushes scissors"
      result.wlt = orWinsOrLoses(userChoice === choices.rock)
    }
    return result
}

const iconSize = 24

export const Icon = (props: Props) => {
  const {choice} = props

  if (choice !== undefined) {
    switch (choice) {
      case choices.rock:
        return (
          <>
            <FaRegHandRock size={iconSize }/>
          </>
        )
      case choices.paper:
        return (
          <>
            <FaRegHandPaper size={iconSize }/>
          </>
        )
      case choices.scissors:
        return (
          <>
            <FaRegHandScissors size={iconSize }/>
          </>
        )
      case choices.lizard:
        return (
          <>
            <FaRegHandLizard size={iconSize }/>
          </>
        )
      case choices.spock:
        return (
          <>
            <FaRegHandSpock size={iconSize }/>
          </>
        )
      default:
        return null
    }
  }
}

export const userOutcome = (result: Result) => {
  switch (result.wlt) {
    case globals.win:
      return (
        <>
          <p>You won!</p>
        </>
      )
    case globals.lose:
      return (
        <>
          <p>You lost...try again!</p>
        </>
      )
    case globals.tie:
      return (
        <>
          <p>You tied! Not bad but try again!</p>
        </>
      )
    default:
      break;
  }
}

export const iconColors = (choice: string) => {
  switch (choice) {
    case choices.lizard:
      return choicesColors.lizard
    case choices.paper:
      return choicesColors.paper
    case choices.rock:
      return choicesColors.rock
    case choices.scissors:
      return choicesColors.scissors
    case choices.spock:
      return choicesColors.spock
    default:
      break;
  }
}
export const iconColorsOnRightSide = (choice: string) => {
  switch (choice) {
    case choices.lizard:
      return choicesColors.scissors
    case choices.paper:
      return  choicesColors.spock
    case choices.rock:
      return choicesColors.paper
    case choices.scissors:
      return choicesColors.rock
    case choices.spock:
      return choicesColors.lizard
    default:
      break;
  }
}

const top = {
  position: "absolute",
  top: "0",
  cursor: "pointer"
}
const leftTop = {
  position: "absolute",
  left: "0",
  top: "80px",
  cursor: "pointer"
}
const rightTop = {
  position: "absolute",
  right: "0",
  top: "80px",
  cursor: "pointer"
}
const leftBottom = {
  position: "absolute",
  bottom: "0",
  left: "45px",
  cursor: "pointer"
}
const rightBottom = {
  position: "absolute",
  bottom: "0",
  right: "45px",
  cursor: "pointer"
}

export const iconPositions = (choice: string) => {
  if (choice !== undefined) {
    switch (choice) {
      case choices.scissors:
        return top;
      case choices.spock:
        return leftTop;
      case choices.paper:
        return rightTop;
      case choices.lizard:
        return leftBottom;
      case choices.rock:
        return rightBottom;
      default:
        break;
    }
  }
}