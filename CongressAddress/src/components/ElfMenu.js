/**
 * Created by bcuser on 5/1/17.
 */
import React, {Component} from 'react';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../css/App.css';


class ElfMenu extends Component {

    /*    render() {
     return (
     <div className='App'>
     <ul>
     <li><Link to='/'>AddressShow</Link></li>
     <li><Link to='/edit'>AdressEdit</Link></li>
     <li><Link to='/small'>SmallNumbers</Link></li>
     </ul>
     </div>
     );
     }
     }*/

    render() {
        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>Home</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Address Show</NavItem></LinkContainer>
                        {/*                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                         <MenuItem eventKey={3.1}>Action</MenuItem>
                         <MenuItem eventKey={3.2}>Another action</MenuItem>
                         <MenuItem eventKey={3.3}>Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey={3.3}>Separated link</MenuItem>
                         </NavDropdown>*/}
                        <LinkContainer to='/edit'><NavItem>Address Edit</NavItem></LinkContainer>
                        {/*                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                         <MenuItem eventKey={3.1}>Action</MenuItem>
                         <MenuItem eventKey={3.2}>Another action</MenuItem>
                         <MenuItem eventKey={3.3}>Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey={3.3}>Separated link</MenuItem>
                         </NavDropdown>*/}
                        <LinkContainer to='/small'><NavItem>Small numbers</NavItem></LinkContainer>
                        {/*                       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                         <MenuItem eventKey={3.1}>Action</MenuItem>
                         <MenuItem eventKey={3.2}>Another action</MenuItem>
                         <MenuItem eventKey={3.3}>Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey={3.3}>Separated link</MenuItem>
                         </NavDropdown></Nav>*/}
                        {/*                    <Nav pullRight>
                         <NavItem eventKey={1} href="#">Link Right</NavItem>
                         <NavItem eventKey={2} href="#">Link Right</NavItem>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div>
                {navbarInstance}
            </div>
        );
    }
}


export default ElfMenu;
