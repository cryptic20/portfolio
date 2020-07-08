import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../redux/actions'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'
const list = [
  {
    primaryText: 'Home',
    icon: 'home',
    path: '/'
  },
  {
    primaryText: 'Projects',
    icon: 'folder',
    path: '/projects'
  },
  {
    primaryText: 'Hobbies',
    icon: 'games',
    path: '/hobbies'
  },
  {
    primaryText: 'About',
    icon: 'info',
    path: '/about'
  },
  {
    primaryText: 'Contact',
    icon: 'contact_phone',
    path: '/contact'
  }
]

function NavList () {
  const [selected, setSelected] = useState('Home')
  const dispatch = useDispatch()

  const selectAndDispatch = (text) => {
    dispatch(setCurrentPage(text))
    setSelected(text)
  }

  return (
    <React.Fragment>
      {list.map(({ primaryText, icon, path }, i) => (
        <ListItem
          key={i}
          button
          component={Link}
          to={path}
          selected={primaryText === selected}
          onClick={() => selectAndDispatch(primaryText)}
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
