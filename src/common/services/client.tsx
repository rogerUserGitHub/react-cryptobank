import React, { useEffect, useState } from 'react';
import Datagrid from './common/components/Datagrid';

export default function DoApiCall() {
  const [query, setQuery] = useState('');
  const [cardName, setCardName] = useState([{}]);
  const [hasError, setError] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };

  const search = (evt: { key: string }) => {
    if (evt.key === 'Enter') {
      try {
        fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${query}`, options)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            setCardName(result);
          });
      } catch (error) {
        setError(true);
      }
      if (hasError) {
        console.log(hasError);
        setCardName([{}]);
      }
    }
  };

  return (
    <main>
      <div>
        <input
          type='text'
          className='search-bar'
          placeholder='Type in the name of a card...'
          // get value of input of types input
          onChange={e => setQuery(e.target.value)}
          // bind value to query
          value={query}
          onKeyPress={search}
        />
      </div>
      {/* checks if weather.main (city name value in object is not undefined)*/}
      {(cardName.main != 'undefined') ? (
        <div>
          <div className='result-box'>
            <div className='location'>
              <output>{cardName[0].faction}</output>
            </div>
          </div>
        </div>
      ) : ( <div>
        <div className='result-box'>
          <div className='location'>
            <output>no result</output>
          </div>
        </div>
      </div> )}
    </main>
  );
}
