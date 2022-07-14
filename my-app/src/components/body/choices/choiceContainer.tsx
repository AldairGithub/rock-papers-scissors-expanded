import { ChoiceIcon } from "./choiceIcon"
import { Props, iconPositions } from "../utils"
import './choices.css'
import React, { CSSProperties } from "react"

export const ChoiceContainer = (props: Props) => {
  const {choice, handleResult } = props
  
  const handleClick = (event: any) => {
    event.preventDefault()
    
    if (handleResult && choice) {
      handleResult(event, choice)
    }
  }
  const handlePress = (event: any) => {
    if (event.key === 'Enter' && ( choice && handleResult)) {
      handleResult(event, choice)
    }
  }

  const returnedPosition = iconPositions(choice!) as CSSProperties

  return (
    <div tabIndex={0} className={"outlineFocus"} style={returnedPosition} onClick={handleClick} onKeyDown={handlePress}>
      <ChoiceIcon choice={choice}/>
    </div>
  )
}