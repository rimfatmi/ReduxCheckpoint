import "App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import Home from "./Components/Home";
import Filter from "./component/Filter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/list" component={TaskList} />
          <Route path="/Filter" component={Filter} />

          <Route path="/add" component={AddTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
