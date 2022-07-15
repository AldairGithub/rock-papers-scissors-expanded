import React from "react"
import { colorLose, colorWin, globals, Result, userOutcome } from "../utils"
import { OutcomeValues } from "./outcomeValues"

type Props = {
  result: Result,
  handleReset: (event: React.MouseEvent) => void,
  values: {user: string, computer: string}
}

export const Outcome = (props: Props) => {
  const { result, handleReset, values } = props

  const colorChange = () => {
    if (result.wlt === globals.win) {
      return colorWin
    } else if (result.wlt === globals.lose) {
      return colorLose
    }
  }
  
  return (
    <>
      <OutcomeValues values={values} />
      <div className={"resultContainer"}>
        {result.value}
        <span style={colorChange()}>
          {userOutcome(result)}
        </span>
      </div>
      <button
        className={"tryAgainButton" }
        onClick={(event) => handleReset(event)}
      >
        Play again!
      </button>
    </>
  )
}