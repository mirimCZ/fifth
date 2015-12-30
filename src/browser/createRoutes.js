import App from './app/App.react'
import Home from './home/Page.react'
import NotFound from './notfound/Page.react'
import React from 'react'
import {IndexRoute, Route} from 'react-router'
import Game from './game'

export default function createRoutes(getState) {

  function requireAuth(nextState, replaceState) {
    const loggedInUser = getState().users.viewer;
    if (!loggedInUser) {
      replaceState({nextPathname: nextState.location.pathname}, '/login');
    }
  }

  return (
    <Route component={App} path="/">
      <IndexRoute component={Home} />
      <Route component={Game.Board} path="board" />
      <Route component={NotFound} path="*" />
    </Route>
  );

}
