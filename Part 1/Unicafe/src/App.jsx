import { useState } from "react"

const Header = ({text}) => <div><h1>{text}</h1></div>
const StatisticLine = ({value, text}) => {
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad

  if (total === 0){
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <table>
      <StatisticLine value={good} text="Good"/>
      <StatisticLine value={neutral} text="Neutral"/>
      <StatisticLine value={bad} text="Bad"/>
      <StatisticLine value={total} text="Total"/>
      <StatisticLine value={(good/total) - (bad/total)} text="Average"/>
      <tr>
        <td>Positive</td>
        <td>{(good/total) * 100}%</td>
      </tr>
    </table>
  )
}

const App = () => {
  const text = {header: "Give feedback", body: "Statistics"}

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
      <div>
        <Header text={text.header}/>
        <Button onClick={handleGoodClick} text="Good"/>
        <Button onClick={handleNeutralClick} text="Neutral"/>
        <Button onClick={handleBadClick} text="Bad"/>
        <Header text={text.body}/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App