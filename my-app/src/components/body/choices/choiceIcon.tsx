import React, { CSSProperties } from "react"
import { Props, Icon, iconColors, iconPositions, iconColorsOnRightSide } from "../utils"
import "./choices.css"

export const ChoiceIcon = (props: Props) => {
  const { choice } = props

  const color =  {
    // background: `linean-gradient(to right, ${iconColors(choice!)}, ${iconColorsOnRightSide(choice!)})`,
    maxWidth: "fit-content",
    padding: "15px",
    borderRadius: "50%",
    background: `linear-gradient(45deg, ${iconColors(choice!)} 30%, ${iconColorsOnRightSide(choice!)} 100%)`
  }

  const returnedIcon = Icon({ choice });
  const returnedPosition = iconPositions(choice!) as CSSProperties
  
  return (
    <>
      <div tabIndex={0} role="choicebutton" aria-labelledby="choice option" style={returnedPosition} className={"outerIcon"}>
        <div style={color}>
          <div className={"iconContainer"}>
            {returnedIcon}
          </div>
        </div>
      </div>
    </>
  )
}