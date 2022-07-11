import { choices, Props } from "./utils"
import { ChoiceIcon } from "./choiceIcon"

export const ChoicesBody = (props: Props) => {
  const {handleResult} = props

  return (
    <>
      {Object.values(choices).map((ele, index) => (
        // iterate through values 
        <>
          <ChoiceIcon key={index} choice={ele} handleResult={handleResult}/>
        </>
      ))}
    </>
  )
}