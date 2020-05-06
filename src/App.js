import React, { Component } from 'react';
import News from './News'
import IndexPage from './IndexPage'
import Show from './Show'
import CoronaNews from './CoronaNews'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path='/countries' component= {IndexPage} />
            <Route path='/show/:id' component= {Show} />
            <Route path= '/news/:id' component ={News} />
            <Route path= '/corona/:id' component ={CoronaNews} />
          </Switch>
        </div>
      </BrowserRouter>
     
    )
  }
}


export default App;
