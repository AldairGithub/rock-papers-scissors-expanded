import { choices, Props } from "./utils"
import { ChoiceIcon } from "../body/choiceIcon"

export const ChoicesBody = (props: Props) => {
  const {setUserChoice} = props

  return (
    <>
      <p>Choices</p>
      {Object.values(choices).map((ele, index) => (
        // iterate through values 
        <>
          <ChoiceIcon key={index} choice={ele} setUserChoice={setUserChoice}/>
        </>
      ))}
    </>
  )
}