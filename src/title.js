'use strict'

import React from 'react'

const Title = ({name, lastName}) => (
  <h1>Olá {`${name} ${lastName}`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem Sobrenome'
}

export default Title
