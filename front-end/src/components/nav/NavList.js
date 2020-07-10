import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
import { routes } from './RouteList'
import { useSelector } from 'react-redux'

function NavList () {
  const selectedPage = useSelector((state) => state.selectedButton)
  return (
    <React.Fragment>
      {routes.map(({ primaryText, icon, path }, i) => (
        <ListItem
          key={i}
          button
          component={Link}
          to={path}
          selected={primaryText === selectedPage}
        >
          <ListItemIcon>
            <Icon>{icon}</Icon>
          </ListItemIcon>
          <ListItemText
            primary={primaryText}
            primaryTypographyProps={{ noWrap: true }}
          />
        </ListItem>
      ))}
    </React.Fragment>
  )
}
export default NavList
