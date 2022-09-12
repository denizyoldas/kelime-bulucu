import React, { useEffect } from 'react'
import WORDS from '../data/kelimeler.json'
import ListItem from './list-item'

interface Props {
  length: number
  letters: string[]
}

const List = ({ length, letters }: Props) => {
  const [filteredWords, setFilteredWords] = React.useState<string[]>([])

  useEffect(() => {
    const words = WORDS.filter(word => word.length === length)
    const fWords = words.filter(word => {
      const wordLetters = word.split('')
      const blg = []
      for (let i = 0; i < wordLetters.length; i++) {
        if (letters[i] === wordLetters[i] || letters[i] === '?') {
          blg.push(true)
        } else {
          blg.push(false)
        }
      }
      return !blg.includes(false)
    })
    setFilteredWords(fWords)
  }, [length, letters])

  return (
    <>
      <h4>Bulunan kelime sayısı: {filteredWords.length}</h4>
      <div className="h-56 overflow-y-auto">
        {filteredWords.map((word, i) => (
          <ListItem key={`${word}-${i}`} text={word} />
        ))}
      </div>
    </>
  )
}

export default List
