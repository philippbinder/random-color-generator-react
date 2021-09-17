import { useState } from 'react';

const randomColor = require('randomcolor');
const color = randomColor();

function App() {
  const [divcolor, setDivcolor] = useState(color); // maybe emoty value
  // const coloredDiv = css`
  //   background-color: ${color};
  // `;
  return (
    <div
      style={{
        backgroundColor: 'black',
        marginTop: 0,
      }}
    >
      <div
        style={{
          width: 600,
          height: 300,
          border: '10px solid grey',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 100,
          backgroundColor: 'yellow',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          {' '}
          Surprise! Another Random Color Generator!!!{' '}
        </h1>
        <h2
          style={{
            textAlign: 'center',
          }}
        >
          {' '}
          Waste your time and match the colors!{' '}
        </h2>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {' '}
          {
            `I am ${divcolor}. Click until the matching color appears.` /* prints out the hex code, backticks make plain text a string literal and the $ enables me to search the code, so with the {} I am able to find the const that contains the random */
          }{' '}
        </p>
        <div
          style={{
            // display: 'flex',
            // flexWrap: 'wrap',
            // textAlign: 'center',
            height: 40,
            width: 'auto',
            backgroundColor: `${divcolor}` /*  backticks to search for a variable from outside and inside the enitre code for the state variable that changes (or only the function since it's not globally defined?)  */,
          }}
        >
          {' '}
          I know I suck, but so does this button.{' '}
        </div>
        <button
          style={
            {
              // margipaddnLeft: 100,
              // marginRight: 'auto',
              // not working, want to move button to the center
            }
          }
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
    </div>
  );
}

export default App;

// function RandomDiv (props) {
//   return(
//     <div style={{}}> </div>
//   )
// }
