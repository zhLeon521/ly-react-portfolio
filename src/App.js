import { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("Increasing count");
      setCount(c => c + 1)

    }, 1000)
  }, [])
  return <h2>{count}</h2>
}

function App() {
  const [showCounter, setShowCounter] = useState(false)
  return (
    <div>
      <button onClick={() => setShowCounter(sc => !sc)}>
        Show/Hide Counter
      </button>
      {showCounter && <Counter />}
    </div>
  )

}

export default App

