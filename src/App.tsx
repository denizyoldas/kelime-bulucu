import { useEffect, useState } from 'react'
import LetterInput from './components/letter-input'
import List from './components/list'

function App() {
  const [length, setLength] = useState(0)
  const [letters, setLetters] = useState<string[]>([])
  const [sLength, setSLength] = useState(0)
  const [sLetters, setSLetters] = useState<string[]>([])

  const searchHandler = () => {
    setSLength(length)
    setSLetters(letters)
  }

  return (
    <div className="bg-slate-700 text-white w-screen h-screen">
      length
      <input
        className="border rounded-sm p-2 text-black"
        type="text"
        value={length}
        onChange={e => setLength(+e.target.value)}
      />
      <LetterInput length={length} />
      <button
        onClick={searchHandler}
        className="bg-slate-400 py-2 px-4 rounded-md"
      >
        Search
      </button>
      <List length={sLength} letters={sLetters} />
    </div>
  )
}

export default App
