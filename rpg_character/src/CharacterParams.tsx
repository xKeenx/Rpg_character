import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import { Button } from '@material-ui/core'
import CharacterSkills from './CharacterSkills'

function CharacterParams() {
  const [strength, setStrength] = useState<number>(0)
  const [agility, setAgility] = useState<number>(0)
  const [intelligence, setIntelligence] = useState<number>(0)
  const [charisma, setCharisma] = useState<number>(0)
  const [life, setLife] = useState<number>(3)
  const [showChangeButton, setShowChangeButton] = useState<boolean>(false)

  return (
    <div>
      Характеристики персонажа:
      {showChangeButton ? (
        <Button variant='contained' color='primary' onClick={() => setShowChangeButton(false)}>
          Изменить параметры
        </Button>
      ) : (
        <>
          <div>
            Сила : {strength}
            <AddBoxIcon
              onClick={() => {
                setStrength(strength + 1)
                setLife(life + 1)
              }}
            />
            <IndeterminateCheckBoxIcon
              onClick={() => {
                if (strength > 0) {
                  setStrength(strength - 1)
                  if (life > 0) setLife(life - 1)
                }
              }}
            />
          </div>
          <div>
            Ловкость : {agility}
            <AddBoxIcon onClick={() => setAgility(agility + 1)} />
            <IndeterminateCheckBoxIcon onClick={() => (agility === 0 ? agility : setAgility(agility - 1))} />
          </div>
          <div>
            Интелект : {intelligence}
            <AddBoxIcon onClick={() => setIntelligence(intelligence + 1)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (intelligence === 0 ? intelligence : setIntelligence(intelligence - 1))}
            />
          </div>
          <div>
            Харизма : {charisma}
            <AddBoxIcon onClick={() => setCharisma(charisma + 1)} />
            <IndeterminateCheckBoxIcon onClick={() => (charisma === 0 ? charisma : setCharisma(charisma - 1))} />
          </div>
          <div>
            Жизненная сила: {life} / {3 + strength}
            <Button
              variant='contained'
              color='secondary'
              size='small'
              onClick={() => (life === 0 ? life : setLife(life - 1))}
            >
              Урон
            </Button>
          </div>
          <div> Уклонение : {10 + agility}</div>
          <div>Энергичность : {agility + intelligence}</div>
          <Button variant='contained' color='primary' onClick={() => setShowChangeButton(true)}>
            Сохранить параметры
          </Button>

          <CharacterSkills strength={strength} agility={agility} intelligence={intelligence} charisma={charisma} />
        </>
      )}
    </div>
  )
}

export default CharacterParams
