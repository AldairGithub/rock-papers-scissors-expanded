import { ChoiceIcon } from "./choiceIcon"
import { Props, iconPositions } from "../utils"
import './choices.css'
import React, { CSSProperties } from "react"

export const ChoiceContainer = (props: Props) => {
  const {choice, handleResult } = props
  
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    
    if (handleResult && choice) {
      handleResult(event, choice)
    }
  }

  const returnedPosition = iconPositions(choice!) as CSSProperties

  return (
    <div style={returnedPosition} onClick={handleClick}>
      <ChoiceIcon choice={choice}/>
    </div>
  )
}