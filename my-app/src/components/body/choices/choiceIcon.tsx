import React from "react"
import { Props, Icon, iconColors, iconColorsOnRightSide } from "../utils"
import "./choices.css"

export const ChoiceIcon = (props: Props) => {
  const { choice } = props

  const color =  {
    maxWidth: "fit-content",
    padding: "15px",
    borderRadius: "50%",
    background: `linear-gradient(45deg, ${iconColors(choice!)} 30%, ${iconColorsOnRightSide(choice!)} 100%)`
  }

  const returnedIcon = Icon({ choice });
  
  return (
    <>
      <div role="choicebutton" aria-labelledby="choice option" className={"outerIcon"}>
        <div style={color}>
          <div className={"iconContainer"}>
            {returnedIcon}
          </div>
        </div>
      </div>
    </>
  )
}