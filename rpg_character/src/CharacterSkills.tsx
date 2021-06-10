import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import characterSkillsStyle from './characterSkillsStyles.module.scss'
import { Button } from '@material-ui/core'

function CharacterSkills(params: { strength: number; agility: number; intelligence: number; charisma: number }) {
  const [data, setData] = useState({
    attack: 0,
    invisibility: 0,
    bowShot: 0,
    learnability: 0,
    survival: 0,
    heal: 0,
    fear: 0,
    insight: 0,
    appearance: 0,
    manipulation: 0,
  })

  useEffect(() => {
    const LocalData = localStorage.getItem('skills')
    setData(LocalData ? JSON.parse(LocalData) : data)
  }, [])

  const levelName = (level: number) => {
    switch (level) {
      case 0:
        return 'Нетренированный'
      case 1:
        return 'Новичок'
      case 2:
        return 'Ученик'
      case 3:
        return 'Адепт'
      case 4:
        return 'Эксперт'
      case 5:
        return 'Мастер'
    }
  }
  const levelAttackPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, attack: data.attack + 1 })
  }
  const levelInvisibilityPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, invisibility: data.invisibility + 1 })
  }
  const levelBowShotPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, bowShot: data.bowShot + 1 })
  }
  const levelLearnabilityPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, learnability: data.learnability + 1 })
  }
  const levelSurvivalPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, survival: data.survival + 1 })
  }
  const levelHealPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, heal: data.heal + 1 })
  }
  const levelFearPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, fear: data.fear + 1 })
  }
  const levelInsightPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, insight: data.insight + 1 })
  }
  const levelAppearancePlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, appearance: data.appearance + 1 })
  }
  const levelManipulationPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setData({ ...data, manipulation: data.manipulation + 1 })
  }

  return (
    <>
      <div className={characterSkillsStyle.wrapperDiv}>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-skill-ui/512/game_skill_ui_sword_attack-512.png'
              alt={'attack'}
              width='30'
              height='30'
            />
            Атака : {data.attack}
          </div>
          <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(data.attack)}</div>
          <div>
            <AddBoxIcon onClick={() => levelAttackPlus(params.strength, data.attack)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.attack === 0 ? data.attack : setData({ ...data, attack: data.attack - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://static.thenounproject.com/png/1223766-200.png'
              alt={'invisibility'}
              width='30'
              height='30'
            />
            Стелс : {data.invisibility}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.invisibility)} </div>
          <div>
            <AddBoxIcon onClick={() => levelInvisibilityPlus(params.agility, data.invisibility)} />
            <IndeterminateCheckBoxIcon
              onClick={() =>
                data.invisibility === 0 ? data.invisibility : setData({ ...data, invisibility: data.invisibility - 1 })
              }
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-bow-icon-png-image_3784384.jpg'
              alt={'bow'}
              width='30'
              height='30'
            />
            Стрельба из лука : {data.bowShot}
          </div>
          <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(data.bowShot)}</div>
          <div>
            <AddBoxIcon onClick={() => levelBowShotPlus(params.agility, data.bowShot)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.bowShot === 0 ? data.bowShot : setData({ ...data, bowShot: data.bowShot - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img src='https://img.icons8.com/ios/452/learning.png' alt={'learn'} width='30' height='30' />
            Обучаемость : {data.learnability}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.learnability)} </div>
          <div>
            <AddBoxIcon onClick={() => levelLearnabilityPlus(params.intelligence, data.learnability)} />
            <IndeterminateCheckBoxIcon
              onClick={() =>
                data.learnability === 0 ? data.learnability : setData({ ...data, learnability: data.learnability - 1 })
              }
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://cdn.iconscout.com/icon/premium/png-512-thumb/survival-1579998-1337780.png'
              alt={'survival'}
              width='30'
              height='30'
            />
            Выживание : {data.survival}
          </div>
          <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(data.survival)}</div>
          <div>
            <AddBoxIcon onClick={() => levelSurvivalPlus(params.intelligence, data.survival)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.survival === 0 ? data.survival : setData({ ...data, survival: data.survival - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://i.pinimg.com/736x/e4/11/bb/e411bb663600fdc02f64d72db214b964.jpg'
              alt={'heal'}
              width='30'
              height='30'
            />
            Медицина : {data.heal}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.heal)}</div>
          <div>
            <AddBoxIcon onClick={() => levelHealPlus(params.intelligence, data.heal)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.heal === 0 ? data.heal : setData({ ...data, heal: data.heal - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img src='https://static.thenounproject.com/png/3028821-200.png' alt={'fear'} width='30' height='30' />
            Запугивание : {data.fear}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.fear)} </div>
          <div>
            <AddBoxIcon onClick={() => levelFearPlus(params.charisma, data.fear)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.fear === 0 ? data.fear : setData({ ...data, fear: data.fear - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://www.pngitem.com/pimgs/m/10-107005_data-insight-icon-png-transparent-png.png'
              alt={'insight'}
              width='30'
              height='30'
            />
            Проницательность : {data.insight}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.insight)} </div>
          <div>
            <AddBoxIcon onClick={() => levelInsightPlus(params.charisma, data.insight)} />
            <IndeterminateCheckBoxIcon
              onClick={() => (data.insight === 0 ? data.insight : setData({ ...data, insight: data.insight - 1 }))}
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img
              src='https://image.flaticon.com/icons/png/512/1100/1100571.png'
              alt={'appearance'}
              width='30'
              height='30'
            />
            Внешний вид : {data.appearance}
          </div>
          <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(data.appearance)} </div>
          <div>
            <AddBoxIcon onClick={() => levelAppearancePlus(params.charisma, data.appearance)} />
            <IndeterminateCheckBoxIcon
              onClick={() =>
                data.appearance === 0 ? data.appearance : setData({ ...data, appearance: data.appearance - 1 })
              }
            />
          </div>
        </div>
        <div>
          <div className={characterSkillsStyle.iconDiv}>
            <img src='https://static.thenounproject.com/png/1714268-200.png' alt={'bow'} width='30' height='30' />
            Манипулирование : {data.manipulation}
          </div>
          <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(data.manipulation)} </div>
          <div>
            <AddBoxIcon onClick={() => levelManipulationPlus(params.charisma, data.manipulation)} />
            <IndeterminateCheckBoxIcon
              onClick={() =>
                data.manipulation === 0 ? data.manipulation : setData({ ...data, manipulation: data.manipulation - 1 })
              }
            />
          </div>
        </div>
      </div>
      <Button
        variant='contained'
        color='primary'
        onClick={(event) => localStorage.setItem('skills', JSON.stringify(data))}
      >
        Сохранить раскачку способностей
      </Button>
    </>
  )
}

export default CharacterSkills
