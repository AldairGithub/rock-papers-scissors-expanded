type Props = {
  choice: string
}

export const ChoiceIcon = (props: Props) => {
  const {choice} = props
  return (
    <>
      <p>{choice}</p>
    </>
  )
}