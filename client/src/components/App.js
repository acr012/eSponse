import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';  //allow components to call action creators
import * as actions from '../actions';

//Components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

//View Layer Setup
class App extends Component {
  // lifecylce method:
  // upon render -> fetchUser
  componentDidMount() {
    this.props.fetchUser();
  }
  render(){
    return (
        <BrowserRouter>
          <div className="container">
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}
//pass actions to app as props
export default connect(null, actions)(App);
