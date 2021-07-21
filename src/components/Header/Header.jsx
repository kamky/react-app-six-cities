// Core
import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

// Other
import {routes} from "../../routes";

// Component
export const Header = ({isAuthenticated, email}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={routes.ROOT} className="header__logo-link">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isAuthenticated ? (
                    <span className="header__user-name user__name">
                      {email}
                    </span>
                  ) : (
                    <span className="header__login">Sign in</span>
                  )}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isAuthenticated: false,
  email: `Oliver.conner@gmail.com`,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  email: PropTypes.string,
};
