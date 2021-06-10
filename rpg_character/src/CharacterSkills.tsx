import React, { useState } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox'
import characterSkillsStyle from './characterSkillsStyles.module.scss'

function CharacterSkills(params: { strength: number; agility: number; intelligence: number; charisma: number }) {
  const [attack, setAttack] = useState<number>(0)
  const [invisibility, setInvisibility] = useState<number>(0)
  const [bowShot, setBowShot] = useState<number>(0)
  const [learnability, setLearnability] = useState<number>(0)
  const [survival, setSurvival] = useState<number>(0)
  const [heal, setHeal] = useState<number>(0)
  const [fear, setFear] = useState<number>(0)
  const [insight, setInsight] = useState<number>(0)
  const [appearance, setAppearance] = useState<number>(0)
  const [manipulation, setManipulation] = useState<number>(0)
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
    if (stats > skillLevel && skillLevel < 5) setAttack(attack + 1)
  }
  const levelInvisibilityPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setInvisibility(invisibility + 1)
  }
  const levelBowShotPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setBowShot(bowShot + 1)
  }
  const levelLearnabilityPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setLearnability(learnability + 1)
  }
  const levelSurvivalPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setSurvival(survival + 1)
  }
  const levelHealPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setHeal(heal + 1)
  }
  const levelFearPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setFear(fear + 1)
  }
  const levelInsightPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setInsight(insight + 1)
  }
  const levelAppearancePlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setAppearance(appearance + 1)
  }
  const levelManipulationPlus = (stats: number, skillLevel: number) => {
    if (stats > skillLevel && skillLevel < 5) setManipulation(manipulation + 1)
  }

  return (
    <div className={characterSkillsStyle.wrapperDiv}>
      <div>
        <div className={characterSkillsStyle.iconDiv}>
          <img
            src='https://cdn2.iconfinder.com/data/icons/rpg-fantasy-game-skill-ui/512/game_skill_ui_sword_attack-512.png'
            alt={'attack'}
            width='30'
            height='30'
          />
          Атака : {attack}
        </div>
        <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(attack)}</div>
        <div>
          <AddBoxIcon onClick={() => levelAttackPlus(params.strength, attack)} />
          <IndeterminateCheckBoxIcon onClick={() => (attack === 0 ? attack : setAttack(attack - 1))} />
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
          Стелс : {invisibility}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(invisibility)} </div>
        <div>
          <AddBoxIcon onClick={() => levelInvisibilityPlus(params.agility, invisibility)} />
          <IndeterminateCheckBoxIcon
            onClick={() => (invisibility === 0 ? invisibility : setInvisibility(invisibility - 1))}
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
          Стрельба из лука : {bowShot}
        </div>
        <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(bowShot)}</div>
        <div>
          <AddBoxIcon onClick={() => levelBowShotPlus(params.agility, bowShot)} />
          <IndeterminateCheckBoxIcon onClick={() => (bowShot === 0 ? bowShot : setBowShot(bowShot - 1))} />
        </div>
      </div>
      <div>
        <div className={characterSkillsStyle.iconDiv}>
          <img src='https://img.icons8.com/ios/452/learning.png' alt={'learn'} width='30' height='30' />
          Обучаемость : {learnability}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(learnability)} </div>
        <div>
          <AddBoxIcon onClick={() => levelLearnabilityPlus(params.intelligence, learnability)} />
          <IndeterminateCheckBoxIcon
            onClick={() => (learnability === 0 ? learnability : setLearnability(learnability - 1))}
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
          Выживание : {survival}
        </div>
        <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(survival)}</div>
        <div>
          <AddBoxIcon onClick={() => levelSurvivalPlus(params.intelligence, survival)} />
          <IndeterminateCheckBoxIcon onClick={() => (survival === 0 ? survival : setSurvival(survival - 1))} />
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
          Медицина : {heal}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(heal)}</div>
        <div>
          <AddBoxIcon onClick={() => levelHealPlus(params.intelligence, heal)} />
          <IndeterminateCheckBoxIcon onClick={() => (heal === 0 ? heal : setHeal(heal - 1))} />
        </div>
      </div>
      <div>
        <div className={characterSkillsStyle.iconDiv}>
          <img src='https://static.thenounproject.com/png/3028821-200.png' alt={'fear'} width='30' height='30' />
          Запугивание : {fear}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(fear)} </div>
        <div>
          <AddBoxIcon onClick={() => levelFearPlus(params.charisma, fear)} />
          <IndeterminateCheckBoxIcon onClick={() => (fear === 0 ? fear : setFear(fear - 1))} />
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
          Проницательность : {insight}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(insight)} </div>
        <div>
          <AddBoxIcon onClick={() => levelInsightPlus(params.charisma, insight)} />
          <IndeterminateCheckBoxIcon onClick={() => (insight === 0 ? insight : setInsight(insight - 1))} />
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
          Внешний вид : {appearance}
        </div>
        <div className={characterSkillsStyle.levelMargin}>Уровень : {levelName(appearance)} </div>
        <div>
          <AddBoxIcon onClick={() => levelAppearancePlus(params.charisma, appearance)} />
          <IndeterminateCheckBoxIcon onClick={() => (appearance === 0 ? appearance : setAppearance(appearance - 1))} />
        </div>
      </div>
      <div>
        <div className={characterSkillsStyle.iconDiv}>
          <img src='https://static.thenounproject.com/png/1714268-200.png' alt={'bow'} width='30' height='30' />
          Манипулирование : {manipulation}
        </div>
        <div className={characterSkillsStyle.levelMargin}> Уровень : {levelName(manipulation)} </div>
        <div>
          <AddBoxIcon onClick={() => levelManipulationPlus(params.charisma, manipulation)} />
          <IndeterminateCheckBoxIcon
            onClick={() => (manipulation === 0 ? manipulation : setManipulation(manipulation - 1))}
          />
        </div>
      </div>
    </div>
  )
}

export default CharacterSkills
