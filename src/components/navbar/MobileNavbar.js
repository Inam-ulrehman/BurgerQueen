import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
// import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { navbarData, navbarMemberData } from '../../utils/data'
import Logo from '../Logo'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CartIcon from '../Cart/CartIcon'

const drawerWidth = 280

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  // Logic to see if user is there then change data.=======
  const { user: isUser } = useSelector((state) => {
    return state.user
  })
  const isUserTrue = isUser.length === undefined

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <Logo />
      </Typography>
      <Divider />
      <List>
        {(isUserTrue ? navbarMemberData : navbarData).map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ display: 'grid' }}>
              <NavLink key={item.id} to={item.path}>
                <Button size='small' variant='contained' sx={{ mr: 1 }}>
                  {item.title}
                </Button>
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Wrapper>
      <Box sx={{ display: 'flex' }}>
        <div className='cartIcon'>
          <CartIcon />
        </div>
        <AppBar component='nav'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Logo />
            </Typography>
            <Box
              sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '1rem' }}
            >
              {(isUserTrue ? navbarMemberData : navbarData).map((item) => {
                return (
                  <NavLink key={item.id} to={item.path}>
                    <Button size='small' variant='contained' sx={{ mr: 1 }}>
                      {item.title}
                    </Button>
                  </NavLink>
                )
              })}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .MuiToolbar-root {
    min-height: 64px;
  }
  .cartIcon {
    z-index: 2000;
    position: fixed;
    background: white;
    padding: 0;
    border-radius: var(--radius);
    top: 18px;
    right: 6px;

    button,
    p {
      padding: 0px;
      margin-right: auto;
      display: flex;
      justify-content: flex-start;
      min-width: fit-content;
      font-size: large;
    }
  }
`
export default DrawerAppBar
