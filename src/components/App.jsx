import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

export default App;

// Check out:
// State and Lifecycle -- https://reactjs.org/docs/state-and-lifecycle.html
// Introducing Hooks -- https://reactjs.org/docs/hooks-intro.html
// Should I use Hooks, classes, or a mix of both?
// -- https://reactjs.org/docs/hooks-faq.html#should-i-use-hooks-classes-or-a-mix-of-both
