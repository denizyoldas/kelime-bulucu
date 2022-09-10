import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])

  return <div>ThemeToggle</div>
}

export default ThemeToggle
