import './App.css';
// import { css, jsx } from '@emotion/react';
// import './styles.css';
import { useState } from 'react';

const randomColor = require('randomcolor');
const color = randomColor();

function App() {
  const [divcolor, setDivcolor] = useState(color); // maybe emoty value
  // const coloredDiv = css`
  //   background-color: ${color};
  // `;
  return (
    <div>
      <h1> Random Color Generator - React </h1>
      <p>
        {' '}
        {
          `I am ${color}. If you don't like me, click me away.` /* prints out the hex code, backticks make plain text a string literal and the $ enables me to search the code, so with the {} I am able to find the const that contains the random */
        }{' '}
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: 100,
          width: 500,
          backgroundColor: `${divcolor}` /*  backticks to search for a variable from outside and inside the enitre code for the state variable that changes (or only the function since it's not globally defined?)  */,
        }}
      >
        {' '}
        I know I suck, but so does this button.{' '}
      </div>
      <button
        onClick={() =>
          setDivcolor(
            randomColor() /* onClick triggers on Click and the arrow functions tells it to fire up the setDivcolor function from the state variable which contains the random color. randomColor() is taken from the documentation of it's library and runs it's function / method. */,
          )
        }
      >
        {' '}
        Generate Random Color{' '}
      </button>
    </div>
  );
}

export default App;

// function RandomDiv (props) {
//   return(
//     <div style={{}}> </div>
//   )
// }
