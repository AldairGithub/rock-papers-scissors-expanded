import { ChoicesBody } from "./choicesBody"
import { Props } from "../utils"
import './choices.css'

export const Choices = (props: Props) => {
  const {handleResult} = props

  return (
    <>
      <div className="choicesContainer">
        <ChoicesBody handleResult={handleResult}/>
      </div>
    </>
  )
}