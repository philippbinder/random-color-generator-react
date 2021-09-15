import './App.css';
import { ClassNames, css, jsx } from '@emotion/react';
import { useState } from 'react';

const randomColor = require('randomcolor'); // import the script npm randomcolor
// ex for color: #ea09ef
const color = randomColor({
  // luminosity: process.argv[1],
  // hue: process.argv[2],
});

// https://www.npmjs.com/package/@emotion/react
// /** @jsxImportSource @emotion/react */

// import './styles.css';

// useState und hook
// useState ist eine Variable die unter anderem auch auf Userinput geupdatet wird
// brauche components, props
// const chalk = require('chalk'); // npm Chalk
const rColor = require('randomcolor'); // import the script npm randomcolor
// ex for color: #ea09ef
const someColor = rColor();
// useState !!! 2tes Video vom Montag
const buttonStyle = css`
  background-color: red;
  /* justify-content: center;
  align-content: center; dont work */
`; // css von emotion und bewirkt, dass die folgenden properties und values dieser Variablen eigen sind

/* $ inside backticks `` um etwas zu suchen */
console.log('someColor', someColor);
// return coloredElement;
// css selector with emotion to grab the backgroundcolor of my div and then embed this component insinde the click event of my button
// console.log('test', typeof color); // use typeof something to check datatype, careful with array : will say it's an object but it's not (it's an array)
// object is loged with {}, array mit []!!!
// console.log(typeof [1, 2, 3], Array.isArray([4, 5, 6])); // isArray checks if whatever is written before it s actually an array
function ColorStuff() {
  // create funcion that creates div that is to be colored by the CSS part
  const [divColor, setDivColor] = useState('');

  const coloredDiv = css`
    background-color: ${someColor};
  `;
  // emotion code to say what coloredDiv should look like
  // reruns on onClick event

  return (
    // the {} are used to activate CSS with the inline styles; the part inside the {} of styles is the object
    // the first curly brackets tell JSX (the html part) that I am about to use JS.
    // the scond curly brackets are a JS object but styled with CSS syntax mixed - tell that have opropeties of CSS and call a JS object with JS properties that look like CSS properties
    <div
      css={coloredDiv} // comes from emotion and uses the declared variable
      className="coloredElement" // not necessary for inline styles
      style={{
        fontSize: 70,
        fontStyle: 'oblique',
        // width: '300px',
        // height: '200px',
        backgroundColor: color, // randomColor(), both call the function to create a random color
        display: 'flexbox',
        marginLeft: '200px',
        marginRight: '200px',
        marginTop: '130px',
      }}
    >
      <p
        styles={{
          justifyContent: 'center',
        }}
      >
        {`The color code is shown
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        bellow:
        ${color}`
      </p>
      {divColor}
      <button onClick={setDivColor}>Click to generate random color.</button>
    </div>
  );
}
//  type="button" css={buttonStyle} nicht notwednig für Button?
// .coloredElement // create CSS part that styles the div to a box with the color from the random color generator

// function SecondColor () {
//   return (
//     <div> </div>
//   )
// }

export default ColorStuff;
// export default SecondColor;
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
