import { ChoicesBody } from "./choicesBody"
import { Props } from "./utils"

export const Choices = (props: Props) => {
  const {handleResult} = props

  return (
    <>
      <ChoicesBody handleResult={handleResult}/>
    </>
  )
}