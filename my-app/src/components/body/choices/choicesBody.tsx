import { choices, Props } from "../utils"
import { ChoiceContainer } from "./choiceContainer"

export const ChoicesBody = (props: Props) => {
  const {handleResult} = props

  return (
    <>
      {Object.values(choices).map((ele, index) => (
        // iterate through values 
        <>
          <ChoiceContainer key={index} choice={ele} handleResult={handleResult}/>
        </>
      ))}
    </>
  )
}