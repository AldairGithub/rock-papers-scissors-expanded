type Result = {
  value: string,
  wlt: string
}
const globals = {
  win: "win",
  lose: "lose",
  tie: "tie"
}
export const choices = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
  lizard: "lizard",
  spock: "spock"
}

const orWinsOrLoses = (choice: Boolean) => {
  if (choice) {
    return globals.win
  } else {
    return globals.lose
  }
}

export const returnsWinLoseTie = (userChoice: String, randomChoice: String) => {
  let result: Result | undefined;

  if (result !== undefined) {
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
      result.value === "scissors decapitates lizard"
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
}