import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/home/Home'
import AboutPage from '../pages/about/About'

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutPage}/>
      </Switch>
    </HashRouter>
  )
}
