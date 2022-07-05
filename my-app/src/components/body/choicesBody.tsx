import { useState } from "react"
import { choices } from "./utils"
import { ChoiceIcon } from "../body/choiceIcon"

export const ChoicesBody = () => {
  const [userChoice, setUserChoice] = useState<String>("")

  return (
    <>
      <p>Choices</p>
      {Object.values(choices).map((ele) => (
        // iterate through values 
        <ChoiceIcon />
      ))}
    </>
  )
}