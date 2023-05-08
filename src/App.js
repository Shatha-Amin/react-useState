import React from "react"
import Colors from "./Components/Colors.jsx"
import Counter from "./Components/Counter.jsx";
import TodoApp from "./Components/ToDo.jsx";
import Signup from "./Components/Signup.jsx";
function App() {
  return <div className="App">
  <Counter/>
  <hr/>
  <Colors/>
  <hr/>

  <TodoApp/>
  <hr/>

  <Signup/>
  </div>;

}

export default App;
