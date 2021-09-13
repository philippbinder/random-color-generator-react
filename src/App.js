import './App.css';

// const chalk = require('chalk'); // npm Chalk
const randomColor = require('randomcolor'); // import the script npm randomcolor
// ex for color: #ea09ef
const color = randomColor({
  // luminosity: process.argv[1],
  // hue: process.argv[2],
});
console.log('test', typeof color); // use typeof something to check datatype, careful with array : will say it's an object but it's not (it's an array)
// object is loged with {}, array mit []!!!
console.log(typeof [1, 2, 3], Array.isArray([4, 5, 6])); // isArray checks if whatever is written before it s actually an array
function ColorStuff() {
  // create funcion that creates div that is to be colored by the CSS part
  return (
    // the {} are used to activate CSS with the inline styles; the part inside the {} of styles is the object
    // the first curly brackets tell JSX (the html part) that I am about to use JS.
    // the scond curly brackets are a JS object but styled with CSS syntax mixed - tell that have opropeties of CSS and call a JS object with JS properties that look like CSS properties
    <div
      className="coloredElement"
      style={{
        fontSize: 70,
        width: '300px',
        height: '200px',
        backgroundColor: color, //randomColor(), both call the function to create a random color
      }}
    >
      <div> {color /* the curly brackets call JS?*/} </div>
    </div>
  );
}
// .coloredElement // create CSS part that styles the div to a box with the color from the random color generator

export default ColorStuff;
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
