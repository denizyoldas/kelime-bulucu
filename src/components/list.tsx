import React, { useEffect } from 'react'
import WORDS from '../data/kelimeler.json'

interface Props {
  length: number
  letters: string[]
}

const List = ({ length, letters }: Props) => {
  const [filteredWords, setFilteredWords] = React.useState<string[]>([])

  useEffect(() => {
    const words = WORDS.filter(word => word.length === length)
    const fWords = words.filter(word => {
      return word.split('').some(letter => letters.includes(letter))
    })
    setFilteredWords(fWords)
  }, [length, letters])

  return (
    <div>
      <ul className="h-56 overflow-y-auto">
        {filteredWords.map((word, i) => (
          <li key={`${word}-${i}`}>{word}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
