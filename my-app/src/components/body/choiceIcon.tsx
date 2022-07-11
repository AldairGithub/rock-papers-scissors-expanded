import React from "react"
import { Props, Icon } from "./utils"

export const ChoiceIcon = (props: Props) => {
  const { choice, handleResult } = props

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    
    if (handleResult && choice) {
      handleResult(event, choice)
    }
  } 

  const returnedIcon = Icon({choice})
  
  return (
    <>
      <div onClick={handleClick}>
        {returnedIcon}
      </div>
    </>
  )
}