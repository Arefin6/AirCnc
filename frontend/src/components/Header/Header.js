import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';

const Header = () => {
    return (
    <header className="mt-2 header">
     <Container>
       <Navbar>
           <NavbarBrand className="branding">Aircnc</NavbarBrand>
      
       <Nav className="ml-auto">
          <NavLink className="navlink">Host your Home</NavLink>
          <NavLink className="navlink">Host your Experience</NavLink>
          <NavLink className="navlink">Help</NavLink>
          <NavLink className="navlink" href='/login'>Login</NavLink>
          <NavLink href='/signup' className="btn btn-rounded btn-primary text-white px-3">Sign Up</NavLink>
       </Nav>
       </Navbar>
     </Container>   
    
                
    </header>
    );
};

export default Header;