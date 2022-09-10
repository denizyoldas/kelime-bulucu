import React from 'react'

interface Props {
  length: number
  isActive?: boolean
  onChange?: (e: string[]) => void
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
    onChange && onChange(newLetters)
  }

  return (
    <div className="w-full h-full flex gap-3 items-center">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          type="text"
          value={letters[i]}
          className="w-8 h-8 rounded-md border border-black p-2 text-black"
          onChange={e => {
            changeHandler(e, i)
          }}
        />
      ))}
    </div>
  )
}

export default LetterInput
