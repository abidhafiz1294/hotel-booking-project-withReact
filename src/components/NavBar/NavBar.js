import React, { Component } from "react";
import logo from "../../images/beachResort.png";
import { Link } from "react-router-dom";
import { NavbarBrand, Nav, Collapse, Navbar, NavLink, NavbarToggler, NavItem } from "reactstrap";


class NavBar extends Component {
    constructor(props) {
        super();
        this.state = {
            isOpen: false,
        };
    }
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div >
                <Navbar light expand="sm">
                    <div className="container">

                        <NavbarBrand href="/">
                            <img src={logo} alt="site logo"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.handleToggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem >

                                    <Link to='/' className="nav-links active" >Home</Link>



                                </NavItem>
                                <NavItem >

                                    <Link to='/Rooms' className="nav-links " >Rooms</Link>

                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
            </div>
        )
    }
}
export default NavBar;