import React, {Component} from 'react'
import ReactFontFace from 'react-font-face'
import NavFont from '../fonts/HelveticaNeueLTStd-MdCn.otf'
import NavFont1 from '../fonts/HelveticaNeueLTStd-MdCnO.otf'
import {Link} from 'gatsby'
//import * as B from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/layout'
import '../css/style.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  /* UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem */ } from 'reactstrap';


export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar 
        style={{background:'#663399'}} 
        light expand="md">
          <NavbarBrand href="/">xxx </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about"><h1>About</h1></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/programmingskills">Programming Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sometoughts">Some toughts</NavLink>
              </NavItem>
           {/*    <NavItem> this will go in about
                <NavLink href="/education">Education</NavLink>
              </NavItem> */}
{/*               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
