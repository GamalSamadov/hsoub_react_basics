import './App.css';
import React from 'react';
import Title from "./Title";
import Text from "./Text";


// function App() {
//   return (
//     // <h1>Hello world</h1>
//     // React.createElement("h2", null, "Hello from createElement") // using crateElement
//     // React.createElement("h2", null, React.createElement("span", null, "Hello from createElement")) // putting the text into span using creteElement

//     /* 
    
//       So we don't use createElement usually, we just use JSX tags and the babel.js will do it like html tag automatically

//       Why we don't use just html tags, but use JSX? 
//       Answer:
//       Because the JSX is same JavaScript Code, and it works faster then DOM or BOM or just HTML tags.

//       Refferance between HTML tags & JSX:
//       1) if we not close a tag the html will run, but JSX does't!
//       2) JSX saves us from XSS (Cross site scripting), because it converts any value into it to string
//          for example: <h1> "<script> alert("Hacked!"); </script>" </h1>

//       In JSX:
//       Every tags should be put into a father div!

//       <h1></h1>
//       <h2></h2>
      
//       will give error

//       <div>
//         <h1></h1>
//         <h2></h2>
//       </div>

//       Correct, every tags in components should be into div

//       But this will do a problem, because there will be a lot of div tags.

//       This issue was solved with 16V of react, the solution is fragments

//       <React.Fragment>
//         <h1></h1>
//         <h2></h2>
//       </React.Fragment>

//       also we can do like this:

//       <>
//         <h1></h1>
//         <h2></h2>
//       </>
    
//     */

//       <>
//         <h1>Hello from Fragment</h1>
//         <h2>Hello again</h2>
//       </>
//   );
// }

/*

  There is two components, function component and class components:
  Function components are batter and faster!

*/

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleButtonClick = () => {
    console.log("Hello world");

  }

  handleIncrement = () => {
    // this.state.counter += 1; // does't work!
    this.setState({counter: this.state.counter + 1});
  }

  componentWillMount() {
    console.log("componentWillMount");
  } // batter to not use it

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    if (this.state.counter === 10) console.log("You have pressed 10 times");
  }

  render() {
    console.log("Hello Before Render!");
    return (
      <div>
        <Title content="HsoubAcademy" />
        <Text>
          <p>Some child text1</p>
          <button onClick={this.handleButtonClick}>Click me</button>
        </Text>

        <p>{this.state.counter}</p>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}

export default App;
