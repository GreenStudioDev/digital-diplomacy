import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarStyled } from '../styles/styledComponents/NavBarStyled'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { MenuButtonStyled } from '../styles/styledComponents/NavBarHomeStyled'
import PropTypes from 'prop-types'

NavBar.propTypes = {
  themeToggler: PropTypes.func.isRequired
}

function NavBar ({ themeToggler }) {
  function changeTheme () {
    themeToggler()
  }
  return (
    <NavBarStyled>
      <div className="navbar-header">
        <i className='backArrow'>
          <Link to={'/en/digital-diplomacy'} tabIndex={0}>
            <ArrowBackIcon
              sx={{
                fontSize: 40,
                color: '#ffce21'

              }}

            />
          </Link>
        </i>
        <MenuButtonStyled className="menu-item"type='button'
          onClick={changeTheme}
        >
          <p tabIndex={0}>CHANGE THEME</p>
        </MenuButtonStyled>
      </div>
    </NavBarStyled>
  )
}

export default NavBar
