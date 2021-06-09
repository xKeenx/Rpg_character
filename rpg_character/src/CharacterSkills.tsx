import React, {useState} from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';


function CharacterSkills(params:{strength:number, agility:number, intelligence:number,charisma:number}) {
    const [attack, setAttack] = useState<number>(0)
    const [invisibility, setInvisibility] = useState<number>(0)
    const [bowShot, setBowShot] = useState<number>(0)
    const [learnability, setLearnability] = useState<number>(0)
    const [survival, setSurvival] = useState<number>(0)
    const [heal,setHeal] = useState<number>(0)
    const [fear, setFear] = useState<number>(0)
    const [insight, setInsight] = useState<number>(0)
    const [appearance, setAppearance] = useState<number>(0)
    const [manipulation,setManipulation] = useState<number>(0)
    const levelName = (level:number)=>{
        switch (level){
            case 0 : return "Нетренированный"
            case 1 : return "Новичок"
            case 2 : return "Ученик"
            case 3 : return "Адепт"
            case 4 : return "Эксперт"
            case 5 : return "Мастер"
        }
    }
    const levelAttackPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setAttack(attack + 1)
    }
    const levelInvisibilityPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setInvisibility(invisibility + 1)
    }
    const levelBowShotPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setBowShot(bowShot + 1)
    }
    const levelLearnabilityPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setLearnability(learnability + 1)
    }
    const levelSurvivalPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setSurvival(survival + 1)
    }
    const levelHealPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setHeal(heal + 1)
    }
    const levelFearPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setFear(fear + 1)
    }
    const levelInsightPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setInsight(insight + 1)
    }
    const levelAppearancePlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setAppearance(appearance + 1)
    }
    const levelManipulationPlus=(stats:number,skillLevel:number)=>{
        if(stats > skillLevel && skillLevel < 5)
            setManipulation(manipulation + 1)
    }

    return (
        <div>
        <div>
            Атака : {attack}
            Уровень : {levelName(attack)}
            <AddBoxIcon onClick={() => levelAttackPlus(params.strength,attack)}/>
            <IndeterminateCheckBoxIcon onClick={() => attack === 0 ? attack : setAttack(attack - 1)}/>
        </div>
            <div>
                Стелс : {invisibility}
                Уровень : {levelName(invisibility)}
                <AddBoxIcon onClick={() => levelInvisibilityPlus(params.agility,invisibility)}/>
                <IndeterminateCheckBoxIcon onClick={() => invisibility === 0 ? invisibility : setInvisibility(invisibility - 1)}/>
            </div>
            <div>
                Стрельба из лука : {bowShot}
                Уровень : {levelName(bowShot)}
                <AddBoxIcon onClick={() => levelBowShotPlus(params.agility,bowShot)}/>
                <IndeterminateCheckBoxIcon onClick={() => bowShot === 0 ? bowShot : setBowShot(bowShot - 1)}/>
            </div>
            <div>
                Обучаемость : {learnability}
                Уровень : {levelName(learnability)}
                <AddBoxIcon onClick={() => levelLearnabilityPlus(params.intelligence,learnability)}/>
                <IndeterminateCheckBoxIcon onClick={() => learnability === 0 ? learnability : setLearnability(learnability - 1)}/>
            </div>
            <div>
                Выживание : {survival}
                Уровень : {levelName(survival)}
                <AddBoxIcon onClick={() => levelSurvivalPlus(params.intelligence,survival)}/>
                <IndeterminateCheckBoxIcon onClick={() => survival === 0 ? survival : setSurvival(survival - 1)}/>
            </div>
            <div>
                Медицина : {heal}
                Уровень : {levelName(heal)}
                <AddBoxIcon onClick={() => levelHealPlus(params.intelligence,heal)}/>
                <IndeterminateCheckBoxIcon onClick={() => heal === 0 ? heal : setHeal(heal - 1)}/>
            </div>
            <div>
                Запугивание : {fear}
                Уровень : {levelName(fear)}
                <AddBoxIcon onClick={() => levelFearPlus(params.charisma,fear)}/>
                <IndeterminateCheckBoxIcon onClick={() => fear === 0 ? fear : setFear(fear - 1)}/>
            </div>
            <div>
                Проницательность : {insight}
                Уровень : {levelName(insight)}
                <AddBoxIcon onClick={() => levelInsightPlus(params.charisma,insight)}/>
                <IndeterminateCheckBoxIcon onClick={() => insight === 0 ? insight : setInsight(insight - 1)}/>
            </div>
            <div>
                Внешний вид : {appearance}
                Уровень : {levelName(appearance)}
                <AddBoxIcon onClick={() => levelAppearancePlus(params.charisma,appearance)}/>
                <IndeterminateCheckBoxIcon onClick={() => appearance === 0 ? appearance : setAppearance(appearance - 1)}/>
            </div>
            <div>
                Манипулирование : {manipulation}
                Уровень : {levelName(manipulation)}
                <AddBoxIcon onClick={() => levelManipulationPlus(params.charisma,manipulation)}/>
                <IndeterminateCheckBoxIcon onClick={() => manipulation === 0 ? manipulation : setManipulation(manipulation - 1)}/>
            </div>

        </div>
    );
}

export default CharacterSkills;