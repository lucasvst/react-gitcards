'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={(e) => alert('oi')}>
        <Title name='Lucas' />
        {['red', 'blue', 'black'].map((color) => (
          <Square key={color} color={color} />
        ))}
        <Info>IT PROGRAMMER</info>
      </div>
    )
  }
}

export default App
