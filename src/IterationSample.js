import React, { useState } from 'react'

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const nameList = names.map(name => (
  <li key={name.id} onDoubleClick={() => onArrayDelete(name.id)}>{name.text}</li>
  ))

  const onChangeText = (e) => {
    setInputText(e.target.value)
  }

  const onArrayPush = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    })
    setNextId(nextId + 1)
    setNames(nextNames)
    setInputText('')
  }

  const onArrayDelete = (id) => {
    const nextNames = names.filter(name => name.id != id);
    setNames(nextNames);
  }
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onArrayPush()
    }
  }
  return (
    <>
    <input
      type="text"
      value={inputText}
      onChange={onChangeText}
      onKeyPress={onKeyPress}
    />
    <button onClick={onArrayPush}>추가</button>
    <ul>{nameList}</ul>
    </>
  )
}

export default IterationSample
