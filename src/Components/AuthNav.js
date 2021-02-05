import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#052cf0fd',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  activeLink: {
    color: '#f08205fd',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Реєстрація
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логін
      </NavLink>
    </div>
  );
}
