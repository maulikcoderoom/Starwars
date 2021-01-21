import React from 'react'
const characters = (props) => {

    return (

        
        <div className="form-group">
            <label htmlFor="sel1">Select Character:</label>
            <select className="form-control" id="sel1" onChange={props.changeHandler}>
                {props.characters.map(character => <option key={character.value} value={character.value}>{character.display}</option>)}
            </select>
        </div>



    )
}
export default characters;