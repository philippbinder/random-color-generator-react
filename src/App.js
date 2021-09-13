import './App.css';

const chalk = require('chalk'); // npm Chalk
const randomColor = require('randomcolor'); // import the script npm randomcolor
const color = randomColor({
  luminosity: process.argv[1],
  hue: process.argv[2],
});
// @emotion/css

// function App() {
// return (
//   <div className="coloredElement">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
// }

function ColorStuff() {
  // create funcion that creates div that is to be colored by the CSS part
  return (
    // the {} are used to activate CSS with the inline styles; the part inside the {} of styles is the object
    <div
      className="coloredElement"
      style={{
        fontSize: 70,
        width: '300px',
        height: '200px',
        backgroundColor: 'red',
      }}
    ></div>
  );
}

// .coloredElement // create CSS part that styles the div to a box with the color from the random color generator

export default ColorStuff;

// import randomColor from 'randomcolor';
// import fs from 'fs'; // part of node-fetch
// const fs = require('fs');

/*
Design and develop a random color generator web application using React that shows the hex code and changes the color of some element.

    Design the web app: Sketch the design out on paper out or use a tool like Figma for this
    Come up with a list of React components that you will need to build for this
    Describe how each component will interact with the other components
    Identify any unknowns
    Build the app


  - get a random color generator
  - outprint the color code
  - create some element that can be colored
  - color the element based on the outprinted color code
  - user input should call all this
*/
