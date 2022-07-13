import React, {useState} from 'react'
import { Choices } from './choices/choices'
import { Outcome } from './outcome/outcome'
import { randomizer, Result, returnsWinLoseTie } from './utils'
import './body.css'

export const Body = () => {
  const resetValue: Result = {
    value: "",
    wlt: ""
  }
  const resetChoices = ""
  const [displayResult, setDisplayResult] = useState<Boolean>(false)
  const [finalResult, setFinalResult] = useState<Result>(resetValue)
  const [values, setValues] = useState({
    user: resetChoices,
    computer: resetChoices
  })

  const handleResult = (event: React.MouseEvent, choice: string) => {
    event.preventDefault()
    const user = choice
    const computer = randomizer() as string
    const result = returnsWinLoseTie(user, computer)
    setFinalResult(result)
    setDisplayResult(true)
    setValues({
      user: user,
      computer: computer
    })
  }

  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault()
    setDisplayResult(false)
  }

  return (
    <body>
      <div className="bodyContainer">
        {displayResult ?
          <Outcome result={finalResult!} handleReset={handleReset} values={ values}/> : 
          <Choices handleResult={handleResult}/>
        }
      </div>
    </body>
  )
}