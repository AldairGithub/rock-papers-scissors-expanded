import React from "react"
import { Result, userOutcome } from "../utils"
import { OutcomeValues } from "./outcomeValues"

type Props = {
  result: Result,
  handleReset: (event: React.MouseEvent) => void,
  values: {user: string, computer: string}
}

export const Outcome = (props: Props) => {
  const { result, handleReset, values } = props
  
  return (
    <>
      <OutcomeValues values={ values}/>
      {result.value}
      {userOutcome(result)}
      <button
        className={"tryAgainButton" }
        onClick={(event) => handleReset(event)}
      >
        Play again!
      </button>
    </>
  )
}