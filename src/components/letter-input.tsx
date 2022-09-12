import React, { useState } from 'react'
import LetterBox from './letter-box'

interface Props {
  length: number
  isActive?: boolean
  onChange?: (e: string[]) => void
}

const LetterInput = ({ length, onChange, isActive = false }: Props) => {
  const [letters, setLetters] = useState<string[]>([])
  const [active, setActive] = useState(0)

  const changeHandler = (letter: string, index: number) => {
    const newLetters = [...letters]
    newLetters[index] = letter
    setLetters(newLetters)
    setActive(index + 1)
    onChange && onChange(newLetters)
  }

  const onClick = (i: number) => {
    setActive(i)
  }

  return (
    <div className="w-full h-full flex gap-3 items-center">
      {Array.from({ length }, (_, i) => (
        <LetterBox
          key={i}
          onClick={() => {
            onClick(i)
          }}
          onChange={e => changeHandler(e, i)}
          active={active === i}
        />
      ))}
    </div>
  )
}

export default LetterInput
