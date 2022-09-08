import React from 'react'

interface Props {
  length: number
  isActive?: boolean
  onChange?: (e: string) => void
}

const LetterInput = ({ length, onChange, isActive = false }: Props) => {
  const [letters, setLetters] = React.useState<string[]>([])

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const newLetters = [...letters]
    newLetters[index] = value
    setLetters(newLetters)
    onChange && onChange(value)
  }

  return (
    <div>
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="text"
          value={letters[i]}
          className="w-4 h-4 rounded-sm border p-2 text-black"
          onChange={e => {
            changeHandler(e, i)
          }}
        />
      ))}
    </div>
  )
}

export default LetterInput
