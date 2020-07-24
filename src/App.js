import React from 'react';
import './App.scss';
import SuperHeroList from './components/SuperHeroList';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SuperHeroDetails from './components/SuperHeroDetails/SuperHeroDetails';

function App() {
  return (

  <div className="App">
      <div className="main">
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={SuperHeroList} />
              <Route path="/heroes/:heroId" component={SuperHeroDetails} />
            </Switch>

          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
