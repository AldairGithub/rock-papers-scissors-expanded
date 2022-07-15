import { colorWin, colorLose } from '../body/utils'
import './header.css'

type Props = {
  score: {user: number, computer: number}
}

export const Header = (props: Props) => {
  const { score } = props
  
  return (
    <header className="header">
      <div className="container">
        <h1>Rock paper scissors expanded</h1>
        <div className="scoreContainer">
          <p className="score" style={colorWin}>User: {score.user}</p>
          <p className="score" style={colorLose}>Computer: { score.computer}</p>
        </div>
      </div>
    </header>
  )
}