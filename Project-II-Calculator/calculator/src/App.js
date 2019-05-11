import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

// const calcNumbers = [
//   {symbol: "clear", id: "clear"},
//   {symbol: 7, id: 7},
//   {symbol: 8, id: 8},
//   {symbol: 9, id: 9},
//   {symbol: 4, id: 4},
//   {symbol: 5, id: 5},
//   {symbol: 6, id: 6},
//   {symbol: 1, id: 1},
//   {symbol: 2, id: 2},
//   {symbol: 3, id: 3},
//   {symbol: 0, id: 0}
// ];

// const symbols = [
//   {
//     id: "divide",
//     operator: "%"
//   },
//   {
//     id: "multiply",
//     operator: "X"
//   },
//   {
//     id: "subtract",
//     operator: "-"
//   },
//   {
//     id: "add",
//     operator: "+"
//   },
//   {
//     id: "equals",
//     operator: "="
//   }
// ];

const App = () => {
  return (
    <div className='display'>
      <CalculatorDisplay />
      {/* {
        calcNumbers.map(number => {
          return <NumberButton text={number.symbol} />
        })
      }
      {
        symbols.map(symbol => {
          return <ActionButton text={symbol.operator} />
        })
      } */}
      <div className='buttons'>
        <div className='firstRowButtons'>
          <ActionButton buttonStyle={'clearButton'} text='CLEAR' />
          <ActionButton buttonStyle={'actionButton'} text='%' />
        </div>
        <div className='secondRowButtons'>
          <NumberButton buttonStyle={'numberButton'} text='7' />
          <NumberButton buttonStyle={'numberButton'} text='8' />
          <NumberButton buttonStyle={'numberButton'} text='9' />
          <ActionButton buttonStyle={'actionButton'} text='X' />
        </div>
        <div className='thirdRowButtons'>
          <NumberButton buttonStyle={'numberButton'} text='4' />
          <NumberButton buttonStyle={'numberButton'} text='5' />
          <NumberButton buttonStyle={'numberButton'} text='6' />
          <ActionButton buttonStyle={'actionButton'} text='-' />
        </div>
        <div className='fourthRowButtons'>
          <NumberButton buttonStyle={'numberButton'} text='1' />
          <NumberButton buttonStyle={'numberButton'} text='2' />
          <NumberButton buttonStyle={'numberButton'} text='3' />
          <ActionButton buttonStyle={'actionButton'} text='+' />
        </div>
        <div className='fifthRowButtons'>
          <ActionButton buttonStyle={'zeroButton'} text='0' />
          <ActionButton buttonStyle={'actionButton'} text='=' />
        </div>  
      </div>
    </div>
  );
};

export default App;
