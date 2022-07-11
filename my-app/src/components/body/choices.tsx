import { ChoicesBody } from "./choicesBody"
import { Props } from "./utils"

export const Choices = (props: Props) => {
  const {handleResult} = props

  return (
    <>
        <p>Please select one of five options!</p>
      <ChoicesBody handleResult={handleResult}/>
    </>
  )
}