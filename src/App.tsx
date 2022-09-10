import { useEffect, useState } from 'react'
import LetterInput from './components/letter-input'
import List from './components/list'

function App() {
  const [length, setLength] = useState(0)
  const [letters, setLetters] = useState<string[]>([])
  const [sLength, setSLength] = useState(0)
  const [sLetters, setSLetters] = useState<string[]>([])

  const searchHandler = () => {
    console.log(letters, length)
    setSLength(length)
    setSLetters(letters)
  }

  return (
    <div className="w-screen py-10 h-screen prose lg:prose-xl mx-auto">
      <h1 className="text-center">Türkçe Kelime Bulucu</h1>

      <div className="px-5">
        <span>
          Olmayan Harflerin yerine <strong>?</strong> koyabilirsiniz.
        </span>
        <div className="mt-5">
          <span className="mr-5">Kelime harf sayısı</span>
          <input
            className="border rounded-md px-2 py-1 text-black border-black"
            type="number"
            min={1}
            max={10}
            value={length}
            onChange={e => setLength(+e.target.value)}
          />
        </div>
        <div className="h-24">
          <LetterInput length={length} onChange={e => setLetters(e)} />
        </div>
        <button
          onClick={searchHandler}
          className="bg-slate-400 py-2 px-4 rounded-md text-white"
        >
          Search
        </button>
        <div>
          <h4>Bulunan Kelimeler</h4>
          <List length={sLength} letters={sLetters} />
        </div>
      </div>
    </div>
  )
}

export default App
