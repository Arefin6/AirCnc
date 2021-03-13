import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import NotFound from './components/NotFound';
import HomePage from './Pages/HomePage';


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path='/'>
         <HomePage></HomePage>
       </Route>
       <Route  path='*'>
         <NotFound></NotFound>
       </Route>

     </Switch>
   </Router>
  );
}

export default App;
