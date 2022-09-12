import React, { useEffect, useState } from 'react'
import cx from 'classnames'

interface Props {
  active?: boolean
  onChange?: (e: string) => void
  onClick?: () => void
}

const LetterBox = ({ active = false, onChange, onClick }: Props) => {
  const [letter, setLetter] = useState('')

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', e => {
        if (e.key.length === 1) {
          setLetter(e.key)
          onChange && onChange(e.key)
        }
      })
    }
  }, [active])

  return (
    <div
      onClick={onClick}
      className={cx('w-8 h-8 rounded-md border border-black p-2 text-black', {
        'bg-slate-400 border-blue-400': active
      })}
    >
      {letter}
    </div>
  )
}

export default LetterBox
