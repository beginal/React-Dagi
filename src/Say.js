import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage("안녕하세요")
  const onClcikLeave = () => setMessage('안녕히가세요')

  const [color,setColor] = useState('black')

  return (
    <div>
      <button onClick= {onClickEnter}>입장</button>
      <button onClick= {onClcikLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>Red</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>Blue</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>Green</button>
    </div>
  )
}

export default Say