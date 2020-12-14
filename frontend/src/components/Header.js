import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = ({ headerAuthStatus, handleLogout, login }) => (
    <header className="header" >
      <Logo />
      {headerAuthStatus === 'register'
        && <Link className="header__auth-info" to='/sign-up'>Зарегистрироваться</Link>
      }
      {headerAuthStatus === 'login'
        && <Link className="header__auth-info" to='/sign-in'>Войти</Link>
      }
      {headerAuthStatus === 'logout'
        && (<div>
          <span className="header__login-info">{login}</span>
          <Link className="header__auth-info" to="/" onClick={handleLogout}>Выйти</Link>
        </div>
        )
      }
    </header>
);

Header.propTypes = {
  headerAuthStatus: PropTypes.string,
  handleLogout: PropTypes.func,
  login: PropTypes.string,
};

export default Header;
