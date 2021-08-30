import React from 'react';
import './App.css';
import NameForm from './components/NameForm';
import ReviewForm from './components/ReviewForm'
import Confirmation from './components/Confirmation'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NameForm}/>
          <Route exact path="/review" component={ReviewForm}/>
          <Route exact path="/confirmation" component={Confirmation}/>
          <Route exact path="/submit" component={()=><div>Review Submited</div>}/>
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
