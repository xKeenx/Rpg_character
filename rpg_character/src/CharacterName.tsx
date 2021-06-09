import React, { useState } from 'react'
import { ButtonGroup, Input, Button } from '@material-ui/core'

function CharacterName() {
  const [name, setName] = useState<string>('')
  const [showChangeButton, setShowChangeButton] = useState<boolean>(true)
  return (
    <div>
      <div>
        {showChangeButton ? (
          <>
            <div>Введите имя персонажа</div>
            <Input value={name} onChange={(event) => setName(event.target.value)} />
            <Button variant='contained' color='primary' onClick={() => setShowChangeButton(false)}>
              Сохранить имя
            </Button>
          </>
        ) : (
          <>
            <div>{name}</div>
            <Button variant='contained' color='primary' onClick={() => setShowChangeButton(true)}>
              Изменить имя
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default CharacterName
