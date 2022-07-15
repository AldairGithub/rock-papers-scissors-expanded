import React, {useState} from 'react'
import { Body } from "../body"
import { Header } from "../header"

export const Main = () => {
  const [score, setScore] = useState({
    user: 0,
    computer: 0
  })

  return (
    <>
      <Header score={ score}/>
      <Body score={ score} setScore={ setScore}/>
    </>
  )
}