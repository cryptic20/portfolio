import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from '../footer/Footer'
import Divider from '@material-ui/core/Divider'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions'
import { routes } from '../nav/RouteList'

function Content () {
  const dispatch = useDispatch()
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
