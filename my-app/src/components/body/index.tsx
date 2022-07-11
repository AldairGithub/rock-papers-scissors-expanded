import React, {useState} from 'react'
import { Choices } from './choices'
import { Outcome } from './outcome'
import { randomizer, Result, returnsWinLoseTie } from './utils'

export const Body = () => {
  const resetValue: Result = {
    value: "",
    wlt: ""
  }
  const [displayResult, setDisplayResult] = useState<Boolean>(false)
  const [finalResult, setFinalResult] = useState<Result>(resetValue)

  const handleResult = (event: React.MouseEvent, choice: string) => {
    event.preventDefault()
    const user = choice
    const computer = randomizer() as string
    const result = returnsWinLoseTie(user, computer)
    setFinalResult(result)
    setDisplayResult(true)
  }

  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault()
    setDisplayResult(false)
  }

  return (
    <body>
      <div>
        {displayResult ?
          <Outcome result={finalResult!} handleReset={handleReset} /> : 
          <Choices handleResult={handleResult}/>
        }
      </div>
    </body>
  )
}