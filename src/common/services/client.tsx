import { useState, useEffect } from 'react';

export default function GetCardByName() {
  const [query, setQuery] = useState(' ');
  const [cardDetails, setCardDetails] = useState([{}]);
  const [hasError, setError] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6945d9a517msh8b1d924b670b723p1fc407jsn96e412329fb7',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };

  // useEffect(() => {
  //   try {
  //     fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${query}`, options)
  //       .then(response => response.json())
  //       .then(result => {
  //         console.log(result);
  //         setCardDetails(result);
  //         setQuery(' ')
  //       });
  //   } catch (error) {
  //     setError(true);
  //   }
  //   if (hasError) {
  //     console.log(hasError);
  //     return;
  //     //setCardDetails([{}]);
  //   }
    
  // }, [])

  const search = (evt: { key: string }) => {
    if (evt.key === 'Enter') {
      try {
        fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${query}`, options)
          .then(response => response.json())
          .then(result => {
            console.log(result);
            setCardDetails(result);
            setQuery(' ')
          });
      } catch (error) {
        setError(true);
      }
      if (hasError) {
        console.log(hasError);
        //setCardDetails([{}]);
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
          //onKeyPress={search}
        />
      </div>
      {/* checks if weather.main (city name value in object is not undefined)*/}
      {/* {(cardDetails.main != 'undefined') ? (
        <div>
          <div className='result-box'>
            <div className='location'>
              <output>{cardDetails[0].faction}</output>
            </div>
          </div>
        </div>
      ) : ( <div>
        <div className='result-box'>
          <div className='location'>
            <output>no result</output>
          </div>
        </div>
      </div> )} */}
    </main>
  );
}
