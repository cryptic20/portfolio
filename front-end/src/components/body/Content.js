import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Projects, Hobbies, About } from '../pages'
import Footer from '../footer/Footer'
import Divider from '@material-ui/core/Divider'
const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/projects',
    exact: false,
    component: Projects
  },
  {
    path: '/hobbies',
    exact: false,
    component: Hobbies
  },
  {
    path: '/about',
    exact: false,
    component: About
  }
]

function Content () {
  return (
    <React.Fragment>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <Footer />
    </React.Fragment>
  )
}

export default Content
