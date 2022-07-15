import React, {useState} from 'react'
import { Choices } from './choices/choices'
import { Outcome } from './outcome/outcome'
import { globals, randomizer, Result, returnsWinLoseTie } from './utils'
import './body.css'

type Props = {
  score: { user: number, computer: number };
  setScore: React.Dispatch<React.SetStateAction<{user: number, computer: number}>>;
}

export const Body = (props: Props) => {
  const { score, setScore } = props
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

  const handleResult = (event: any, choice: string) => {
    event.preventDefault()
    const user = choice
    const computer = randomizer() as string
    const result = returnsWinLoseTie(user, computer)
    handleScore(result)
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

  const handleScore = (result: Result) => {
    if (result.wlt === globals.win) {
      setScore({
        ...score,
        user: score.user + 1
      })
    } else if (result.wlt === globals.lose) {
      setScore({
        ...score,
        computer: score.computer + 1
      })
    }
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