
import React, { useState } from 'react';
import './App.css';
import PopUp from './PopUp';

function App() {
  const [value, setValue] = useState(null)
  const [numbersArr, setNumbersArr] = useState([])
  const [gridLayout, setGridLayout] = useState(value);
  const [firstIndex, setFirstIndex] = useState(null);
  const [lastIndex, setLastIndex] = useState(null);
  const [sorted, setSorted] = useState(false)

  const createArray = () => {
    setGridLayout(value)
    const length = value * value;
    const numbersArray = [];
    Array.apply(null, { length: length }).map(( index) => {
      numbersArray.push(parseInt(index) + 1)
    }
    )
    setNumbersArr(numbersArray.sort(function () { return Math.random() - 0.5 }))
  }

  const handleDragStart = (index) => {
    setFirstIndex(index)
  };

  const handleDragEnter = (index) => {
    setLastIndex(index)
  };

  const handleDrop = () => {
    if (firstIndex >= 0 && lastIndex >= 0) {
      const updateNumbersArr = [...numbersArr];
      const tmp_value = updateNumbersArr[firstIndex]
      updateNumbersArr[firstIndex] = updateNumbersArr[lastIndex];
      updateNumbersArr[lastIndex] = tmp_value;

      const isSorted = updateNumbersArr.every((v, i, a) => !i || a[i - 1] <= v);
      setNumbersArr(updateNumbersArr)
      if (isSorted === true) {
        setSorted(isSorted)
      }
    }
  };

  return (
    <div className="App">
      {
        sorted ? <PopUp closePopUp={setSorted} /> : null
      }

      <div className='main'>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <input
            style={{ padding: '10px', marginTop: '10px' }}
            type='number'
            placeholder='Please Enter Number'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={createArray} style={{ width: '12%', backgroundColor: 'green', color: 'white', padding: '11px', marginTop: '10px', marginLeft: '16px', border: 'none', borderRadius: '6px', }}>Submit</button>
        </div>
        <div className="grid-container"

          style={{ display: 'grid', gridTemplateColumns: `repeat(${gridLayout}, auto)` }}
        >
          {
            numbersArr.map((item, index) => (
              <div draggable={true}
                key={index}
                onDragStart={() => handleDragStart(index)}
                onDragEnter={() => handleDragEnter(index)}
                onDrop={(e) => handleDrop()}
                onDragOver={(e) => e.preventDefault()}
                className="grid-item">
                {item}
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
