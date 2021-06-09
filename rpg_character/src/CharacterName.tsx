import React, {useState} from 'react';
import {ButtonGroup, Input, Button} from '@material-ui/core';


function CharacterName() {
    const [name, setName] = useState<string>("")


    return (
        <div>
            <div>Введите имя персонажа</div>
            <div>
                <div>{name}</div>
                <Input value={name}
                       onChange={event => setName(event.target.value)}/>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>Изменить</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default CharacterName;
