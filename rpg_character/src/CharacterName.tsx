import React, { useEffect, useState } from 'react'
import { Input, Button } from '@material-ui/core'
import characterNameStyles from './characterNameStyles.module.scss'

function CharacterName() {
  const [name, setName] = useState<string>('')
  const [showChangeButton, setShowChangeButton] = useState<boolean>(true)

  useEffect(() => {
    const LocalData = localStorage.getItem('name')
    setName(LocalData ? JSON.parse(LocalData) : name)
  }, [])

  return (
    <>
      <div className={characterNameStyles.wrapperDiv}>
        <div className={characterNameStyles.characterNameBlock}>
          {showChangeButton ? (
            <div className={characterNameStyles.columnDisplay}>
              <div className={characterNameStyles.centerName}>Введите имя персонажа</div>
              <Input value={name} onChange={(event) => setName(event.target.value)} />
              <Button variant='contained' color='primary' onClick={() => setShowChangeButton(false)}>
                Прекратить редактирование
              </Button>
            </div>
          ) : (
            <div className={characterNameStyles.changeButtonDisplay}>
              <div>{name}</div>
              <Button variant='contained' color='primary' onClick={() => setShowChangeButton(true)}>
                Редактировать имя персонажа
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={(event) => localStorage.setItem('name', JSON.stringify(name))}
              >
                Сохранить имя
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CharacterName
