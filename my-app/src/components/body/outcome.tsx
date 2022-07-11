import React from "react"
import { Result, userOutcome } from "./utils"

type Props = {
  result: Result,
  handleReset: (event: React.MouseEvent) => void
}

export const Outcome = (props: Props) => {
  const { result, handleReset } = props
  
  return (
    <>
      {result.value}
      {userOutcome(result)}
      <button
        onClick={(event) => handleReset(event)}
      >
        Try again!
      </button>
    </>
  )
}