import { useState } from 'react'

const Header = ({text}) => <div><h1>{text}</h1></div>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Display = ({text}) => <div><p> {text} </p></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = [0, 0, 0, 0, 0, 0, 0, 0]
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(votes)
  const [mostVotes, setMostVotes] = useState(0)

  const getAnecdote = () => {
    const RandomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(RandomNumber)
  }
  const incrementVote = () => {
    const copy = [...vote]
    copy[selected] += 1
    const indexOfCopy = copy.indexOf(Math.max(...copy))
    setMostVotes(indexOfCopy)
    setVote(copy)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"}/>
      <Display text={anecdotes[selected]}/>
      <div>Has {vote[selected]} votes</div>
      <Button onClick={getAnecdote} text="Next anecdote"/>
      <Button onClick={incrementVote} text="vote"/>
      <Header text={"Anecdote with most votes"}/>
      <Display text={anecdotes[mostVotes]}/>
      <div>Has {vote[mostVotes]} votes</div>
    </div>
  )
}

export default App
