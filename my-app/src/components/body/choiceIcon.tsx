import { Props, Icon } from "./utils"

export const ChoiceIcon = (props: Props) => {
  const { choice, setUserChoice } = props

  const handleClick = () => {
    if (setUserChoice !== undefined && choice !== undefined) {
      setUserChoice(choice)
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