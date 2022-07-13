import { ChoiceIcon } from "../choices/choiceIcon"
import "./outcome.css"

type Props = {
  values: { user: string, computer: string }
}

export const OutcomeValues = (props: Props) => {
  const { values } = props
  
  return (
    <>
      <div className={"outcomeIconsContainer"}>
        <div className={ "outcomeIcons"}>
          <ChoiceIcon choice={values.user} />
          <label>You</label>
        </div>
        <div className={ "outcomeIcons"}>
          <ChoiceIcon choice={values.computer} />
          <label>Computer</label>
        </div>
      </div>
    </>
  )
}