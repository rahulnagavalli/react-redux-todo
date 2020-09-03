import TodoHeader from "../todo-header/TodoHeader";
import * as React from "react";
import "./App.css";
import TaskList from "../task-list/TaskList";
import { IState } from "./types/IState";
import { IProps } from "./types/IProps";
import { connect } from "react-redux";
import { IAppState } from "../../store/AppStore";
import { default as TaskForm } from "../task-form/TaskForm";
import NameForm from "../name-form/NameForm";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class App extends React.Component<IProps, IState> {
  constructor(props: IProps, context: any) {
    super(props, context);
  }

  public MainContent = () => {
    return (
      <div className="App">
        <TodoHeader name={this.props.name} />
        <TaskForm />
        <br />
        <NameForm />
        <br />
        <TaskList tasks={this.props.tasks} />
        <Link to="/test">Click to go to next route</Link>
      </div>
    );
  };

  public TestContent = () => {
    return <div> Testing routing</div>;
  };

  public render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <this.MainContent />
          </Route>
          <Route exact={true} path="/test">
            <this.TestContent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  tasks: state.tasks,
  name: state.name.name,
});

export default connect(mapStateToProps)(App);
