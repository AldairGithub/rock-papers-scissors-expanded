import { ChoiceIcon } from "./choiceIcon"
import { Props } from "../utils"
import './choices.css'

export const ChoiceContainer = (props: Props) => {
  const {choice, handleResult } = props
  
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    
    if (handleResult && choice) {
      handleResult(event, choice)
    }
  }
  return (
    <div className={"choicesPosition"} onClick={handleClick}>
      <ChoiceIcon choice={choice}/>
    </div>
  )
}