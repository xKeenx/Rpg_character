import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import { Button } from '@material-ui/core'
import CharacterSkills from './CharacterSkills'
import characterParamsStyle from './characterParamsStyle.module.scss'

function CharacterParams() {
  const [showChangeButton, setShowChangeButton] = useState<boolean>(false)

  const [parameters, setParameters] = useState({
    strength: 0,
    agility: 0,
    intelligence: 0,
    charisma: 0,
    life: 3,
  })

  useEffect(() => {
    const LocalData = localStorage.getItem('stats')
    setParameters(LocalData ? JSON.parse(LocalData) : parameters)
  }, [])

  return (
    <div className={characterParamsStyle.wrapperDiv}>
      <div className={characterParamsStyle.wrapperDiv}> Характеристики персонажа: </div>
      {showChangeButton ? (
        <Button variant='contained' color='primary' onClick={() => setShowChangeButton(false)}>
          Изменить параметры
        </Button>
      ) : (
        <>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            <div> Сила : {parameters.strength} </div>
            <div>
              <AddBoxIcon
                onClick={() => {
                  setParameters({ ...parameters, strength: parameters.strength + 1, life: parameters.life + 1 })
                }}
              />
              <IndeterminateCheckBoxIcon
                onClick={() => {
                  if (parameters.strength > 0) {
                    setParameters({
                      ...parameters,
                      strength: parameters.strength - 1,
                      life: parameters.life > 0 ? parameters.life - 1 : parameters.life,
                    })
                  }
                }}
              />
            </div>
          </div>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            <div> Ловкость : {parameters.agility} </div>
            <div>
              <AddBoxIcon onClick={() => setParameters({ ...parameters, agility: parameters.agility + 1 })} />
              <IndeterminateCheckBoxIcon
                onClick={() =>
                  parameters.agility === 0
                    ? parameters.agility
                    : setParameters({ ...parameters, agility: parameters.agility - 1 })
                }
              />
            </div>
          </div>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            <div> Интелект : {parameters.intelligence} </div>
            <div>
              <AddBoxIcon onClick={() => setParameters({ ...parameters, intelligence: parameters.intelligence + 1 })} />
              <IndeterminateCheckBoxIcon
                onClick={() =>
                  parameters.intelligence === 0
                    ? parameters.intelligence
                    : setParameters({ ...parameters, intelligence: parameters.intelligence - 1 })
                }
              />
            </div>
          </div>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            <div>Харизма : {parameters.charisma} </div>
            <div>
              <AddBoxIcon onClick={() => setParameters({ ...parameters, charisma: parameters.charisma + 1 })} />
              <IndeterminateCheckBoxIcon
                onClick={() =>
                  parameters.charisma === 0
                    ? parameters.charisma
                    : setParameters({ ...parameters, charisma: parameters.charisma - 1 })
                }
              />
            </div>
          </div>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            <div>
              Жизненная сила: {parameters.life} / {3 + parameters.strength}
            </div>
            <Button
              className={characterParamsStyle.damageButton}
              variant='contained'
              color='secondary'
              size='small'
              onClick={() =>
                parameters.life === 0 ? parameters.life : setParameters({ ...parameters, life: parameters.life - 1 })
              }
            >
              Урон
            </Button>
          </div>
          <div className={characterParamsStyle.paramsNameAndDistribution}> Уклонение : {10 + parameters.agility}</div>
          <div className={characterParamsStyle.paramsNameAndDistribution}>
            Энергичность : {parameters.agility + parameters.intelligence}
          </div>

          <Button
            variant='contained'
            color='primary'
            onClick={() => localStorage.setItem('stats', JSON.stringify(parameters))}
          >
            Сохранить раскачку характеристик
          </Button>

          <CharacterSkills
            strength={parameters.strength}
            agility={parameters.agility}
            intelligence={parameters.intelligence}
            charisma={parameters.charisma}
          />
        </>
      )}
    </div>
  )
}

export default CharacterParams
