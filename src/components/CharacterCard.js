import React from 'react';

function CharacterCard({character}) {
    const quotes = character.quotes

    return (
        <div className="card">
            <div>
                <h3 className='card-header-title'>{character.displayName}</h3>
                <img src={character.sprite} alt={character.displayName}/>
                <p className="information">FULL NAME:</p><span className="charInfo">{character.fullName}</span>
                <p className="information">SPECIES:</p><span className="charInfo">{character.species}</span>
                <p className="information">SEX:</p><span className="charInfo">{character.sex}</span>
                {quotes.map(quote => <p key={quote}>{quote}</p>)}
            </div>
        </div>
    );
}

export default CharacterCard;