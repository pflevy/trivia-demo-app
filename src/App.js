import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import store from "./redux";
import { Provider } from "react-redux";
import HomeContainer from "./trivia/home/homeContainer/homeContainer";
import QuizContainer from "./trivia/quiz/quizContainer/quizContainer";
import classes from "./App.module.css";
import ResultsContainer from "./trivia/results/resultsContainer/resultsContainer";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/home" component={HomeContainer} />
              <Route exact path="/quiz" component={QuizContainer} />
              <Route exact path="/results" component={ResultsContainer} />
              <Redirect to="/home" />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
