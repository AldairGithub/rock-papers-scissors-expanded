import {useEffect, useState} from 'react'
import { ChoicesBody } from "./choicesBody"
import { randomizer, returnsWinLoseTie } from './utils'

export const Main = () => {
  const [userChoice, setUserChoice] = useState("")
  const computer = randomizer() as string

  useEffect(() => {

    const user = userChoice
    
    const result = returnsWinLoseTie(user, computer)
    console.log(result?.value);
    console.log(result?.wlt);    

  }, [userChoice])

  return (
    <body>
      <div>
        <p>Please select one of five options!</p>
        <ChoicesBody setUserChoice={setUserChoice} />
        
      </div>
    </body>
  )
}