import React from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';

const Header = () => {
    return (
    <header>
     <Container>
       <Navbar>
           <NavbarBrand>Aircnc</NavbarBrand>
      
       <Nav className="ml-auto">
          <NavLink>Home</NavLink>
          <NavLink>Exprince</NavLink>
          <NavLink>Login</NavLink>
          <NavLink>SignUp</NavLink>
       </Nav>
       </Navbar>
     </Container>   
    
                
    </header>
    );
};

export default Header;