import React from 'react'

interface Props {
  text: string
}

const ListItem = ({ text }: Props) => {
  return <div>{text}</div>
}

export default ListItem
