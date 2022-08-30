/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CategoryContainer from '../Components/CategoryContainer';
import '../styles/NavBarCss.css';

export default class NavBarExample extends Component {
  render() {
    const { handleRadioClick, developsState } = this.props;
    return (
      <div>
        <Navbar className="container-navbar">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <CategoryContainer
                    handleRadioClick={ handleRadioClick }
                  />
                </NavDropdown>
                <Nav.Link>
                  <button
                    type="button"
                    onClick={ developsState }
                  >
                    Desenvolvedores
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

NavBarExample.propTypes = {
  handleRadioClick: PropTypes.func.isRequired,
  developsState: PropTypes.func.isRequired,
};
